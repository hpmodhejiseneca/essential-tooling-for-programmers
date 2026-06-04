---
sidebar_position: 6
---

# GitHub Basic

## Introduction to GitHub

### What is GitHub?

GitHub is like a social media platform for programmers and their code. Just as you share photos on Instagram or updates on Facebook, developers share their code projects on GitHub.

**Key Points:**
- **Web-based platform** that uses Git (a DVCS) for version control
- **Cloud storage** for your code projects
- **Collaboration tools** for working with others
- **Free and paid plans** available
- **Most popular** platform for open-source projects

### GitHub vs Git: What's the Difference?

**Git** is like a notebook you keep at home — you write, erase, and rewrite your ideas. **GitHub** is like publishing that notebook online so others can read it, suggest edits, or even contribute.

- **Git**: The version control system (software) — think of it as the engine.
- **GitHub**: A web service that hosts Git repositories online — the garage that stores the car (your project).

### Why Use GitHub?

**For Students:**
- Store your projects safely online
- Show your work to potential employers
- Collaborate on group projects
- Build a portfolio of your work

**For Professionals:**
- Industry standard for software development
- Backup and sync code across devices
- Track bugs and feature requests
- Deploy applications

### Getting Started with GitHub

1. Visit [https://github.com](https://github.com) and click "Sign up"
2. Choose a username, enter your email, and create a strong password
3. Select the "Free" plan for personal use
4. Verify your email address
5. Complete your profile (picture, bio, location)

---

## GitHub Fundamentals

### Basic GitHub Terminology

- **Repository (Repo)**: A folder that contains your entire project, including all files and the complete history of changes.
- **Username**: Your unique identifier on GitHub (e.g., @johnsmith)
- **Organization**: A shared account where multiple people can collaborate on projects
- **Fork**: Making your own copy of someone else's project
- **Star**: Like bookmarking a project you find interesting
- **Watch**: Get notifications about activity in a repository
- **Gist**: A simple way to share code snippets

### Creating Your First Repository

1. Click the "+" icon in the top right corner and select "New repository"
2. Choose a descriptive repository name (e.g., "my-first-website")
3. Add a brief description
4. Choose "Public" or "Private" visibility
5. Check "Add a README file"
6. Choose a licence (MIT Licence is good for beginners)
7. Click "Create repository"

**Example Repository Setup:**
```text
Repository name: my-study-notes
Description: Collection of my class notes and study materials
Visibility: Public
✅ Initialize with README
Licence: MIT Licence
```

---

## Core Concepts: Repository, Commit, Branch

### Repository Deep Dive

A repository contains:
- **Files and Folders**: Your actual project content
- **History**: Complete record of all changes ever made
- **Branches**: Different versions of your project
- **Issues**: Bug reports and feature requests
- **Wiki**: Documentation pages

### Understanding Commits

A commit is like taking a snapshot of your project at a specific moment in time. Each commit records what files changed, what exactly changed in those files, who made the changes, when the changes were made, and a message describing why.

**Good Commit Messages:**
- ✅ "Add contact form to homepage"
- ✅ "Fix navigation menu on mobile devices"
- ✅ "Update README with installation instructions"

**Poor Commit Messages:**
- ❌ "Fixed stuff"
- ❌ "Update"
- ❌ "asdf"

### Making Your First Commit

1. Navigate to your repository on GitHub
2. Click on README.md, then the pencil icon (Edit this file)
3. Add some content
4. Scroll down to "Commit changes"
5. Add a descriptive commit message
6. Click "Commit changes"

### Understanding Branches

Think of branches like parallel universes of your project. You can work on different features or experiments without affecting the main version.

**Default Branch:**
- **main**: The primary branch — the "official" version of your project

**Common Branch Names:**
- `feature/study-schedule`
- `bugfix/typos-in-notes`
- `experiment/new-format`

---

## Issue Tracking

### What are Issues?

Issues are GitHub's way of tracking bugs, feature requests, questions, and tasks — a to-do list for your project that everyone can see and contribute to.

**Types of Issues:**
- **Bug Reports**: Something is broken and needs fixing
- **Feature Requests**: Ideas for new functionality
- **Questions**: Need help or clarification
- **Tasks**: Work that needs to be done

### Anatomy of a Good Issue

1. **Clear Title**: Summarizes the issue in one line
2. **Detailed Description**: Explains the problem or request
3. **Steps to Reproduce**: For bugs, how to recreate the problem
4. **Expected Behaviour**: What should happen
5. **Actual Behaviour**: What actually happens
6. **Labels**: Categories to organize issues
7. **Assignees**: Who will work on this

### Working with Issues

**Issue Lifecycle:** Open → Assigned → In Progress → Closed

**Using Labels:**
- **bug**: Something is broken
- **enhancement**: New feature or improvement
- **documentation**: Documentation needs work
- **good first issue**: Easy for beginners
- **help wanted**: Looking for contributors

---

## Commenting in GitHub

### Where Can You Add Comments?

**Issue Comments:** Notes inside an issue to describe something that needs to be done.

**Commit Comments:** Comments added to a specific commit to explain or clarify what was done in that version.

**Code Comments (Line Comments):** Added to specific lines of code or text in a file.

### Good Commenting Practices

- ✅ **Be Clear and Helpful:** `Line 8: This sentence is hard to follow. Consider rewording.`
- ✅ **Be Polite and Encouraging:** `Nice work! Just a small suggestion for improvement below.`
- ✅ **Be Specific:** `The image isn't loading because the file name is spelled 'imgage.jpg' instead of 'image.jpg'.`
- ❌ Avoid vague comments like "It's broken" or "Fix this."

---

## Key Points Summary

**Repository Management:**
- ✅ Use descriptive repository names
- ✅ Write clear README files
- ✅ Choose appropriate licences
- ✅ Use .gitignore for unnecessary files

**Commit Practices:**
- ✅ Write clear, descriptive commit messages
- ✅ Make small, focused commits
- ✅ Commit related changes together

**Branching Strategy:**
- ✅ Create branches for new features
- ✅ Use descriptive branch names
- ✅ Delete merged branches

**Common Mistakes to Avoid:**
- ❌ Commit directly to main branch without review
- ❌ Write vague commit messages like "updated stuff"
- ❌ Share personal information or sensitive data in public repositories
