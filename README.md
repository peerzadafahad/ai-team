# 🤖 AI Team - Digital Agency Agent System

> **Vision:** A collaborative AI agent workforce for our digital agency, handling branding, video production, web/app development, SEO, social marketing, and client support.

## 🎯 Project Overview

This project builds an **AI-powered team** of specialized agents that work together to run our digital agency operations. Each agent has its own role, tools, and responsibilities, coordinated by a **Manager Agent** that reports to the human founder (you).

### Our Services
- 🎨 **Branding** - Logo, identity, brand guidelines
- 🎬 **Video Production** - Scripting, editing, motion graphics
- 🌐 **Website & App Development** - Full-stack web & mobile
- 🔍 **SEO** - On-page, off-page, technical SEO
- 📱 **Social Marketing** - Content strategy, ads, analytics
- 🛠️ **Support** - Client communication, troubleshooting

---

## 🧠 The AI Team

### 1. 👔 Manager Agent (Team Lead)
- **Role:** Orchestrates the entire team, assigns tasks, reviews deliverables, gets your approval on major decisions
- **Tools:** Task management, team coordination, approval workflows
- **Communication:** Reports to you (the founder) for major approvals
- **AI Model:** Deep Seek (reasoning & planning)

### 2. 💻 Developer Agent
- **Role:** Builds websites, apps, and software solutions
- **Tools:** Code generation, debugging, deployment (Vercel/GitHub), code review
- **Stack:** Tailwind CSS, Python, Node.js, Supabase, Git
- **AI Model:** Deep Seek (code generation & debugging)

### 3. 🎨 Designer Agent
- **Role:** Creates brand identities, UI/UX designs, graphics, logos
- **Tools:** Image generation (DALL-E/Stable Diffusion), design systems, prototyping, color palette generation
- **AI Model:** Deep Seek (creative direction) + Image Gen API

### 4. 🎬 Animator Agent
- **Role:** Video production, motion graphics, animations, video editing scripts
- **Tools:** Video generation, animation scripts, motion design, storyboarding
- **AI Model:** Deep Seek (scripting & storyboarding) + Video Gen API

### 5. ✍️ Writer Agent
- **Role:** Content writing, copywriting, scripts, documentation, blog posts
- **Tools:** Content generation, SEO optimization, proofreading, tone adjustment
- **AI Model:** Deep Seek (creative writing)

### 6. 📈 Marketer Agent
- **Role:** SEO strategy, social media campaigns, analytics, ad management
- **Tools:** Keyword research, ad copy generation, performance tracking, competitor analysis
- **AI Model:** Deep Seek (strategy & analytics)

### 7. 🛟 Support Agent
- **Role:** Client support, FAQs, troubleshooting, ticket management
- **Tools:** Chat responses, ticket management, knowledge base, sentiment analysis
- **AI Model:** Deep Seek (conversational support)

### 8. 💰 Accountant Agent
- **Role:** Invoicing, expense tracking, financial reports, budget management
- **Tools:** Number crunching, report generation, budget tracking, tax calculations
- **AI Model:** Deep Seek (numerical reasoning)

> **Future Agents:** The system is designed to be extensible — new agents can be added as needed. Examples: QA Tester Agent, Project Manager Agent, Data Analyst Agent, HR Agent, Legal Agent.


---

## 🏗️ Architecture

### Tech Stack
| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js + Tailwind CSS (Web Dashboard) |
| **Backend** | Python (FastAPI) + Node.js (Express) |
| **Database** | Supabase (PostgreSQL) |
| **Auth** | Supabase Auth |
| **Storage** | Supabase Storage (files, assets) |
| **Deployment** | Vercel (frontend) + GitHub (source control) |
| **Agent Runtime** | Python-based agent orchestration |

### System Design
```
┌─────────────────────────────────────────────────┐
│                 � Web Dashboard                 │
│         (Next.js + Tailwind CSS)                 │
│     - Task overview  - Agent status              │
│     - Approvals      - Analytics                 │
└────────────────────┬────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────┐
│              👔 Manager Agent                     │
│     (Orchestrator - Python/Node.js)              │
│     - Task assignment  - Quality check           │
│     - Approval routing - Final delivery          │
└────┬──────┬──────┬──────┬──────┬──────┬──────┬───┘
     │      │      │      │      │      │      │
┌────▼┐ ┌──▼──┐ ┌─▼───┐ ┌─▼───┐ ┌─▼───┐ ┌─▼───┐ ┌─▼───┐
│ Dev │ │Design│ │Anim │ │Writer│ │Market│ │Supp │ │Acct │
└─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘
     │      │      │      │      │      │      │
┌────▼──────▼──────▼──────▼──────▼──────▼──────▼──────┐
│              🔗 Supabase (Central Hub)               │
│  - Tasks DB   - Agent Memory   - File Storage        │
│  - Auth       - Real-time updates                    │
└──────────────────────────────────────────────────────┘
```

### Communication Flow
1. **You** assign a project/task via the Dashboard
2. **Manager Agent** breaks it down and assigns subtasks to relevant agents
3. **Agents** work on their tasks, storing progress in Supabase
4. **Manager** reviews completed work, requests revisions if needed
5. **Major decisions** → Manager asks for **your approval** via Dashboard
6. **Final deliverable** → Presented to you for sign-off

---

## 📁 Project Structure (Monorepo)

```
ai-team/
├── README.md                    # This file
├── docs/                        # Documentation
│   ├── architecture.md          # Detailed architecture
│   ├── agents/                  # Per-agent docs
│   └── setup.md                 # Setup guide
├── apps/
│   ├── dashboard/               # Next.js + Tailwind web dashboard
│   │   ├── src/
│   │   │   ├── app/            # Next.js App Router pages
│   │   │   ├── components/     # UI components
│   │   │   └── lib/            # Utilities, API clients
│   │   ├── tailwind.config.js
│   │   └── package.json
│   └── api/                     # Backend API (Python FastAPI)
│       ├── routes/              # API endpoints
│       ├── models/              # Data models
│       └── services/            # Business logic
├── agents/
│   ├── manager/                 # Manager Agent
│   │   ├── orchestrator.py      # Task orchestration logic
│   │   └── approval.py          # Approval workflow
│   ├── developer/               # Developer Agent
│   │   ├── coder.py             # Code generation
│   │   └── deployer.py          # Deployment (Vercel/GitHub)
│   ├── designer/                # Designer Agent
│   ├── animator/                # Animator Agent
│   ├── writer/                  # Writer Agent
│   ├── marketer/                # Marketer Agent
│   ├── support/                 # Support Agent
│   └── accountant/              # Accountant Agent
├── shared/
│   ├── supabase/                # Supabase client & schema
│   │   ├── migrations/          # Database migrations
│   │   └── schema.sql           # Full DB schema
│   └── utils/                   # Shared utilities
├── supabase/                    # Supabase config
│   ├── config.toml
│   └── seed.sql                 # Seed data
├── .github/
│   └── workflows/               # GitHub Actions CI/CD
├── .env.example                 # Environment variables template
├── package.json                 # Root workspace config
└── vercel.json                  # Vercel deployment config
```

---

## 🚀 Implementation Phases

### Phase 1: Foundation 🏗️
- [ ] Set up monorepo structure
- [ ] Configure Supabase project (DB, Auth, Storage)
- [ ] Set up GitHub repository with CI/CD
- [ ] Create basic Next.js + Tailwind dashboard shell
- [ ] Set up Python FastAPI backend
- [ ] Deploy dashboard to Vercel (staging)

### Phase 2: Core Agents 🤖
- [ ] Build **Manager Agent** - task orchestration, approval workflows
- [ ] Build **Developer Agent** - code generation, GitHub integration
- [ ] Build **Designer Agent** - design generation
- [ ] Build **Writer Agent** - content creation
- [ ] Connect agents to Supabase for memory & state

### Phase 3: Full Team 🧠
- [ ] Build **Animator Agent** - video & motion
- [ ] Build **Marketer Agent** - SEO & social
- [ ] Build **Support Agent** - client communication
- [ ] Build **Accountant Agent** - finances
- [ ] Implement inter-agent communication

### Phase 4: Dashboard & UX 🖥️
- [ ] Task management UI (create, assign, track)
- [ ] Approval workflow UI (review, approve, reject)
- [ ] Agent status monitoring (online, busy, idle)
- [ ] Analytics dashboard (productivity, throughput)
- [ ] Real-time updates (Supabase Realtime)

### Phase 5: Production 🚀
- [ ] Testing & QA
- [ ] Production deployment (Vercel)
- [ ] Monitoring & logging
- [ ] Documentation
- [ ] Future agent expansion framework

---

## 🔑 Key Features

### Manager Approval Flow
```
Task Complete → Manager Reviews → 
  ├── Minor/Expected → Auto-approve → Deliver
  └── Major/Uncertain → Notify You → 
       ├── Approve via Dashboard → Deliver
       └── Reject with feedback → Revise
```

### Agent Memory & State
- Each agent stores its context, decisions, and learnings in Supabase
- Agents can reference past work for consistency
- Manager maintains full project context

### Extensibility
- New agents can be added by creating a new folder under `agents/`
- Agents register themselves with the Manager
- Shared utilities and patterns make adding agents easy

---

## 🛠️ Getting Started (Coming Soon)

```bash
# Clone the repo
git clone https://github.com/peerzadafahad/ai-team.git
cd ai-team

# Install dependencies
npm install           # Root workspace
cd apps/dashboard && npm install
cd ../api && pip install -r requirements.txt

# Set up environment
cp .env.example .env
# Edit .env with your Supabase credentials

# Run locally
npm run dev           # Dashboard + API
```

---

## 📝 Notes & Decisions

- **Monorepo approach** for easier management and shared code
- **Supabase as central hub** for all agent communication, storage, and state
- **Manager-in-the-loop** for quality control and your oversight
- **Dashboard-first** for visibility and control
- **Python for agent logic** (rich AI/ML ecosystem), **Node.js for API layer**, **Next.js for frontend**

---

*Built with ❤️ for our digital agency*
