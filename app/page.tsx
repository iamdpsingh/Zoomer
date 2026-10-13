import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Copy,
  Film,
  Github,
  Lock,
  Mic,
  Monitor,
  Radio,
  Shield,
  Sparkles,
  Users,
  Video,
  Volume2,
} from "lucide-react";

export default function Page() {
  const teamMembers = [
    {
      name: "Dhruv Pratap Singh",
      role: "Lead Fullstack & Architecture",
      img: "/images/Dhruv-img.png",
      tag: "Lead Developer",
    },
    {
      name: "Anubhav Singh",
      role: "Frontend & Video Conferencing",
      img: "/images/avatar-1.jpeg",
      tag: "Core Contributor",
    },
    {
      name: "Anuj Kaushik",
      role: "Authentication & Security",
      img: "/images/avatar-2.jpeg",
      tag: "Core Contributor",
    },
    {
      name: "Saksham Agrawal",
      role: "UI Systems & Media Pipelines",
      img: "/images/avatar-3.png",
      tag: "Core Contributor",
    },
  ];

  return (
    <div className="min-h-screen bg-[#080C15] text-[#F3F4F6] selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Ambient background glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] -right-40 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[160px]" />
        <div className="absolute top-[70%] -left-40 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px]" />
      </div>

      {/* Top Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#080C15]/80 border-b border-white/[0.08] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center size-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/icons/logo-2.svg"
                width={22}
                height={22}
                alt="Zoomer Logo"
                className="brightness-0 invert"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                ZOOMER
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-indigo-400 -mt-1">
                Enterprise Video
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#product-preview" className="hover:text-white transition-colors">Experience</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#team" className="hover:text-white transition-colors">Team</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/sign-in"
              className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/home"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5"
            >
              <span>Launch App</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-20 pb-16 px-6 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold text-indigo-300 mb-8 backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-500">
            <Sparkles className="size-3.5 text-indigo-400" />
            <span>Introducing Zoomer 2.0 • Ultra Low-Latency HD Video</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
            Video collaboration engineered for{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              speed & clarity.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Host instant meetings, schedule recurring sessions, record high-definition discussions, and collaborate from any browser with zero installation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/home"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all"
            >
              <Video className="size-5" />
              <span>Start Instant Meeting</span>
            </Link>
            <Link
              href="/home"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white text-slate-200 transition-all"
            >
              <Calendar className="size-5 text-indigo-400" />
              <span>Schedule or Join</span>
            </Link>
          </div>

          {/* Social Proof / Tech Specs Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-b border-white/[0.08] py-6 text-center">
            <div>
              <p className="text-2xl font-black text-white">4K / 60 FPS</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Video Quality</p>
            </div>
            <div>
              <p className="text-2xl font-black text-indigo-400">&lt;50ms</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Global Latency</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">256-Bit</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">End-to-End Encryption</p>
            </div>
            <div>
              <p className="text-2xl font-black text-emerald-400">100% Web</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">No Downloads Required</p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE PRODUCT PREVIEW SHOWCASE */}
        <section id="product-preview" className="px-6 py-12 max-w-6xl mx-auto">
          <div className="relative rounded-3xl border border-white/[0.12] bg-[#0E1322]/90 backdrop-blur-2xl p-4 sm:p-6 shadow-2xl shadow-indigo-950/40 overflow-hidden">
            {/* Top Mac Window Chrome */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-rose-500/80" />
                <span className="size-3 rounded-full bg-amber-500/80" />
                <span className="size-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs font-semibold text-slate-400 hidden sm:inline">
                  Zoomer Pro • Engineering Sprint Sync (Active Call)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
                  <span className="size-2 rounded-full bg-rose-500 animate-pulse" />
                  REC
                </span>
                <span className="text-xs font-medium text-slate-400 hidden sm:inline">
                  00:34:12
                </span>
              </div>
            </div>

            {/* Video Meeting Grid Demonstration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {/* Tile 1: Primary Speaker */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-indigo-500/60 bg-gradient-to-br from-slate-900 to-indigo-950/60 shadow-lg flex items-center justify-center group">
                <Image
                  src="/images/laptop-with-glowing-screen-table-dark-top-view-copy-space.jpg"
                  alt="Presentation Feed"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-xs font-medium text-white border border-white/10">
                  <Monitor className="size-3.5 text-indigo-400" />
                  <span>Screen Share: Architecture RFC</span>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-600/80 backdrop-blur-md text-xs font-semibold text-white">
                  <Volume2 className="size-3 text-white animate-pulse" />
                  <span>Dhruv Pratap Singh (Speaking)</span>
                </div>
              </div>

              {/* Tile 2: Team Participant 1 */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-[#121828] flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="relative size-20 rounded-full overflow-hidden ring-4 ring-indigo-500/30">
                    <Image
                      src="/images/avatar-1.jpeg"
                      alt="Anubhav Singh"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-semibold text-white">Anubhav Singh</span>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-xs font-medium text-slate-300 border border-white/10">
                  <Mic className="size-3 text-emerald-400" />
                  <span>Microphone Active</span>
                </div>
              </div>
            </div>

            {/* Bottom Floating Call Dock (Mock Preview) */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3 border-t border-white/[0.08]">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-white text-xs font-semibold">
                <Mic className="size-4 text-emerald-400" />
                <span>Mute</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-white text-xs font-semibold">
                <Video className="size-4 text-emerald-400" />
                <span>Stop Video</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-white text-xs font-semibold">
                <Radio className="size-4 text-indigo-400" />
                <span>Screen Share</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-white text-xs font-semibold">
                <Users className="size-4 text-slate-300" />
                <span>Participants (4)</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-rose-600/80 border border-rose-500/50 text-white text-xs font-bold shadow-md shadow-rose-600/20">
                End Call
              </div>
            </div>
          </div>
        </section>

        {/* BENTO GRID FEATURES */}
        <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest uppercase text-indigo-400 mb-2">
              Capabilities & Architecture
            </h2>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
              Everything modern teams need to communicate.
            </h3>
            <p className="text-slate-300 text-base">
              A comprehensive suite of real-time communication tools designed for clarity, security, and effortless collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1: Instant & Scheduled Calls */}
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-slate-900/80 to-[#0A0E1A] p-8 shadow-lg hover:border-indigo-500/30 transition-all group">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-500/15 border border-indigo-500/25 text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <Video className="size-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Instant & Scheduled Calls</h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Generate instant room links or schedule ahead with date and time pickers. One-click entry for all participants.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400">
                <CheckCircle2 className="size-4" />
                <span>Sub-50ms connection latency</span>
              </div>
            </div>

            {/* Bento Card 2: Personal Meeting Rooms */}
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-slate-900/80 to-[#0A0E1A] p-8 shadow-lg hover:border-cyan-500/30 transition-all group">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-cyan-500/15 border border-cyan-500/25 text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                <Lock className="size-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Permanent Personal Rooms</h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Your own permanent URL for recurring office hours and team syncs. Never regenerate links again.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <CheckCircle2 className="size-4" />
                <span>Host-authenticated access</span>
              </div>
            </div>

            {/* Bento Card 3: Cloud Recordings & Playback */}
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-slate-900/80 to-[#0A0E1A] p-8 shadow-lg hover:border-purple-500/30 transition-all group">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-purple-500/15 border border-purple-500/25 text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <Film className="size-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Cloud Recording & Archival</h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Record meetings to the cloud with full audio and screen playback. Revisit important discussions anytime.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-400">
                <CheckCircle2 className="size-4" />
                <span>Instant streaming playback</span>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-16 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-xs font-bold tracking-widest uppercase text-indigo-400 mb-2">
              Simple Workflow
            </h2>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Up and running in 3 easy steps
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start gap-4 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <span className="flex size-10 items-center justify-center rounded-xl bg-indigo-600/30 border border-indigo-500/40 text-base font-black text-indigo-300">
                01
              </span>
              <h4 className="text-lg font-bold text-white">Authenticate with Clerk</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Log in securely using email, password, or your social accounts with zero friction.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <span className="flex size-10 items-center justify-center rounded-xl bg-cyan-600/30 border border-cyan-500/40 text-base font-black text-cyan-300">
                02
              </span>
              <h4 className="text-lg font-bold text-white">Create or Join a Room</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Start an instant session or schedule for later. Copy your invite link with a single tap.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <span className="flex size-10 items-center justify-center rounded-xl bg-violet-600/30 border border-violet-500/40 text-base font-black text-violet-300">
                03
              </span>
              <h4 className="text-lg font-bold text-white">Meet with HD Fidelity</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Toggle camera and mic, switch between Speaker and Grid layouts, and record to the cloud.
              </p>
            </div>
          </div>
        </section>

        {/* TEAM SECTION (WITH ZERO BROKEN IMAGES!) */}
        <section id="team" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold text-indigo-300 mb-3">
              <span>The Builders</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3">
              Meet the Team
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Passionate engineers building the future of real-time communication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center rounded-3xl border border-white/[0.08] bg-gradient-to-b from-slate-900/90 to-[#0A0E1A] p-6 shadow-xl hover:border-indigo-500/40 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative size-28 rounded-full overflow-hidden border-2 border-indigo-500/30 p-1 mb-5 group-hover:border-indigo-500 transition-colors">
                  <div className="relative size-full rounded-full overflow-hidden">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-0.5 text-[11px] font-semibold text-indigo-300 mb-2">
                  {member.tag}
                </span>

                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                  {member.name}
                </h3>

                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA SECTION */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="relative rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/80 via-slate-900 to-[#0A0E1A] p-8 sm:p-14 text-center overflow-hidden shadow-2xl">
            <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 size-80 rounded-full bg-violet-600/20 blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
                Experience Next-Gen Video Meetings Today
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
                Connect with your colleagues, classmates, and friends with unprecedented speed and audio-visual clarity.
              </p>
              <Link
                href="/home"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all"
              >
                <span>Launch Zoomer Dashboard</span>
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] bg-[#060910] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-8 rounded-lg bg-indigo-600 shadow-sm shadow-indigo-600/20">
              <Image
                src="/icons/logo-2.svg"
                width={18}
                height={18}
                alt="Zoomer"
                className="brightness-0 invert"
              />
            </div>
            <span className="text-base font-extrabold tracking-tight text-white">ZOOMER</span>
            <span className="text-xs text-slate-500">
              • &copy; {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational</span>
            </div>
            <Link
              href="https://github.com/iamdpsingh/Zoomer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="size-4" />
              <span>GitHub</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
