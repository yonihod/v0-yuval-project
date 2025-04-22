"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="קונטור הנדסה" width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-bold">קונטור הנדסה</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            אודות
          </Link>
          <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
            שירותים
          </Link>
          <Link href="#gallery" className="text-sm font-medium transition-colors hover:text-primary">
            גלריה
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            צרו קשר
          </Link>
          <Button asChild>
            <Link href="https://wa.me/972506427772">
              <Phone className="h-5 w-5 ml-1" />
              צרו קשר בוואטסאפ
            </Link>
          </Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background",
          isMenuOpen ? "slide-in-from-top-80" : "hidden",
        )}
      >
        <div className="flex flex-col gap-4">
          <Link
            href="#about"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            אודות
          </Link>
          <Link
            href="#services"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            שירותים
          </Link>
          <Link
            href="#gallery"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            גלריה
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            צרו קשר
          </Link>
          <Button asChild className="mt-4">
            <Link href="https://wa.me/972506427772">
              <Phone className="h-5 w-5 ml-1" />
              צרו קשר בוואטסאפ
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
