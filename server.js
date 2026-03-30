const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Path to Git Bash on Windows
const BASH_PATH = 'C:\\Program Files\\Git\\bin\\bash.exe';

const runScript = (scriptName, args = '') => {
    return new Promise((resolve, reject) => {
        const fullCommand = `"${BASH_PATH}" "${path.join(__dirname, scriptName)}" ${args}`;
        console.log(`Executing: ${fullCommand}`);
        
        exec(fullCommand, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                // Return stdout even if error, as some scripts might exit with non-zero but still have output
                resolve({ stdout, stderr, error: error.message });
            } else {
                resolve({ stdout, stderr });
            }
        });
    });
};

app.get('/api/run/:id', async (req, res) => {
    const { id } = req.params;
    const scriptMap = {
        '1': 'script1_system_identity.sh',
        '2': 'script2_package_inspector.sh',
        '3': 'script3_disk_permission_auditor.sh',
        '4': 'script4_log_analyzer.sh',
        '5': 'script5_manifesto_generator.sh'
    };

    const script = scriptMap[id];
    if (!script) {
        return res.status(404).json({ error: 'Script not found' });
    }

    // Default args for script 4 (Log Analyzer)
    let args = '';
    if (id === '4') {
        // Try to find a log file or use a mock path
        args = '/var/log/syslog'; 
    }

    try {
        const result = await runScript(script, args);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Manifesto generator (Script 5) needs interactive input, so we'll handle it specially or mock it
app.post('/api/manifesto', async (req, res) => {
    const { tool, freedom, build } = req.body;
    
    // Create a temporary script to run script 5 with piped inputs
    const tmpInput = `${tool}\n${freedom}\n${build}\n`;
    const scriptPath = path.join(__dirname, 'script5_manifesto_generator.sh');
    const command = `echo -e "${tmpInput}" | "${BASH_PATH}" "${scriptPath}"`;
    
    exec(command, (error, stdout, stderr) => {
        res.json({ stdout, stderr, error });
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
