# EDDUU — Master Project Context

## 1. Project Identity

**Project:** EDDUU

**Local path:** C:\Users\mamit\edduu

**GitHub repository:** https://github.com/studyatomofficial-oss/edduu.git

**Production website:** https://edduu.com

**Hosting:** Cloudflare Pages

**Production branch:** main

### Deployment Flow

Local Development
→ Git Commit
→ git push origin main
→ GitHub
→ Cloudflare Pages
→ edduu.com

Cloudflare is configured for automatic deployment from the GitHub main branch.

The production deployment has already been verified successfully.


---

## 2. Product Vision

EDDUU is a premium, editorial, technical, calm, intelligent and alive AI/technology learning universe and engineering portfolio.

The website should communicate:

- practical technology
- system thinking
- architecture
- AI engineering
- production thinking
- real-world engineering decisions
- structured learning

### Visual Direction

- Warm white / white background
- Charcoal / slate typography
- Restrained semantic accent palette
- Navy Blue
- Emerald Green
- Teal
- Electric Purple
- Coral
- Golden Yellow
- Sage Green
- Dusty Rose
- Terracotta

Colours should communicate system/state meaning rather than simply decorate.

The overall visual personality should remain:

**Premium + Editorial + Technical + Calm + Intelligent + Alive**

---

## 3. Core Product Model

EDDUU is evolving toward two major areas:

### LEARNING

Technology
→ Knowledge
→ Advanced
→ Lab / Experience

### BUILDING

Projects
→ Architecture
→ Systems
→ Engineering Decisions

The long-term principle is:

**Data + reusable engines, not one-off pages.**

New technologies and projects should reuse existing registries, routing and UI shells wherever possible.


---

## 4. Current Technology Stack

### Frontend

- React
- TypeScript
- Vite
- CSS

### Build

The production build is verified with:


npm run build

The build runs:

	tsc -b

followed by:

vite build

---

## 5. Important Application Files

### Main Application

src/App.tsx

### Core Components

src/components/KnowledgePage.tsx

src/components/ProjectDetailShell.tsx

src/components/ProjectsSection.tsx

src/components/TechnologyUniverse.tsx

src/components/TechnologyUniversePage.tsx

src/components/AdvancedPageShell.tsx

### Learning Engine

src/engine/LearningLabShell.tsx

### Advanced Pages

src/pages/RAGAdvanced.tsx

src/pages/RedisAdvanced.tsx

### Main Stylesheet

src/App.css

### Data

src/data/

### Advanced Registry

src/data/advanced/

Current Advanced files:

src/data/advanced/index.ts

src/data/advanced/types.ts

src/data/advanced/ragAdvanced.ts

src/data/advanced/redisAdvanced.ts

### Redis Knowledge

src/data/redisKnowledge.ts

### Technology Routing

src/utils/technologyRouting.ts


---

## 6. Current Routing Model

EDDUU is currently a hash-based SPA.

Important routes include:

#technologies

#knowledge/rag

#knowledge/redis

#advanced/rag

#advanced/redis

#lab/rag

#lab/redis

#project/<project-slug>

#avinash

src/App.tsx reads window.location.hash, resolves the route and creates the appropriate application state.

The application listens for the browser hashchange event and updates the rendered page without requiring a full browser reload.

---

## 7. Learning Architecture

The intended learning journey for a technology is:

Technology
→ Knowledge
→ Advanced
→ Lab / Experience

### Knowledge

The Knowledge layer explains the technology and provides structured learning content.

Primary component:

src/components/KnowledgePage.tsx

Knowledge pages can expose an Advanced link when an Advanced definition exists for that technology.

The current approach uses:

getAdvancedBySlug(knowledge.slug)

This avoids hardcoding RAG as the only technology with Advanced content.

---

## 8. Advanced Architecture

The Advanced system is becoming registry-driven.

Current registry:

src/data/advanced/index.ts

It provides:

advancedEntries

advancedBySlug

getAdvancedBySlug()

Current definitions:

ragAdvanced

redisAdvanced

Definition type:

src/data/advanced/types.ts

The conceptual model is:

AdvancedDefinition
→ Advanced Registry
→ AdvancedPageShell
→ Rendered Advanced Learning Experience

An Advanced definition can contain:

- slug
- eyebrow
- title
- summary
- sections
- section id
- step
- title
- paragraphs
- flow
- items
- production

---

## 9. AdvancedPageShell

Reusable component:

src/components/AdvancedPageShell.tsx

The shell provides the common Advanced experience:

- Advanced header
- eyebrow
- title
- summary
- section navigation
- smooth scrolling
- implementation step labels
- paragraphs
- flow/architecture blocks
- grid content
- production tags
- sticky sidebar
- Enter Lab link
- Back to Knowledge link

The RAG Advanced page is the primary visual/reference model.

Redis Advanced should follow the same visual language.

Important CSS classes are defined in:

src/App.css

Examples:

.edduu-advanced-page

.edduu-advanced-header

.edduu-advanced-eyebrow

.edduu-advanced-title

.edduu-advanced-summary

.edduu-advanced-nav

.edduu-advanced-layout

.edduu-advanced-content

.edduu-advanced-section

.edduu-advanced-step

.edduu-advanced-flow

.edduu-advanced-grid

.edduu-advanced-production

.edduu-advanced-sidebar

.edduu-advanced-final

---

## 10. RAG

RAG is the original Advanced reference implementation.

Conceptual structure:

RAG
→ Knowledge
→ Advanced
→ Lab

Advanced route:

#advanced/rag

RAG Advanced provides the visual and structural reference for future Advanced technology pages.

---

## 11. Redis

Redis has now been added as a second technology using the reusable learning architecture.

Conceptual structure:

Redis
→ Knowledge
→ Advanced
→ Lab

Advanced route:

#advanced/redis

Redis Advanced contains 10 learning/implementation steps.

The sidebar exposes all 10 steps.

The section navigation uses smooth scrolling.

Redis Advanced follows the shared Advanced visual architecture.

Redis knowledge content is stored through:

src/data/redisKnowledge.ts

---

## 12. Current Advanced Routing Limitation

The architecture is not yet 100% generic.

src/App.tsx currently still contains technology-specific Advanced page selection.

Conceptually it is still:

advancedSlug
→ Redis-specific conditional
→ RedisAdvanced or RAGAdvanced

This is intentional technical debt from the transition to the reusable registry.

### NEXT ARCHITECTURAL IMPROVEMENT

Replace technology-specific page selection with:

advancedSlug
→ getAdvancedBySlug()
→ AdvancedDefinition
→ AdvancedPageShell

The goal is that adding a new technology such as:

- PostgreSQL
- FastAPI
- Docker
- AWS
- Python

does not require adding another technology-specific conditional in App.tsx.


---

## 13. Project Architecture

Projects use a reusable project engine.

Primary component:

src/components/ProjectDetailShell.tsx

Project definitions can provide:

- project title
- summary
- purpose
- technologies
- architecture
- components
- flows
- failure scenarios
- related technologies

The intended model is:

New Project
→ Project Registry
→ ProjectDetailShell
→ Existing project UI

Potential future projects include:

- AI Knowledge Assistant
- E-Commerce Platform
- AI Voice Agent
- AI Market Intelligence Platform

The goal is to avoid creating one-off project pages when the existing project engine can support the requirement.

---

## 14. Technology Routing

Reusable technology routing utilities are stored in:

src/utils/technologyRouting.ts

The purpose is to avoid technology-specific routing such as:

technology.slug === 'rag'
→ hardcoded RAG destination

Future technology destinations should use the reusable routing system wherever possible.

---

## 15. Resume

Production resume path:

public/resume/Avinash-Mishra-Resume.pdf

The filename and public path should remain stable because the existing website uses this path.

The resume PDF was recently replaced with the updated version.

The updated resume is already live on edduu.com.

Do not rename or move the public resume file unless explicitly required.

---

## 16. Git Repository

Remote:

https://github.com/studyatomofficial-oss/edduu.git

Remote name:

origin

Primary branch:

main

Current verified checkpoint:

 0407b69

Commit message:

feat: add Redis advanced learning and update resume

This commit was successfully pushed to GitHub.

Local main was verified to be synchronized with origin/main.

---

## 17. Production Deployment

Production website:

https://edduu.com

Hosting:

Cloudflare Pages

Deployment is connected to the GitHub repository.

Production branch:

main

The verified deployment pipeline is:

Local changes
→ git commit
→ git push origin main
→ GitHub main
→ Cloudflare Pages build
→ production deployment
→ edduu.com

We verified that the Redis Advanced updates and updated resume became live without a manual Cloudflare upload.

Therefore:

**Do not manually upload builds to Cloudflare unless the automatic deployment pipeline is broken.**

---

## 18. Build Verification

Before committing significant code changes:


npm run build

Expected process:

	tsc -b

then:

vite build

A successful build must complete without TypeScript or Vite errors.

If the build fails:

1. Stop.
2. Inspect the exact error.
3. Fix the issue.
4. Run the build again.
5. Only commit after the build succeeds.

---

## 19. Git Safety Rules

Before making changes:

git status

After changes:

git diff

Then stage only intended files:

git add <specific-files>

Verify staged files:

git status

Then commit:

git commit -m "..."

Then push:

git push origin main

Never automatically stage temporary backup files.



---

## 20. Development Methodology

The development approach for EDDUU is:

1. Inspect the existing implementation before changing it.
2. Understand the current architecture.
3. Make the smallest safe change.
4. Verify the result.
5. Run the production build.
6. Review Git changes.
7. Commit only intended files.
8. Push to GitHub.
9. Verify the production deployment.

Do not rewrite large files unnecessarily.

Prefer reusable components, registries and data-driven architecture.

When a new requirement appears, first ask:

"Can the existing engine handle this?"

If yes, extend the existing engine/data model instead of creating a duplicate implementation.

---

## 21. Temporary Backup Files

There are currently untracked temporary backup files in the local repository.

Examples include:

_edduu_backup_20260817_215548/

*.backup

*.before-*

These files are development safety copies.

Important rules:

- Do not automatically add them to Git.
- Do not push them to GitHub.
- Do not delete them unless explicitly decided.
- Do not treat them as production source files.

---

## 22. Current Project Status

### Completed

- RAG Knowledge
- RAG Advanced
- RAG Lab
- Redis Knowledge
- Redis Advanced
- Redis 10-step Advanced experience
- Advanced registry
- AdvancedPageShell
- Technology routing improvements
- Knowledge → Advanced routing
- Project technology routing improvements
- Encoding repairs
- Updated resume
- GitHub deployment
- Cloudflare automatic deployment
- Production verification

### Current State

EDDUU is transitioning from a collection of individually implemented pages into a reusable technology and project learning platform.

The architecture is increasingly based on:

**Registry + Definition + Reusable Shell**

---

## 23. Current NEXT Task

The next architectural task is:

### Make Advanced routing completely registry-driven.

Current conceptual flow:

advancedSlug

→ technology-specific conditional

→ RedisAdvanced or RAGAdvanced

Target flow:

advancedSlug

→ getAdvancedBySlug()

→ AdvancedDefinition

→ AdvancedPageShell

The final goal is that adding a new Advanced technology does not require modifying App.tsx with another technology-specific conditional.

Candidate future technologies include:

- PostgreSQL
- FastAPI
- Docker
- AWS
- Python

After the Advanced architecture is fully generic, the next major project candidate is:

**AI Knowledge Assistant**

It should be built using the existing reusable ProjectDetailShell architecture.

---

## 24. New Chat Handoff

When continuing EDDUU in a new conversation:

First read:

docs/EDDUU_MASTER.md

Then inspect the actual repository.

The repository code is the final source of truth.

If this document and the repository disagree:

1. Inspect the repository.
2. Identify the difference.
3. Explain the discrepancy.
4. Do not silently overwrite existing implementation.

Recommended new-chat instruction:

> I am continuing the EDDUU project. Read docs/EDDUU_MASTER.md first, then inspect the repository. Continue from the current NEXT task. Do not make changes until you understand the existing architecture.

---

## 25. Golden Architectural Rule

Before adding anything new, ask:

**Can the existing registry + reusable engine handle this?**

If yes:

**Extend the data. Do not duplicate the UI.**

EDDUU should become easier to extend as it grows.

The objective is not simply to add more pages.

The objective is to build a reusable system where:

**new technology = new data**

and:

**new project = new project definition**

while the existing engines handle rendering, routing and interaction.

---

## 26. Current Verified Checkpoint

Last verified production checkpoint:

 0407b69

Commit:

feat: add Redis advanced learning and update resume

Status:

**Pushed to GitHub and verified live on edduu.com.**

The next changes should build on this checkpoint rather than recreating previous work.






