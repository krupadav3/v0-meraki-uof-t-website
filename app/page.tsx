"use client"

import Image from "next/image"
import { ArrowUpRight, Menu, Sparkles, Users, FileText, MapPin, X } from "lucide-react"
import { PillButton } from "@/components/PillButton"
import { useState } from "react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const galleryImages = [
    { src: "/new_images/DSCN0827.JPG", alt: "Workshop table scene" },
    { src: "/new_images/IMG_4169.jpg", alt: "Participants collaborating" },
    { src: "/new_images/IMG_4176.jpg", alt: "Focused work session" },
    { src: "/new_images/IMG_4179.jpg", alt: "Shared workspace moment" },
    { src: "/new_images/IMG_5985.JPG", alt: "Community gathering" },
    { src: "/new_images/IMG_6420.JPG", alt: "Creative work in progress" },
    { src: "/1517_guy.jpg", alt: "Community member working" },
    { src: "/group_talking.jpg", alt: "Group discussion" },
    { src: "/intro_speech.jpg", alt: "Introduction speech" },
    { src: "/group_talking_2.jpg", alt: "Networking" },
    { src: "/demo_session_1.jpg", alt: "Session introduction" },
    { src: "/demo_session_2.jpg", alt: "Work session" },
    { src: "/demo_session_row_1.jpg", alt: "Project tables" },
    { src: "/demo_session_row_2.jpg", alt: "Collaborative working" },
    { src: "/meraki_wall_notes.jpg", alt: "Wall notes and ideas" },
  ]

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
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-2 relative">
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
              className="h-auto w-auto max-h-64 md:max-h-80 lg:max-h-96 img-vintage"
              priority
            />
          </div>

          {/* Tagline */}
          <div className="max-w-xl mb-10">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
              We run weekly co-working sessions where you can focus on your{" "}
              <em className="font-normal text-[#f5f5f5]">passion projects</em> with likeminded people.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-4">
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
      <section className="relative -mt-12 md:-mt-16">
        <div className="relative">
          <div
            className="w-full mt-0 mb-10 overflow-hidden"
          >
            <Image
              src="/selfie_kickoff-extended.png"
              alt="Meraki community group photo"
              width={1920}
              height={700}
              className="w-full h-auto object-cover img-vintage-strong"
              style={{ objectPosition: 'center center' }}
              priority
            />
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
          <h2 className="text-3xl md:text-5xl leading-tight md:leading-snug">
            A live, IRL co-working session for people who want to <em>make stuff</em>.
          </h2>

          <p className="mt-10 text-base md:text-lg text-gray-300 max-w-xl mx-auto font-serif leading-relaxed">
            We host in Toronto and bring together folks working on passion projects.
          </p>
          <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl mx-auto font-serif leading-relaxed">
            If that sounds like you, <a href="https://luma.com/merakiuoft" className="underline hover:text-[#B85C38] transition-colors">you're invited</a>.
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

        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Join CTA */}
            <div className="relative">
              <div className="rounded-3xl border border-[#333] bg-[#121212] p-10 text-center">
                <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-6">Ready to join?</p>
                <p className="text-xl md:text-2xl font-medium mb-8">
                  Show up, share progress, and meet other makers.
                </p>
                <a
                  href="https://luma.com/merakiuoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#B85C38] text-[#0a0a0a] rounded-full text-sm font-medium tracking-wide uppercase hover:bg-[#d06a40] transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  Join Us
                </a>
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
                The real magic is in the demos – whether you've got 3 bullet points on a Google Docs or a full-blown prototype, we want to see it.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                It's a chance to share your work, get feedback, and celebrate progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <PillButton icon={<Sparkles className="w-4 h-4" />} color="olive">
              Gallery
            </PillButton>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 max-w-4xl">
            A growing wall of moments from Meraki nights.
          </h2>
          <p className="text-lg text-gray-400 mb-4 max-w-2xl">
            People show up with sketches, laptops, canvases, and prototypes.
          </p>
          <p className="text-gray-400 mb-12 max-w-2xl">
            This is what it looks like when the room is full of makers building side by side.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className="aspect-[4/3] overflow-hidden rounded-2xl photo-fade"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={520}
                  height={390}
                  className="w-full h-full object-cover img-vintage hover:scale-105 transition-transform duration-500 photo-fade-img"
                />
              </div>
            ))}
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a1a1a] border border-[#333] text-lg hover:bg-[#252525] transition-colors"
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
