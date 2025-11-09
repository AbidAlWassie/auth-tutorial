# Better Auth Tutorial – Next.js 16 🔒

> **Modern, secure authentication with Better Auth, Prisma, PostgreSQL, and Resend**

This is the complete source code from the [Better Auth Tutorial](https://youtu.be/vuR3FageilY) on YouTube. Build a production-ready authentication system with email/password login, email verification, and server actions.

**📺 Watch the tutorial:** [youtube.com/watch?v=vuR3FageilY](https://youtu.be/vuR3FageilY)

---

## Tutorial Series

This repo is organized into multiple branches for each part of the tutorial:

| Branch   | Topic                           | Status         |
| -------- | ------------------------------- | -------------- |
| `part-1` | Email/password auth with resend | ✅ Current     |
| `part-2` | Google & GitHub OAuth           | 🚧 Coming soon |

**To switch branches on GitHub:**  
Click the branch dropdown (near the top left) and select the part you want to explore.

---

## Learn more

This project demonstrates a complete authentication implementation using:

- **[Better Auth](https://better-auth.com/)** – Modern auth library with built-in security best practices
- **[Next.js 16](https://nextjs.org/)** – App Router, Server Actions, and React 19
- **[Prisma](https://www.prisma.io/)** – Type-safe database ORM with PostgreSQL
- **[Resend](https://resend.com/)** – Email verification and transactional emails
- **[Shadcn/ui](https://ui.shadcn.com/)** – Beautiful, accessible UI components
- **[Tailwind CSS 4](https://tailwindcss.com/)** – Utility-first styling

---

## Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/raptr45/better-auth-tutorial.git
cd better-auth-tutorial
pnpm install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
# PostgreSQL connection string
DATABASE_URL="postgresql://user:password@localhost:5432/auth_db"

# Resend API key (get one at resend.com)
RESEND_API_KEY="re_..."

# Optional: Prisma Accelerate
# DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=..."
```

### 3. Database Setup

Run Prisma migrations to create the database schema:

```bash
pnpm prisma migrate dev --name init
pnpm prisma generate
```

This creates four tables: `User`, `Session`, `Account`, and `Verification`.

### 4. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and you'll see the landing page with a "Sign up" button.

---

## Tech Stack Details

### Why Better Auth?

- 🔐 **Security-first:** Built-in CSRF protection, secure session management
- 🎯 **Type-safe:** Full TypeScript support with inference
- 📦 **Batteries included:** Email verification, OAuth, 2FA ready
- 🔌 **Adapter system:** Works with any database (Prisma, Drizzle, etc.)
- 📚 **Great docs:** [better-auth.com](https://better-auth.com/)

### Why Prisma Accelerate?

```typescript
const prisma = new PrismaClient().$extends(withAccelerate());
```

- ⚡ Connection pooling for serverless environments
- 🌍 Global caching with Redis
- 📊 Query optimization and monitoring

---

## Common Commands

```bash
# Development
pnpm dev                # Start dev server
pnpm build              # Production build
pnpm start              # Start production server

# Prisma
pnpm prisma studio      # Open Prisma Studio (database GUI)
pnpm prisma migrate dev # Create and apply migrations
pnpm prisma generate    # Generate Prisma Client

# Linting
pnpm lint               # Run ESLint
```

---

## Deployment

### Environment Variables

Make sure to set these in your hosting provider:

```env
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

RESEND_API_KEY=

DATABASE_URL=postgresql://username:password@host:port/dbname

NODE_ENV=production
```

### Recommended Platforms

- **[Vercel](https://vercel.com/)** – Zero-config Next.js deployment
- **[Railway](https://railway.app/)** – Easy PostgreSQL hosting
- **[Supabase](https://supabase.com/)** – Managed Postgres with free tier

---

---

## Support

- 💬 **Discord:** [Join the community](https://discord.gg/your-discord)
- 🐙 **GitHub:** [oneManDev-io](https://github.com/oneManDev-io)
- 📺 **YouTube:** [@oneManDev](https://youtube.com/@oneManDev)

---

## License

MIT – feel free to use this in your own projects!

**Found this helpful?** ⭐ Star the repo and subscribe to the [YouTube channel](https://youtube.com/@oneManDev) for more tutorials!
