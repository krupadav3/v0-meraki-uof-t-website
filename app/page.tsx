"use client"

import Image from "next/image"
import { ArrowUpRight, Menu, Sparkles, Users, FileText, Heart, MapPin, X } from "lucide-react"
import { PillButton } from "@/components/PillButton"
import { useState } from "react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] overflow-x-hidden">
      {/* Film Grain Overlay */}
      <div className="film-grain" aria-hidden="true"></div>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between bg-[#0a0a0a]/90 backdrop-blur-sm">
        <a href="/" className="text-xl font-bold tracking-tight">
          Meraki
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0a] pt-20 px-8">
          <nav className="flex flex-col gap-6 text-2xl">
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#B85C38] transition-colors">About</a>
            <a href="#who" onClick={() => setMenuOpen(false)} className="hover:text-[#B85C38] transition-colors">Who Can Come</a>
            <a href="#how" onClick={() => setMenuOpen(false)} className="hover:text-[#B85C38] transition-colors">How It Works</a>
            <a href="https://luma.com/merakiuoft" target="_blank" rel="noopener noreferrer" className="hover:text-[#B85C38] transition-colors">Attend a Session</a>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-16 relative">
        {/* Decorative wavy lines background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <svg className="absolute bottom-0 left-0 w-full h-1/2" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
            {[...Array(8)].map((_, i) => (
              <path
                key={i}
                d={`M0,${200 + i * 25} Q360,${150 + i * 25} 720,${200 + i * 25} T1440,${200 + i * 25}`}
                stroke="#333"
                strokeWidth="1"
                fill="none"
              />
            ))}
          </svg>
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          {/* Large Logo */}
          <div className="mb-8">
            <Image
              src="/meraki-logo-transparent-cropped.png"
              alt="Meraki"
              width={600}
              height={150}
              className="h-auto w-auto max-h-64 md:max-h-80 lg:max-h-96"
              priority
            />
          </div>

          {/* Tagline */}
          <div className="max-w-xl mb-10">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
              We host weekly co-working sessions for you to work on your{" "}
              <em className="font-normal text-[#f5f5f5]">passion projects</em> with likeminded people.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="https://luma.com/merakiuoft"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f5f5f5] text-[#0a0a0a] rounded-full text-sm font-medium tracking-wide uppercase hover:bg-gray-200 transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
              Attend a Session
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#444] rounded-full text-sm font-medium tracking-wide uppercase hover:bg-white/10 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              Dive Deeper
            </a>
          </div>

          {/* Current Art Credit */}
          {/* <div className="absolute bottom-8 right-6 md:right-12 lg:right-20 text-right text-sm">
            <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-1">Current Art</p>
            <p className="text-gray-400">"Side Project", by the Meraki Team</p>
          </div> */}
        </div>
      </section>

      {/* Group Photo Section */}
      <section className="relative">
        <div className="w-full overflow-hidden relative">
          {/* Top gradient fade */}
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10"></div>

          <Image
            src="/selfie_kickoff-extended.jpg"
            alt="Meraki community group photo"
            width={1920}
            height={700}
            className="w-full h-auto max-h-[85vh] object-cover"
            style={{ objectPosition: 'center 70%' }}
            priority
          />

          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-white text-[22vw] md:text-[16vw] font-bold opacity-40 tracking-tight drop-shadow-2xl">
              <span className="text-outline">M</span>eraki
            </span>
          </div>
        </div>

        {/* What We Are Button */}
        {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <a href="#about">
            <PillButton icon={<Heart className="w-4 h-4" />} color="red">
              What We Are
            </PillButton>
          </a>
        </div> */}
      </section>

      {/* What We Are Section */}
      <section id="about" className="py-32 px-6 md:px-12 lg:px-20 relative">
        {/* Decorative wavy lines */}
        <div className="absolute left-0 top-1/4 w-1/3 h-1/2 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 400" fill="none" className="w-full h-full">
            {[...Array(12)].map((_, i) => (
              <path
                key={i}
                d={`M${10 + i * 15},0 Q${20 + i * 15},200 ${10 + i * 15},400`}
                stroke="#444"
                strokeWidth="1"
                fill="none"
              />
            ))}
          </svg>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-3xl md:text-5xl leading-tight md:leading-snug">
            <span className="text-[#B85C38] mr-3">•</span>
            An open collective <em>of</em> makers, artists, engineers,
            <br className="hidden lg:block" />
            designers, writers, poets, <span className="text-[#8BA360] mx-2">•</span> and everything <span className="text-[#D4B055] mx-2">•</span> <em>in-between</em>.
          </p>

          <p className="mt-16 text-sm text-gray-400 max-w-xl mx-auto font-serif leading-relaxed">
            Meraki is a live, IRL co-working session hosted in Toronto bringing
            <br className="hidden md:block" />
            together people who want to <em>make stuff</em>, and <a href="https://luma.com/merakiuoft" className="underline hover:text-[#B85C38] transition-colors">you're invited</a>.
          </p>
        </div>
      </section>

      {/* Who Can Come Section */}
      <section id="who" className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <PillButton icon={<Users className="w-4 h-4" />} color="red">
              Who Can Come
            </PillButton>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 max-w-3xl">
            Whether you're just starting out or far along, this is a place for <em>you</em> to make things.
          </h2>

          <p className="text-lg text-gray-400 mb-12 max-w-xl">
            We know it can be intimidating to start (we've been there), but you'll be surrounded by others doing the same.
          </p>

          {/* Photo Collage */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/1517_guy.jpg"
                alt="Community member working"
                width={300}
                height={400}
                className="w-full h-full object-cover img-vintage hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg mt-8">
              <Image
                src="/group_talking.jpg"
                alt="Group discussion"
                width={300}
                height={400}
                className="w-full h-full object-cover img-vintage hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/intro_speech.jpg"
                alt="Introduction speech"
                width={300}
                height={400}
                className="w-full h-full object-cover img-vintage hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg mt-8">
              <Image
                src="/group_talking_2.jpg"
                alt="Networking"
                width={300}
                height={400}
                className="w-full h-full object-cover img-vintage hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Decorative doodles */}
            <svg className="absolute top-1/4 right-0 w-24 h-24 pointer-events-none" viewBox="0 0 100 100">
              <path d="M10,50 Q30,20 50,50 T90,50" className="doodle-arrow" />
              <path d="M50,10 Q80,30 50,50 T50,90" className="doodle-arrow" />
            </svg>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photos */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src="/demo_session_1.jpg"
                      alt="Session introduction"
                      width={300}
                      height={225}
                      className="w-full h-full object-cover img-vintage"
                    />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src="/demo_session_2.jpg"
                      alt="Work session"
                      width={300}
                      height={225}
                      className="w-full h-full object-cover img-vintage"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src="/demo_session_3.jpg"
                      alt="Demo presentations"
                      width={300}
                      height={225}
                      className="w-full h-full object-cover img-vintage"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg bg-[#1a1a1a] flex items-end p-4">
                    <div>
                      <div className="mb-2">
                        <svg viewBox="0 0 40 60" className="w-8 h-12">
                          <circle cx="20" cy="10" r="8" fill="none" stroke="#f5f5f5" strokeWidth="1.5" />
                          <line x1="20" y1="18" x2="20" y2="40" stroke="#f5f5f5" strokeWidth="1.5" />
                          <line x1="20" y1="25" x2="10" y2="32" stroke="#f5f5f5" strokeWidth="1.5" />
                          <line x1="20" y1="25" x2="30" y2="32" stroke="#f5f5f5" strokeWidth="1.5" />
                          <line x1="20" y1="40" x2="12" y2="55" stroke="#f5f5f5" strokeWidth="1.5" />
                          <line x1="20" y1="40" x2="28" y2="55" stroke="#f5f5f5" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Join Us &lt;3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-8">
                <PillButton icon={<FileText className="w-4 h-4" />} color="olive">
                  How It Works
                </PillButton>
              </div>

              <h2 className="text-3xl md:text-4xl leading-tight mb-6">
                Introductions,<br />
                two 50-min work blocks, ending with casual open <em>demos</em>
              </h2>

              <p className="text-xl text-[#8BA360] italic mb-6">
                + snacks along the way.
              </p>

              <p className="text-gray-400 leading-relaxed">
                The real magic is in the demos – whether you've got 3 bullet points on a Google Docs or a full-blown prototype, we want to see it. It's a chance to share your work, get feedback, and celebrate your progress. And of course, make new friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Friend of Socratica Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-8 px-6 py-3 bg-[#151515] rounded-2xl border border-[#333]">
            <p className="text-lg">
              <a
                href="https://www.socratica.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B85C38] transition-colors"
              >
                Friend of Socratica ⁂
              </a>
            </p>
          </div>

          <p className="text-xl text-gray-400 mb-8">
            We're part of a global network of co-working communities.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://www.socratica.info/map?location=toronto-Meraki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#333] text-sm hover:bg-[#252525] transition-colors"
            >
              <MapPin className="w-3 h-3" />
              Toronto, ON
            </a>
          </div>
        </div>
      </section>

      {/* Season 3 Announcement */}
      <section className="py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Decorative background - kept subtle and contained */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 C30,20 70,20 100,0 L100,100 C70,80 30,80 0,100 Z" fill="none" stroke="#333" strokeWidth="0.5" />
            <path d="M0,20 C30,40 70,40 100,20 L100,120" fill="none" stroke="#333" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="text-xs tracking-[0.2em] uppercase text-[#B85C38]">
              P.S.
            </span>
          </div>

          <h3 className="text-2xl md:text-4xl font-bold mb-6 leading-tight font-serif">
            Meraki is back for <span className="italic text-[#D4B055] whitespace-nowrap">Season 3</span><br />
            and you're invited!
          </h3>

          <p className="text-gray-400 mb-10 text-sm font-serif">
            Sponsored by <span className="text-[#f5f5f5]">1517</span> and <span className="text-[#f5f5f5]">Entrepreneurs First</span>
          </p>

          <a
            href="https://luma.com/merakiuoft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#f5f5f5] text-[#0a0a0a] rounded-full font-medium tracking-wide hover:bg-white transition-colors"
          >
            <ArrowUpRight className="w-5 h-5" />
            RSVP Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-12 lg:px-20 border-t border-[#222]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Links */}
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">Connect</h4>
              <div className="space-y-3">
                <a href="https://www.instagram.com/meraki_uoft/" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-[#B85C38] transition-colors">Instagram</a>
                <a href="https://x.com/merakiuoft" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-[#B85C38] transition-colors">X (Twitter)</a>
                <a href="https://luma.com/merakiuoft" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-[#B85C38] transition-colors">Luma</a>
                <a href="mailto:merakiatuoft@gmail.com" className="block text-gray-300 hover:text-[#B85C38] transition-colors">Email</a>
              </div>
            </div>

            {/* More */}
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">More</h4>
              <div className="space-y-3">
                <a href="https://www.socratica.info/" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-[#B85C38] transition-colors">Socratica</a>
                <a href="https://www.socratica.info/map" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-[#B85C38] transition-colors">Find Your Node</a>
              </div>
            </div>

            {/* Credits */}
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">Season 3 Co-hosts</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kenny Guo, Richa Pandya, Anupam Chettimada, Samantha Chan, Krupa Dave
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#222]">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              made with <span className="text-[#B85C38]">♡</span> by the Meraki team
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B85C38]"></span>
              <span className="w-2 h-2 rounded-full bg-[#8BA360]"></span>
              <span className="w-2 h-2 rounded-full bg-[#D4B055]"></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
