---
sidebar_position: 9
---

# Merge Strategies and Conflicts

## Understanding Merge Strategies

### What is Merging? Real-Life Analogy

Think of merging like combining two recipe improvements. You and your roommate both improve the same chocolate chip cookie recipe:
- **You** added vanilla extract and reduced sugar
- **Your roommate** added nuts and increased baking time
- Now you want to **combine both improvements** into one perfect recipe

This is exactly what Git merging does with files!

### The Two Main Merge Strategies

#### Fast-Forward Merge (The Simple Case)

When changes are linear — no conflicts, just adding new content.

```bash
git merge feature-chapter4
# Result: "Fast-forward" — just adds their work to your timeline
```

**GitHub Website Way:**
1. Click "Pull requests" → "New pull request"
2. If GitHub shows "Able to merge" with a green checkmark
3. Click "Create pull request" → "Merge pull request"

#### Three-Way Merge (The Common Case)

When parallel work needs to be combined:

```text
Your work:     Slide 1 → Slide 2 → Slide 3
                                    ↘
                                   MERGE POINT
                                    ↗
Teammate's:    Slide 4 → Slide 5 → Slide 6
```

```bash
git checkout main
git merge teammate-content
# Git automatically creates a merge commit combining both
```

### When to Use Each Strategy

| Strategy | When to Use | Real-Life Example |
|---|---|---|
| **Fast-Forward** | Simple, linear changes | Adding new chapters to a book |
| **Three-Way Merge** | Parallel work, may have conflicts | Group project with different sections |

---

## Understanding and Resolving Merge Conflicts

### What Are Merge Conflicts?

Conflicts occur when two people edit the same part of a file in different ways, and Git cannot automatically decide which change to keep.

**Original:** "The exam is on Friday."
**Your version:** "The midterm exam is on Friday at 2 PM."
**Partner's version:** "The final exam is on Friday in Room 101."

### How Conflicts Look in Files

```text
The exam is on Friday.

<<<<<<< HEAD (Your changes)
The midterm exam is on Friday at 2 PM.
=======
The final exam is on Friday in Room 101.
>>>>>>> partner-branch (Their changes)
```

**Breaking Down the Conflict Markers:**
- `<<<<<<< HEAD` = "Here's your version"
- `=======` = "Here's the dividing line"
- `>>>>>>> partner-branch` = "Here's their version"

### Method 1: Resolving Conflicts via Command Line

**Step 1: Identify the Conflict**
```bash
git merge partner-branch
# Output: "Automatic merge failed; fix conflicts and then commit the result."
git status
# Shows conflicted files in red
```

**Step 2: Open the Conflicted File and Choose Your Resolution**

You have three choices:
1. Keep only your version
2. Keep only their version
3. Combine both versions (usually best)

**Example Resolution (Combining Both):**
```text
The midterm AND final exams are on Friday. Midterm at 2 PM, Final in Room 101.
```

**Step 3: Clean Up and Commit**
```bash
# Remove all conflict markers (<<<, ===, >>>), save the file
git add conflicted-file.txt
git commit -m "Merge partner-branch: combine exam information"
```

### Method 2: Resolving Conflicts via GitHub Website

1. Create a Pull Request
2. If GitHub shows "This branch has conflicts that must be resolved"
3. Click "Resolve conflicts" button
4. GitHub opens a visual editor showing your changes (green) and their changes (red)
5. Edit directly, delete unwanted lines, remove conflict markers
6. Click "Mark as resolved" → "Commit merge" → "Merge pull request"

### Common Conflict Scenarios

#### Scenario 1: Bibliography Conflicts

**Smart Resolution — combine both:**
```text
Sources:
1. Jones, K. (2023). Advanced Chemistry
2. Smith, J. (2023). Introduction to Biology
```

#### Scenario 2: Editing Same Sentence

**Original:** "This method is good."
**Your version:** "This method is effective and reliable."
**Their version:** "This method is good for beginners."
**Smart Resolution:** "This method is effective, reliable, and good for beginners."

---

## Git Bisect — Finding Problematic Changes

### What is Git Bisect?

Git bisect uses binary search to find the exact commit that introduced a bug.

**Git Bisect Logic:**
- You know the bug wasn't there 10 commits ago
- You know the bug exists now
- Git bisect finds the **exact commit** that introduced the bug

### How It Works — Binary Search

```text
Commits:  A → B → C → D → E → F → G → H (current)
Status:   ✅   ?   ?   ?   ?   ?   ?   ❌

Step 1: Test middle (D) — if good:
                      ✅         ?   ?   ?   ❌
Step 2: Test middle of E-H (F) — if bad:
                      ✅      ?   ❌
Step 3: Test E — Result: E introduced the bug!
```

### Command Line Git Bisect

```bash
# Start bisecting
git bisect start
git bisect bad          # Mark current commit as bad
git bisect good HEAD~10 # Mark a known good commit

# Git checks out the middle commit — test your application
# Then mark as good or bad:
git bisect bad   # or:
git bisect good

# Repeat until Git finds the problematic commit
# When done:
git bisect reset
```

---

## Essential Commands Reference

```bash
# Merging
git merge branch-name   # Merge another branch
git merge --abort        # Cancel merge if problems

# Conflict Resolution
git status               # See conflicted files
git add resolved-file    # Mark conflict as resolved
git commit               # Complete the merge

# Bisecting
git bisect start         # Begin bisect session
git bisect good/bad      # Mark commits
git bisect reset         # End bisect session
```

### Team Collaboration Tips

1. **Communicate changes** before merging
2. **Use descriptive commit messages**
3. **Pull before push** — get updates first
4. **Resolve conflicts together** when possible
5. **Test the merged result** as a team
