#<div align="center">

<!-- HERO BANNER -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=200&section=header&text=OSS%20Audit%20—%20Git&fontSize=52&fontColor=ffffff&fontAlignY=38&desc=Open%20Source%20Software%20Capstone%20Project%20•%20VITyarthi&descSize=16&descColor=a78bfa&animation=fadeIn" width="100%"/>

<!-- BADGES -->
<p>
  <img src="https://img.shields.io/badge/Course-Open%20Source%20Software-7c3aed?style=for-the-badge&logo=bookstack&logoColor=white"/>
  <img src="https://img.shields.io/badge/Subject-Git-f05032?style=for-the-badge&logo=git&logoColor=white"/>
  <img src="https://img.shields.io/badge/Licence-GPL%20v2-22c55e?style=for-the-badge&logo=gnu&logoColor=white"/>
  <img src="https://img.shields.io/badge/Shell-Bash%204%2B-4ade80?style=for-the-badge&logo=gnubash&logoColor=white"/>
  <img src="https://img.shields.io/badge/Scripts-5%20Written-6366f1?style=for-the-badge&logo=linux&logoColor=white"/>
</p>

<p>
  <img src="https://img.shields.io/badge/Tested%20on-Ubuntu%2022.04-e11d48?style=flat-square&logo=ubuntu&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tested%20on-Fedora%2039-3b82f6?style=flat-square&logo=fedora&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tested%20on-Debian%2012-a21caf?style=flat-square&logo=debian&logoColor=white"/>
</p>

<br/>

> *"In the spirit of free software — built to learn, shared to grow."*

<br/>

</div>

---

## 🧑‍💻 Student Information

<table align="center">
  <tr>
    <td><b>👤 Student Name</b></td>
    <td>Kavyansh Krishan</td>
  </tr>
  <tr>
    <td><b>🎫 Registration No.</b></td>
    <td>24BCE10785</td>
  </tr>
  <tr>
    <td><b>💻 Chosen Software</b></td>
    <td><a href="https://git-scm.com/">Git</a> — Distributed Version Control System</td>
  </tr>
  <tr>
    <td><b>⚖️ Software Licence</b></td>
    <td>GNU General Public License v2 (GPL v2)</td>
  </tr>
  <tr>
    <td><b>📚 Course</b></td>
    <td>Open Source Software (OSS NGMC)</td>
  </tr>
</table>

---

## 🌟 Why Git?

<div align="center">
<img src="https://img.shields.io/badge/Created%20by-Linus%20Torvalds-f59e0b?style=flat-square"/>
<img src="https://img.shields.io/badge/Year-2005-64748b?style=flat-square"/>
<img src="https://img.shields.io/badge/Philosophy-Software%20Freedom-22c55e?style=flat-square"/>
</div>

<br/>

Git's origin story is one of the most compelling in open-source history. It was born in **direct response to the withdrawal of BitKeeper's free licence** from the Linux kernel project — a moment that crystallised what software freedom truly means.

Linus Torvalds didn't just build a replacement. He built something **better, faster, and forever free** — and gave it to the world under GPL v2. That story is the soul of this capstone project.

---

## 📁 Repository Structure

```
oss-audit-24BCE10785/
│
├── 📄 README.md                               ← You are here
│
├── 📂 scripts/
│   ├── 🖥️  script1_system_identity.sh         ← System Identity Report
│   ├── 🔍  script2_package_inspector.sh       ← FOSS Package Inspector
│   ├── 🗂️  script3_disk_permission_auditor.sh  ← Disk & Permission Auditor
│   ├── 📋  script4_log_analyzer.sh            ← Log File Analyzer
│   └── ✍️  script5_manifesto_generator.sh     ← Open Source Manifesto Generator
│
└── 📑 OSS_Audit_Git_Report.pdf               ← Full project report
```

---

## 📜 The Five Scripts

> Click on any script to expand details, concepts, and usage.

<details>
<summary><b>🖥️ Script 1 — System Identity Report</b></summary>

<br/>

**File:** `scripts/script1_system_identity.sh`

Displays a formatted welcome screen showing the current Linux system's identity — think of it as your machine introducing itself.

### What it reports
| Output | Source Command |
|---|---|
| Linux distro name | `cat /etc/os-release` |
| Kernel version | `uname -r` |
| Logged-in user & home dir | `whoami`, `$HOME` |
| System uptime | `uptime` |
| Current date & time | `date` |
| OS licence (GPL v2) | hardcoded + displayed |

### Shell Concepts Covered
`Variables` • `Command substitution $()` • `echo formatting` • `grep` • `cut`

### Run it
```bash
./scripts/script1_system_identity.sh
```
No arguments needed. Output appears immediately.

</details>

---

<details>
<summary><b>🔍 Script 2 — FOSS Package Inspector</b></summary>

<br/>

**File:** `scripts/script2_package_inspector.sh`

Checks whether `git` is installed and displays its version, licence, and a philosophy note. Supports both **RPM-based** and **Debian-based** distros — no config needed, it auto-detects.

### Supported Package Managers
| Distro Family | Package Manager | Detection Command |
|---|---|---|
| Fedora / CentOS / RHEL | `rpm` | `rpm -qi git` |
| Ubuntu / Debian | `dpkg` | `dpkg -l git` |

### Shell Concepts Covered
`if-then-else` • `case` statement • `rpm -qi` • `dpkg -l` • `grep -E` • `command -v` • pipe chaining

### Run it
```bash
./scripts/script2_package_inspector.sh
```

> **Make sure git is installed first:**
> ```bash
> sudo apt install git      # Ubuntu/Debian
> sudo dnf install git      # Fedora/CentOS
> ```

</details>

---

<details>
<summary><b>🗂️ Script 3 — Disk & Permission Auditor</b></summary>

<br/>

**File:** `scripts/script3_disk_permission_auditor.sh`

Loops through key system directories and reports their permissions, owner, group, and disk usage. Also audits Git's system-wide and user-level config files.

### Directories Audited
`/etc` • `/var/log` • `/home` • `/usr/bin` • `/tmp` • `/var` • `/opt`

### Git Config Files Checked
- System-wide: `/etc/gitconfig`
- User-level: `~/.gitconfig`

### Shell Concepts Covered
`Array declaration` • `for` loop • `[ -d ]` directory test • `ls -ld` • `awk` • `du -sh` • `printf` formatting • `2>/dev/null`

### Run it
```bash
./scripts/script3_disk_permission_auditor.sh

# Some directories need elevated access:
sudo ./scripts/script3_disk_permission_auditor.sh
```

</details>

---

<details>
<summary><b>📋 Script 4 — Log File Analyzer</b></summary>

<br/>

**File:** `scripts/script4_log_analyzer.sh`

Reads a log file line by line, counts matches for a keyword (default: `error`, case-insensitive), prints the last 5 matching lines, and retries fallback log locations if the file doesn't exist.

### Usage Examples
```bash
# Default — search for 'error' in syslog
./scripts/script4_log_analyzer.sh /var/log/syslog

# Custom keyword
./scripts/script4_log_analyzer.sh /var/log/syslog WARNING

# Fedora/CentOS fallback
./scripts/script4_log_analyzer.sh /var/log/messages error
```

### Shell Concepts Covered
`Command-line args $1 $2` • `Default values ${2:-"error"}` • `while IFS= read -r` • Counter variables `$(( ))` • Array accumulation • Array slicing • Do-while simulation • `exit` codes

</details>

---

<details>
<summary><b>✍️ Script 5 — Open Source Manifesto Generator</b></summary>

<br/>

**File:** `scripts/script5_manifesto_generator.sh`

An interactive script that asks you three questions and weaves your answers into a **personalised open-source philosophy statement**, then saves it as a `.txt` file.

### What it asks
1. Your name / alias
2. Why you believe in open source
3. One piece of software that changed your world

### Output
Your manifesto is saved as:
```
manifesto_[yourusername].txt
```
in the current working directory.

### Shell Concepts Covered
`read -p` • String interpolation • File writing `>` and `>>` • `date` • `whoami` • Input validation `[ -z ]` • Function definition • `cat` for display

### Run it
```bash
./scripts/script5_manifesto_generator.sh
```
Fully interactive — just follow the prompts.

</details>

---

## ⚡ Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/KavyanshKrishan/Open_Source_Project_GIT.git
cd Open_Source_Project_GIT

# 2. Make all scripts executable
chmod +x scripts/*.sh

# 3. Run any script
./scripts/script1_system_identity.sh
./scripts/script2_package_inspector.sh
./scripts/script3_disk_permission_auditor.sh
./scripts/script4_log_analyzer.sh /var/log/syslog
./scripts/script5_manifesto_generator.sh
```

---

## 🔧 Dependencies

| Dependency | Used In | How to Install |
|---|---|---|
| `bash` v4+ | All scripts | Pre-installed on all Linux distros |
| `git` | Script 2, 3 | `sudo apt install git` or `sudo dnf install git` |
| `rpm` or `dpkg` | Script 2 | Pre-installed on respective distros |
| `awk`, `grep`, `cut`, `du`, `ls` | Scripts 1–4 | Part of GNU coreutils — pre-installed |
| `uname`, `whoami`, `uptime`, `date` | Script 1 | Pre-installed on all POSIX systems |

---

## ✅ Tested Environments

<div align="center">

| OS | Version | Status |
|---|---|:---:|
| Ubuntu | 22.04 LTS | ✅ Pass |
| Fedora | 39 | ✅ Pass |
| Debian | 12 (Bookworm) | ✅ Pass |

</div>

---

## 📖 Project Report

The full written report covering all 5 units of the course is available in this repository:

```
📑 OSS_Audit_Git_Report.pdf
```

It covers the history of Git, its GPL v2 licence, community governance, ecosystem analysis, and the philosophy of free and open-source software.

---

## ⚖️ Licence

The shell scripts in this repository are released under the **MIT Licence** — in the spirit of the open-source values explored in this project.

```
MIT License — Copyright (c) 2026 Kavyansh Krishan

Permission is granted to use, copy, modify, and distribute this
software for any purpose, with or without modification.
```

---

## 🎓 Academic Integrity

All written content in the project report is the original work of the student. Shell scripts were written and tested independently. Any external references consulted are cited within the report.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:24243e,50:302b63,100:0f0c29&height=120&section=footer&text=Built%20with%20freedom%20•%20GPL%20v2%20spirit&fontSize=16&fontColor=a78bfa&fontAlignY=65" width="100%"/>

<br/>

*Made with 🖤 by Kavyansh Krishan — VITyarthi, 2026*

</div>
