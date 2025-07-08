"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link 
            href="/" 
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
            aria-label="קונטור הנדסה - עמוד הבית"
          >
            <Image 
              src="/logo.png" 
              alt="לוגו קונטור הנדסה" 
              width={40} 
              height={40} 
              className="h-10 w-auto" 
              priority
            />
            <span className="text-xl font-bold">קונטור הנדסה</span>
          </Link>
        </div>

        <nav 
          className="hidden md:flex items-center gap-6" 
          role="navigation" 
          aria-label="ניווט ראשי"
          id="navigation"
        >
          <Link 
            href="#about" 
            className="text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="מעבר לקטע אודות"
          >
            אודות
          </Link>
          <Link 
            href="#services" 
            className="text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="מעבר לקטע שירותים"
          >
            שירותים
          </Link>
          <Link 
            href="#gallery" 
            className="text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="מעבר לגלריה"
          >
            גלריה
          </Link>
          <Link 
            href="#contact" 
            className="text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="מעבר לקטע צור קשר"
          >
            צרו קשר
          </Link>
          <Button asChild>
            <Link 
              href="https://wa.me/972506427772"
              aria-label="פתח שיחה בוואטסאפ עם קונטור הנדסה"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="h-5 w-5 ml-1" aria-hidden="true" />
              צרו קשר בוואטסאפ
            </Link>
          </Button>
        </nav>

        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={handleMenuToggle}
          onKeyDown={handleKeyDown}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
          <span className="sr-only">{isMenuOpen ? "סגור תפריט" : "פתח תפריט"}</span>
        </Button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background",
          isMenuOpen ? "slide-in-from-top-80" : "hidden"
        )}
        role="navigation"
        aria-label="תפריט ניווט נייד"
        onKeyDown={handleKeyDown}
      >
        <div className="flex flex-col gap-4">
          <Link
            href="#about"
            className="text-lg font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            onClick={handleMenuClose}
            aria-label="מעבר לקטע אודות"
          >
            אודות
          </Link>
          <Link
            href="#services"
            className="text-lg font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            onClick={handleMenuClose}
            aria-label="מעבר לקטע שירותים"
          >
            שירותים
          </Link>
          <Link
            href="#gallery"
            className="text-lg font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            onClick={handleMenuClose}
            aria-label="מעבר לגלריה"
          >
            גלריה
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            onClick={handleMenuClose}
            aria-label="מעבר לקטע צור קשר"
          >
            צרו קשר
          </Link>
          <Button asChild className="mt-4">
            <Link 
              href="https://wa.me/972506427772"
              aria-label="פתח שיחה בוואטסאפ עם קונטור הנדסה"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="h-5 w-5 ml-1" aria-hidden="true" />
              צרו קשר בוואטסאפ
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
