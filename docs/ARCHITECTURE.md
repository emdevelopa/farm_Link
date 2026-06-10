# System Architecture

## Overview
FarmLink Africa uses a monorepo architecture powered by Next.js 15, NestJS, and Prisma.

## Frontend (apps/web)
- **Framework**: Next.js 15 App Router
- **State**: Zustand + TanStack Query
- **Styling**: Tailwind CSS v4 + shadcn/ui

## Backend (apps/api)
- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Queue**: BullMQ + Redis

## Infrastructure
- **Hosting**: Vercel (Web), Railway (API)
- **Database**: Supabase / Neon
