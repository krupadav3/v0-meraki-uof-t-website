"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clapperboard, X, Instagram, Mail } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    { src: "/1517_guy.jpg", alt: "Meraki session workspace" },
    { src: "/intro_speech.jpg", alt: "Introduction speech at Meraki" },
    { src: "/meraki_wall_notes.jpg", alt: "Meraki brainstorming wall with sticky notes" },
    { src: "/group_talking.jpg", alt: "Group networking and conversations" },
    { src: "/group_talking_2.jpg", alt: "More networking and conversations" },
    { src: "/meraki_cohosts_2025.jpg", alt: "Meraki 2025 co-hosts team" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Full size image"
              width={1200}
              height={900}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 z-10">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        </div>

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="mb-16 transform hover:scale-105 transition-transform duration-300 relative">
            <Image
              src="/meraki-logo-original.png"
              alt="Meraki UofT Logo"
              width={1200}
              height={360}
              className="mx-auto h-96 md:h-[32rem] lg:h-[36rem] xl:h-[40rem] object-contain relative z-0"
              style={{ mixBlendMode: "screen" }}
            />
          </div>

          <div className="mb-12">
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Meraki is a weekly drop in co-working space carved out for you to work on personal projects that excite
              you—whether that's art, music, code, research, or something totally unexpected :)
            </p>
          </div>

          {/* Playful badge */}
          <div className="mb-8">
            <Badge className="bg-white text-black border-gray-300 px-6 py-2 text-lg font-medium">
              Friend of Socratica ⁂
            </Badge>
          </div>

          {/* Attend session button */}
          <div className="mb-16">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-gray-100 text-black font-bold px-12 py-6 text-xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-white/25"
            >
              <a href="https://luma.com/merakiuoft" target="_blank" rel="noopener noreferrer">
                attend a session
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </Button>
          </div>

          {/* Greek definition of meraki */}
          <div className="text-center">
            <div className="mb-4">
              <span className="text-4xl font-light text-gray-300">me-ra-ki</span>
              <span className="text-lg text-gray-500 ml-3">(Greek)</span>
            </div>
            <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
              the essence of yourself. Embodying the idea of leaving a piece of your soul, creativity, and love in
              everything you do
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-12 text-white">
            what we <span className="text-pink-400">are</span>
          </h2>

          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-2xl leading-relaxed text-white font-light">
                a collective of builders of all kinds, artists, filmmakers, engineers, coders, learners, researchers,
                founders, designers
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-2 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-12 text-white">
            How it <span className="text-pink-400">Works</span>
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-4 justify-center">
              <div className="bg-pink-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                1
              </div>
              <p className="text-white text-lg leading-relaxed text-center max-w-md">
                bring your tools + crafts (or just yourself)
              </p>
            </div>

            <div className="flex items-start gap-4 justify-center">
              <div className="bg-pink-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                2
              </div>
              <p className="text-white text-lg leading-relaxed text-center max-w-md">
                engage in pomodoro style deep-work (2 deep sessions of 50 mins, 10 mins in between + snacks)
              </p>
            </div>

            <div className="flex items-start gap-4 justify-center">
              <div className="bg-pink-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                3
              </div>
              <p className="text-white text-lg leading-relaxed text-center max-w-md">
                showcase your ideas & progress via demos :)
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div
              className="aspect-[4/3] overflow-hidden rounded-lg border border-gray-700 cursor-pointer"
              onClick={() => setSelectedImage("/demo_session_row_1.jpg")}
            >
              <Image
                src="/demo_session_row_1.jpg"
                alt="Demo session presentation"
                width={300}
                height={225}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 relative z-10"
              />
            </div>
            <div
              className="aspect-[4/3] overflow-hidden rounded-lg border border-gray-700 cursor-pointer"
              onClick={() => setSelectedImage("/demo_session_row_2.jpg")}
            >
              <Image
                src="/demo_session_row_2.jpg"
                alt="Collaborative workspace session"
                width={300}
                height={225}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 relative z-10"
              />
            </div>
            <div
              className="aspect-[4/3] overflow-hidden rounded-lg border border-gray-700 cursor-pointer"
              onClick={() => setSelectedImage("/demo_session_row_3.jpg")}
            >
              <Image
                src="/demo_session_row_3.jpg"
                alt="Group demo and feedback session"
                width={300}
                height={225}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-pink-500/30 border border-pink-400/50 rounded-full px-8 py-4 mb-6">
              <Clapperboard className="w-6 h-6 text-pink-100" />
              <p className="text-pink-100 text-xl font-bold">P.S. Meraki is back for Season 3 and you're invited!</p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-2 text-white">Meraki Kick-Off 2025</h3>
            <p className="text-center text-white text-sm mb-8">Sponsored by: 1517 and Entrepreneurs First</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.slice(0, 5).map((image, index) => (
                <div key={index} className="space-y-4">
                  <div
                    className="aspect-[4/3] overflow-hidden rounded-2xl border border-gray-700 cursor-pointer"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 relative z-10"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <div className="max-w-md">
                <div
                  className="aspect-[4/3] overflow-hidden rounded-2xl border border-gray-700 cursor-pointer"
                  onClick={() => setSelectedImage(images[5].src)}
                >
                  <Image
                    src="/meraki_cohosts_2025.jpg"
                    alt="Meraki 2025 co-hosts team"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 relative z-10"
                  />
                </div>
                <div className="text-center mt-4">
                  <p className="text-gray-400 text-sm">
                    Our 5 co-hosts for Season 3: Kenny Guo, Richa Pandya, Anupam Chettimada, Samantha Chan, Krupa Dave
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg">more memories coming soon...</p>
            <div className="mt-8 flex justify-center items-center gap-8">
              <a
                href="https://www.instagram.com/meraki_uoft/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors transform hover:scale-110 duration-300"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="https://x.com/merakiuoft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors transform hover:scale-110 duration-300"
              >
                <X className="w-8 h-8" />
              </a>
              <a
                href="https://luma.com/merakiuoft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition-colors transform hover:scale-110 duration-300"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </a>
              <a
                href="mailto:merakiatuoft@gmail.com"
                className="text-white hover:text-gray-300 transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/meraki-logo-original.png"
              alt="Meraki UofT Logo"
              width={200}
              height={60}
              className="h-12 w-auto mx-auto opacity-80 relative z-10"
              style={{ mixBlendMode: "screen" }}
            />
          </div>

          <p className="text-gray-400 text-lg mb-8">
            made with <span className="text-pink-400">♡</span> by the Meraki team
          </p>

          <div className="flex justify-center gap-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}
