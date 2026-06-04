---
sidebar_position: 7
---

# Essential Git Commands and Workflow

## Quick Review: GitHub vs Git

- **Git** = The tool that tracks changes (like a smart notebook)
- **GitHub** = The online service that stores your Git projects (like cloud storage)

Think of your computer as your **home office** and GitHub as your **shared office building**:
- You work on documents at home (local Git)
- You save backup copies to the shared office (push to GitHub)
- You get updates from colleagues' work (pull from GitHub)

---

## Setting Up Git on Your Computer

### Installing Git

**For Windows:** Download Git from https://git-scm.com and run the installer with default settings.

**For Mac:** Open Terminal and type `git --version`. If not installed, it will prompt you to install.

**For Linux:**
```bash
sudo apt install git  # Ubuntu/Debian
sudo yum install git  # CentOS/RHEL
```

### First-Time Setup (Required!)

Before using Git, you must tell it who you are:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"
```

Every change you make will be tagged with this information. Verify setup with:
```bash
git config --list
```

---

## Essential Git Commands

### Understanding the Git Workspace

Your project has three areas:

1. **Working Directory** = Your messy desk where you're actively working
2. **Staging Area** = A clean tray where you organize things before filing
3. **Repository** = Your organized file cabinet with a complete history

```text
Working Directory → Staging Area → Repository
  (make changes)    (git add)      (git commit)
```

---

### `git init` — Starting a New Project

**What it does:** Creates a new Git project in your current folder.

```bash
mkdir my-recipe-collection
cd my-recipe-collection
git init
```

Git creates a hidden `.git` folder that stores all the tracking information.

---

### `git add` — Preparing Changes

**What it does:** Moves files from your working directory to the staging area.

```bash
git add filename.txt   # Add one specific file
git add .              # Add all changed files
git add *.txt          # Add all text files
```

**Understanding `git status`:**
- **Red text** = Changes not staged (still in working directory)
- **Green text** = Changes staged and ready to commit

---

### `git commit` — Saving a Snapshot

**What it does:** Permanently saves your staged changes with a message.

```bash
git commit -m "Add chocolate chip cookie recipe"
```

**Good Commit Messages:**
- ✅ `"Add chocolate chip cookie recipe"`
- ✅ `"Fix baking temperature in brownie recipe"`

**Poor Commit Messages:**
- ❌ `"updated stuff"`
- ❌ `"fixed it"`

---

### `git log` — Viewing History

**What it does:** Shows the history of all commits.

```bash
git log              # Full detailed history
git log --oneline    # Simplified one-line format
git log --graph      # Shows branching visually
```

---

### `git branch` — Working with Branches

**What it does:** Creates and manages different versions of your project.

```bash
git branch                     # List all branches
git branch new-branch-name     # Create new branch
git branch -d branch-name      # Delete branch
```

---

### `git checkout` — Switching Between Branches

**What it does:** Switches you to a different branch.

```bash
git checkout branch-name       # Switch to existing branch
git checkout -b new-branch     # Create and switch to new branch
```

---

### `git merge` — Combining Branches

**What it does:** Combines changes from one branch into another.

```bash
# Switch to the branch you want to merge INTO
git checkout main

# Merge another branch into current branch
git merge branch-name
```

**Types of Merges:**
1. **Fast-forward merge** = Your branch just adds new stuff (like adding a new chapter to a book)
2. **Three-way merge** = Both branches have different changes (like combining two people's edits to the same essay)

---

### `git remote` — Connecting to GitHub

**What it does:** Links your local Git project to a GitHub repository.

```bash
git remote add origin https://github.com/username/repository-name.git
git remote -v   # View remote connections
```

**Understanding "origin":** The default name for your main remote repository.

---

### `git push` — Uploading to GitHub

**What it does:** Sends your local commits to GitHub.

```bash
git push -u origin main   # First time push (sets up tracking)
git push                  # Future pushes
```

---

### `git pull` — Downloading from GitHub

**What it does:** Gets the latest changes from GitHub.

```bash
git pull origin main   # Pull from specific branch
git pull               # Pull from tracked branch
```

**When to use pull:**
- Before starting work each day
- When you know others have made changes
- Before pushing your own changes

---

## Git Workflow in Practice

### The Standard Daily Workflow

**Morning (Getting Ready to Work):**
```bash
git pull
git checkout -b add-breakfast-recipes
```

**During Work (Making Changes):**
```bash
# Make changes to files
git status
git add pancakes.txt
git commit -m "Add basic pancake recipe with ingredients"
```

**End of Day (Sharing Your Work):**
```bash
git checkout main
git merge add-breakfast-recipes
git push
git branch -d add-breakfast-recipes
```

---

## Connecting Local Git to GitHub

### Method 1: Start Local, Connect to GitHub

```bash
# Already have a local project? Connect it to GitHub:
git remote add origin https://github.com/username/repository-name.git
git push -u origin main
```

### Method 2: Start on GitHub, Clone Locally

```bash
git clone https://github.com/username/repository-name.git
cd repository-name
```

---

### School Project Example

```bash
# Initialize project
git init school-project
cd school-project

# Initial commit
echo "# School Project" > README.md
git add README.md
git commit -m "Initial commit with README"
git branch -M main

# Create branches for each section
git checkout -b introduction
echo "This is the introduction section." > introduction.md
git add introduction.md
git commit -m "Add introduction section"
git checkout main

git checkout -b research-methods
echo "This is the research methods section." > research-methods.md
git add research-methods.md
git commit -m "Add research methods section"
git checkout main
```

---

*Remember: Git might seem complex at first, but with practice, these commands will become second nature. Think of learning Git like learning to drive — it feels overwhelming initially, but soon you'll do it without thinking!*
