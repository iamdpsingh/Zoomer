# Zoomer — Enterprise-Grade Video Collaboration Platform 🎥⚡

[![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?style=for-the-badge&logo=clerk)](https://clerk.com/)
[![Stream Video](https://img.shields.io/badge/WebRTC-Stream_Video-005FFF?style=for-the-badge&logo=stream)](https://getstream.io/video/)

Zoomer is a high-performance, real-time video conferencing web application architected with **Next.js 15 (App Router)**, **Stream Video React & Node SDKs**, **Clerk Authentication**, and **Tailwind CSS**. It delivers ultra-low-latency HD audio/video communication, dynamic room layouts, personal rooms, cloud recording playback, and enterprise-grade security right out of the browser.

---

## 🌟 Key Highlights & Features

| Capability | Technical Details |
| :--- | :--- |
| **Instant Meetings** | Direct UUID-based room generation with automatic token provisioning via Next.js Server Actions. |
| **Scheduled Calls** | Integrated date & time scheduling with custom meeting topic metadata stored in Stream Call states. |
| **Personal Rooms** | Dedicated, permanent meeting URL per authenticated user (`/meeting/[userId]?personal=true`). |
| **Cloud Recordings** | Automated session recordings retrieval with direct MP4 playback streaming. |
| **Dynamic Room Layouts** | Paginated Grid View, Speaker Left, and Speaker Right with active speaker detection. |
| **Pre-Call Greenroom** | Live audio/video preview, microphone/camera toggle, and device settings selector before joining. |
| **Participant Controls** | Live participants drawer, audio level monitors, call quality statistics, and host "End for All" permission. |
| **Enterprise Authentication** | Clerk SSO with protected route middleware and automatic user avatar/name synchronization. |
| **Resilient UI System** | Fully custom dark glassmorphic interface with accessible modals, custom 404, and runtime Error boundary. |

---

## 🏗️ System Architecture & Folder Structure

```
Zoomer/
├── actions/
│   └── stream.actions.ts         # Secure server action generating Stream user tokens (JWT)
├── app/
│   ├── (auth)/                   # Dedicated Clerk authentication route group
│   │   ├── sign-in/[[...sign-in]]/
│   │   └── sign-up/[[...sign-up]]/
│   ├── (root)/                   # Authenticated application tree
│   │   ├── home/                 # Main user dashboard
│   │   │   ├── personal-room/    # Permanent personal meeting room page
│   │   │   ├── previous/         # Past completed sessions history
│   │   │   ├── recordings/       # Recorded meetings playback archive
│   │   │   ├── upcoming/         # Future scheduled meetings
│   │   │   ├── layout.tsx        # Dashboard shell with Navbar & Sidebar
│   │   │   └── page.tsx          # Command center with dynamic greeting & live clock
│   │   ├── meeting/[id]/         # Live call session & greenroom page
│   │   └── layout.tsx            # StreamVideoProvider wrapper layout
│   ├── error.tsx                 # Global runtime error boundary with recovery actions
│   ├── globals.css               # Design system tokens, glassmorphism, and SDK overrides
│   ├── layout.tsx                # Root layout with ClerkProvider & Inter typography
│   ├── not-found.tsx             # Custom luxury 404 Not Found page
│   └── page.tsx                  # Public SaaS landing page with live meeting preview
├── components/
│   ├── ui/                       # Reusable accessible UI primitives (Radix UI / Tailwind)
│   ├── CallList.tsx              # Generic caller list component with empty states
│   ├── EndCallButton.tsx         # Host-only destructive call termination control
│   ├── HomeCard.tsx              # Quick action trigger cards with badges & elevation
│   ├── Loader.tsx                # Ambient glowing connecting spinner
│   ├── MeetingCard.tsx           # Meeting summary card with attendee avatar stack
│   ├── MeetingModal.tsx          # Accessible glassmorphic dialog for scheduling & joining
│   ├── MeetingRoom.tsx           # In-call interface with layout selector and floating dock
│   ├── MeetingSetup.tsx          # Pre-call greenroom with device controls & camera preview
│   ├── MeetingTypeList.tsx       # Core dashboard meeting orchestration component
│   ├── MobileNav.tsx             # Responsive slide-over navigation drawer
│   ├── Navbar.tsx                # Sticky frosted glass header with live engine status
│   └── Sidebar.tsx               # Fixed desktop navigation with active indicator pills
├── constants/
│   └── index.ts                  # Navigation routes and static assets catalog
├── hooks/
│   ├── useGetCallById.ts         # Query single active Stream call by ID
│   └── useGetCalls.ts            # Fetch categorized calls (ended, upcoming, recordings)
├── middleware.ts                 # Next.js 15 route protection & Clerk proxy matcher
├── providers/
│   └── StreamClientProvider.tsx  # Initializer for StreamVideoClient with error handling
├── public/                       # Static brand logos, SVG icons, and team assets
└── tailwind.config.ts            # Custom design tokens, dark surfaces, and mesh gradients
```

---

## 🔐 Environment Variables Guide

To run the application locally or in production, create a `.env.local` file in the root directory. Copy `.env.example` as your template:

```bash
cp .env.example .env.local
```

### Complete Environment Keys Breakdown:

| Variable | Description | Where to Get It |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk Frontend API Key | [Clerk Dashboard](https://dashboard.clerk.com/) &rarr; Select your App &rarr; **API Keys** &rarr; `Publishable key` (starts with `pk_test_...` or `pk_live_...`) |
| `CLERK_SECRET_KEY` | Clerk Backend Secret Key | [Clerk Dashboard](https://dashboard.clerk.com/) &rarr; Select your App &rarr; **API Keys** &rarr; `Secret key` (starts with `sk_test_...` or `sk_live_...`) |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | Default Sign In route | Set to `/sign-in` |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | Default Sign Up route | Set to `/sign-up` |
| `NEXT_PUBLIC_STREAM_API_KEY` | Stream Public App Key | [GetStream Dashboard](https://getstream.io/dashboard/) &rarr; Create App &rarr; **Video & Chat** &rarr; `Key` |
| `STREAM_SECRET_KEY` | Stream Backend Secret Key | [GetStream Dashboard](https://getstream.io/dashboard/) &rarr; App Settings &rarr; `Secret` |
| `NEXT_PUBLIC_BASE_URL` | Application root domain | For local development: `http://localhost:3000`. In production: Your deployed Vercel domain (e.g., `https://zoomer.vercel.app`). |

### Step-by-Step Instructions to Obtain Keys:

#### 1. Clerk Authentication Keys:
1. Navigate to [https://dashboard.clerk.com/](https://dashboard.clerk.com/) and log in.
2. Select your application (e.g. `Zoomer` or app `app_3KdNuDJpDmjrdklnM5WWQ71vh9v`).
3. In the left navigation, click on **API Keys**.
4. Copy the **Publishable key** into `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`.
5. Copy the **Secret key** into `CLERK_SECRET_KEY`.

#### 2. GetStream Video Keys:
1. Navigate to [https://getstream.io/](https://getstream.io/) and log in to the dashboard.
2. Click **Create App** (or select your existing Zoomer project).
3. Under the app dashboard overview, locate the **App Keys** section.
4. Copy **Key** into `NEXT_PUBLIC_STREAM_API_KEY`.
5. Copy **Secret** into `STREAM_SECRET_KEY`.
6. Make sure **Video** permissions are enabled in your Stream dashboard.

---

## 🚀 Local Development Setup

### 1. Prerequisites
- **Node.js**: v18.18.0 or v20+ recommended
- **npm**: v9+ or modern package manager (`pnpm` / `yarn` / `bun`)

### 2. Installation
```bash
git clone https://github.com/iamdpsingh/Zoomer.git
cd Zoomer
npm install
```

### 3. Configure Environment
Populate `.env.local` with your Clerk and Stream keys as detailed above.

### 4. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Build & Verification

To verify production bundle build and TypeScript compliance:

```bash
npm run build
```

---

## 👨‍💻 Engineering Team

- **Dhruv Pratap Singh** — Architecture, Fullstack & Video Systems Lead
- **Anubhav Singh** — Frontend & Video Conferencing Core
- **Anuj Kaushik** — Authentication & Security
- **Saksham Agrawal** — UI Systems & Media Pipelines

---

## 📄 License
This project is open-source under the MIT License.
