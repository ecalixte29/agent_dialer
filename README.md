# Dialer CRM with AI Agent & Admin Dashboard

This monorepo contains everything needed to run a modern cloud-native contact-center application:

* **apps/api** – NestJS backend (Auth, Calls, AI, Reporting)
* **apps/web** – React front-end (Agent & Admin dashboards)
* **docker-compose.yml** – one-command local stack (PostgreSQL, Redis, API, Web)

---

## Prerequisites
1. Node.js ≥ 18
2. Docker + Docker Compose v2
3. Yarn (recommended) or npm v9+

## Quick Start
```bash
# install dependencies for all workspaces
npm install  # or: yarn install

# run everything (API, Web, DBs)
docker compose up --build
```

Open `http://localhost:5173` to access the web UI. The API will be available on `http://localhost:3000`.

## Environment Variables
Copy `.env.example` to `.env` at the repo root and fill in your credentials:
```bash
cp .env.example .env
```

---

## Monorepo Structure
```
.
├── apps
│   ├── api
│   └── web
├── libs            # shared packages (coming soon)
├── docker-compose.yml
├── package.json    # root; sets up workspaces
├── tsconfig.base.json
└── README.md
```

Feel free to expand modules or ask the AI assistant for guidance! 