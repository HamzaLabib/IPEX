# IPEX Logistics Website

Professional logistics website built with React + TypeScript + Vite, plus a Node.js/Express backend starter for payments, contact, tracking, and quotes.

## Frontend setup
1. Copy `.env.example` to `.env`.
2. Install and run:
   - `npm install`
   - `npm run dev`

## Backend setup
1. Copy `backend/.env.example` to `backend/.env`.
2. Install and run:
   - `cd backend`
   - `npm install`
   - `npm run dev`

## Build
- Frontend: `npm run build`
- Backend: `cd backend && npm run build`

## Deploy frontend to Vercel
- Framework preset: **Vite**
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

## Environment variables
Frontend:
- `VITE_API_BASE_URL`
- `VITE_STRIPE_PUBLISHABLE_KEY`

Backend:
- `PORT`
- `CLIENT_URL`
- `STRIPE_SECRET_KEY`
- `DATABASE_URL`

## Payment security notes
- Stripe secret keys remain backend-only.
- Frontend uses only publishable key + backend checkout endpoint.
- No raw card numbers are collected in custom fields.
- Backend validates invoice and amount server-side.
