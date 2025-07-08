"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Ruler, Shield, Home, CheckCircle, Phone } from "lucide-react"

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white"
      role="banner"
      aria-label="אזור ראשי - קונטור הנדסה בדק בית"
    >
      <div className="absolute inset-0 bg-[url('/blueprint-pattern.svg')] opacity-5 pointer-events-none" aria-hidden="true"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mx-auto w-full max-w-[500px] lg:ml-0 relative">
            <div 
              className="aspect-square overflow-hidden rounded-full bg-gradient-to-tr from-brand-red to-red-700 p-1 shadow-xl group perspective"
              role="img"
              aria-label="תמונת פרופיל של יובל חודפי - מהנדס אזרחי מוסמך"
            >
              <div className="relative h-full w-full duration-1000 preserve-3d group-hover:rotate-y-180">
                {/* Front side - current image */}
                <div className="absolute h-full w-full rounded-full bg-white p-4 backface-hidden">
                  <div className="h-full w-full rounded-full overflow-hidden relative">
                    <Image
                      src="/engineer-portrait.jpg"
                      alt="יובל חודפי - מהנדס אזרחי מוסמך, מומחה בבדק בית"
                      fill
                      className="object-cover object-[100%_35%] translate-x-[-5%]"
                      priority
                    />
                  </div>
                </div>
                {/* Back side - working image */}
                <div className="absolute h-full w-full rounded-full bg-white p-4 rotate-y-180 backface-hidden">
                  <div className="h-full w-full rounded-full overflow-hidden relative">
                    <Image
                      src="/engineer-working.jpg"
                      alt="יובל חודפי מבצע בדיקת בית מקצועית"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <div 
              className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 rounded-lg bg-white md:p-4 p-2 shadow-lg"
              role="complementary"
              aria-label="יתרון מרכזי - הגנה על הבית"
            >
              <div className="flex items-center gap-2">
                <Home className="h-8 w-8 text-brand-red" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">מגן על הבית שלך</p>
                  <p className="text-xs text-muted-foreground">מאתר ליקויים נסתרים</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 text-right">
            <header className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                בדק בית מקצועי
              </h1>
              <p className="text-xl text-muted-foreground">
                לדאוג לבית שלך לפני שהדברים מסתבכים!
              </p>
            </header>
            <div 
              className="flex flex-col gap-2 min-[400px]:flex-row justify-end"
              role="group"
              aria-label="פעולות ראשיות"
            >
              <Button asChild size="lg" className="gap-1">
                <a 
                  href="#contact" 
                  onClick={scrollToContact}
                  aria-label="מעבר לטופס יצירת קשר לקביעת בדיקה"
                >
                  <CheckCircle className="h-5 w-5 ml-1" aria-hidden="true" />
                  קבע בדיקה
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link 
                  href="https://wa.me/972506427772"
                  aria-label="פתח שיחה בוואטסאפ להתייעצות חינם"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5 ml-1" aria-hidden="true" />
                  התייעצות חינם
                </Link>
              </Button>
            </div>
            <div 
              className="grid grid-cols-2 gap-4 pt-4"
              role="region"
              aria-label="יתרונות מרכזיים"
            >
              <div className="flex items-center gap-2 text-right">
                <div>
                  <h3 className="font-medium">מהנדס אזרחי</h3>
                  <p className="text-sm text-muted-foreground">בדיקה על ידי מהנדס מוסמך</p>
                </div>
                <Ruler className="h-8 w-8 text-brand-red" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-2 text-right">
                <div>
                  <h3 className="font-medium">דוחות מפורטים</h3>
                  <p className="text-sm text-muted-foreground">קבילים בבית המשפט</p>
                </div>
                <Shield className="h-8 w-8 text-brand-red" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
