import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Terminal, 
  Activity, 
  HardDrive, 
  FileText, 
  Cpu, 
  User, 
  Search,
  CheckCircle2,
  AlertCircle,
  PlayProgress
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AuditResult {
  stdout: string;
  stderr: string;
  error?: string;
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('1');
  const [results, setResults] = useState<Record<string, AuditResult>>({});
  const [loading, setLoading] = useState<string | null>(null);
  const [manifestoData, setManifestoData] = useState({ tool: '', freedom: '', build: '' });

  const auditScripts = [
    { id: '1', name: 'System Identity', icon: <Cpu />, description: 'Linux distribution, kernel, and license audit.' },
    { id: '2', name: 'Package Inspector', icon: <Search />, description: 'FOSS package verification (Git focus).' },
    { id: '3', name: 'Disk Auditor', icon: <HardDrive />, description: 'Directory permissions and disk usage audit.' },
    { id: '4', name: 'Log Analyzer', icon: <Activity />, description: 'Scan system logs for errors and warnings.' },
    { id: '5', name: 'Manifesto Gen', icon: <FileText />, description: 'Generate personalized OS philosophy.' },
  ];

  const runAudit = async (id: string) => {
    setLoading(id);
    try {
      const response = await fetch(`/api/run/${id}`);
      const data = await response.json();
      setResults(prev => ({ ...prev, [id]: data }));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(null);
    }
  };

  const generateManifesto = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading('5');
    try {
      const response = await fetch('/api/manifesto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(manifestoData)
      });
      const data = await response.json();
      setResults(prev => ({ ...prev, ['5']: data }));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Shield size={48} color="#6366f1" />
            <h1>OSS Audit Dashboard</h1>
          </div>
          <p>Open Source Software Capstone Project | <strong>Kavyansh Krishan (24BCE10785)</strong></p>
          <div style={{ marginTop: '1rem' }}>
            <span className="tag">VITyarthi</span>
            <span className="tag" style={{ marginLeft: '0.5rem' }}>Git Audit</span>
            <span className="tag" style={{ marginLeft: '0.5rem' }}>Port 4000</span>
          </div>
        </motion.div>
      </header>

      <main className="grid">
        {auditScripts.map((script, idx) => (
          <motion.div 
            key={script.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className={`glass-card ${activeTab === script.id ? 'active' : ''}`}
            onClick={() => setActiveTab(script.id)}
            style={{ 
              cursor: 'pointer',
              border: activeTab === script.id ? '1px solid var(--primary)' : '1px solid var(--border)',
              background: activeTab === script.id ? 'rgba(99, 102, 241, 0.05)' : 'var(--card-bg)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ 
                background: 'var(--glass)', 
                padding: '0.75rem', 
                borderRadius: '1rem',
                color: activeTab === script.id ? 'var(--primary)' : 'inherit'
              }}>
                {script.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem' }}>{script.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{script.description}</p>
              </div>
            </div>

            {script.id === '5' ? (
              <form onSubmit={generateManifesto} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <input 
                  type="text" 
                  placeholder="Daily Tool (e.g. VS Code)" 
                  className="btn-outline" 
                  style={{ textAlign: 'left', fontSize: '0.9rem' }}
                  value={manifestoData.tool}
                  onChange={e => setManifestoData({...manifestoData, tool: e.target.value})}
                  onClick={e => e.stopPropagation()}
                />
                <input 
                  type="text" 
                  placeholder="Freedom meaning (one word)" 
                  className="btn-outline" 
                   style={{ textAlign: 'left', fontSize: '0.9rem' }}
                  value={manifestoData.freedom}
                  onChange={e => setManifestoData({...manifestoData, freedom: e.target.value})}
                  onClick={e => e.stopPropagation()}
                />
                 <input 
                  type="text" 
                  placeholder="What would you share?" 
                  className="btn-outline" 
                   style={{ textAlign: 'left', fontSize: '0.9rem' }}
                  value={manifestoData.build}
                  onChange={e => setManifestoData({...manifestoData, build: e.target.value})}
                  onClick={e => e.stopPropagation()}
                />
                <button 
                  type="submit" 
                  className="btn-primary" 
                  disabled={loading === '5'}
                  style={{ marginTop: '0.5rem' }}
                >
                  {loading === '5' ? <div className="loader" /> : <Terminal size={18} />}
                  Generate Manifesto
                </button>
              </form>
            ) : (
              <button 
                className="btn-primary" 
                onClick={(e) => { e.stopPropagation(); runAudit(script.id); }}
                disabled={loading === script.id}
              >
                {loading === script.id ? <div className="loader" /> : <Terminal size={18} />}
                Run Audit
              </button>
            )}

            <AnimatePresence>
              {results[script.id] && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ marginTop: '1.5rem' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span className="tag">Terminal Output</span>
                    {results[script.id].error ? <AlertCircle size={14} color="#f43f5e" /> : <CheckCircle2 size={14} color="#10b981" />}
                  </div>
                  <div className="terminal-box">
                    <pre style={{ whiteSpace: 'pre-wrap' }}>
                      {results[script.id].stdout || results[script.id].error || 'Executing...'}
                    </pre>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </main>

      <footer style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>© 2026 Kavyansh Krishan. Distributed under MIT License.</p>
        <p style={{ marginTop: '0.5rem' }}>Built with React, Vite & Express for VITyarthi Capstone.</p>
      </footer>
    </div>
  );
};

export default App;
