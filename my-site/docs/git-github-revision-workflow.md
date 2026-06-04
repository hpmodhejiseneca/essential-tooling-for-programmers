---
sidebar_position: 8
---

# Git and GitHub Revision Control and Collaboration

## Quick Review + GitHub Basics

- `git init` - Start a new project
- `git add` - Prepare changes
- `git commit` - Save a snapshot
- `git push` - Send to GitHub
- `git pull` - Get updates from GitHub

### Two Ways to Do Everything

**Command Line Way** (what you type):
```bash
git status
```
Text-based output in your terminal.

**GitHub Website Way** (what you click): Visual representation of the same information — green/red badges and highlights show file status at a glance.

**Why Learn Both?**
- **Command line** = Faster once you know it, works everywhere
- **GitHub website** = Visual, easier to understand, good for beginners
- **Best approach** = Use GitHub website to learn, then gradually try commands

---

## Seeing Changes: Git Diff + GitHub Compare

### Method 1: Command Line

```bash
# See what you changed (before saving)
git diff

# See changes between your last save and current work
git diff HEAD~1 HEAD
```

**What does "HEAD" mean?**
- **HEAD** = Your most recent save (latest commit)
- **HEAD~1** = One save before that (previous commit)

### Method 2: GitHub Website

1. Go to your repository on GitHub.com
2. Click "Commits"
3. Click on any commit to see what changed
4. Look for coloured lines:
   - **Red lines (-)** = What was removed
   - **Green lines (+)** = What was added

---

## Understanding History: Git Log + GitHub Insights

### Method 1: Command Line

```bash
git log --oneline           # Simple history
git log --oneline --graph   # Visual tree (shows branches)
git log --grep="fix"        # Find specific changes
```

### Method 2: GitHub Website

1. Go to your repository on GitHub.com
2. Click "Insights" tab → "Network" for a visual tree
3. Or click "Commits" for a list of all changes
4. Click any commit to see details including when, what, and how much was added/removed

---

## Safe Ways to Undo Mistakes

### Scenario 1: "I Just Made a Commit But Want to Add More"

**Command Line (Safest):**
```bash
# Undo last commit but keep your changes
git reset --soft HEAD~1

# Add more changes, then commit everything together
git add your-file.txt
git commit -m "Complete version with all changes"
```

**GitHub Website Way:** You cannot undo commits directly on GitHub. Instead:
1. Make the additional changes in a new commit
2. Use a descriptive commit message like "Add missing conclusion to essay"

### Scenario 2: "I Made a Mistake and Need to Fix It"

**Command Line (Recommended):**
```bash
# Create a new commit that fixes the mistake (safe!)
git revert HEAD
```

**GitHub Website (Easier for Beginners):**
1. Go to your repository
2. Find the file with the mistake
3. Click the pencil icon (Edit this file)
4. Make your corrections
5. Write a clear commit message like "Fix incorrect date in assignment"
6. Click "Commit changes"

---

## Team Collaboration Workflows

### Scenario 1: Joining Someone's Project

1. Teacher/colleague shares a link: `https://github.com/username/project`
2. Click "Fork" button (top-right) — this makes your own copy
3. Clone your fork locally:
   ```bash
   git clone [paste-link-here]
   ```

**What Forking Does:**
- Creates your own copy you can edit freely
- Keeps connection to original project
- Lets you suggest changes back to the original

### Scenario 2: Contributing to a Project (GitHub Website — No Command Line Needed)

1. Fork the repository
2. Go to YOUR fork
3. Find the file you want to improve and click the pencil icon to edit
4. Make your improvements and commit your changes
5. Click "Pull Request"
6. Write an explanation of your changes
7. Click "Create Pull Request"

The repository owner gets notified, can review your changes, and if approved, your contribution gets added to the main project.

### Scenario 3: Getting Updates from Team

**GitHub Website Way:**
1. Go to your fork on GitHub
2. Look for message "This branch is X commits behind original"
3. Click "Sync fork" → "Update branch"

**Command Line Way:**
```bash
git pull origin main
```

---

## Essential Commands Reference

**Command Line:**
```bash
git status           # What's happening?
git add .            # Prepare all changes
git commit -m "..."  # Save with message
git push origin main # Send to GitHub
git pull origin main # Get updates
```

**GitHub Website Actions:**
- **Fork** — Make your own copy
- **Edit files** — Click pencil icon
- **View commits** — Click commit count
- **Compare changes** — Click on any commit
- **Pull requests** — Suggest changes
- **Sync fork** — Get updates

### Daily Workflow for Students

1. **Morning:** `git pull origin main` (get updates)
2. **Working:** Make changes, `git add`, `git commit`, `git push`
3. **Collaboration:** Use GitHub website to review others' work

---

**Remember:**
- **GitHub website is your friend** — use it to understand what's happening
- **Command line is faster** once you learn it
- **Always pull before push** — get updates first
- **Descriptive commit messages** help everyone understand changes
- **Mistakes are normal** — both Git and GitHub help you fix them safely

Every expert was once a beginner. Git and GitHub might seem complex now, but with practice, they'll become as natural as saving a document!
