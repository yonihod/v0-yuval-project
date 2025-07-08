"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/gallery/yellow-cable.jpg",
    alt: "בדיקת מערכות ניקוז עם כבל צהוב",
    title: "בדיקת מערכות ניקוז",
  },
  {
    src: "/gallery/inspection-2.jpg",
    alt: "בדיקת מפלס דלת",
    title: "בדיקת הפרשי גובה מפני ריצוף לממ\"ד",
  },
  {
    src: "/gallery/inspection-3.jpg",
    alt: "בדיקת שיפועי ריצוף",
    title: "בדיקת שיפועים במרפסת",
  },
  {
    src: "/gallery/inspection-4.jpg",
    alt: "בדיקה עם לייזר",
    title: "בדיקת פילוס דלת כניסה באמצעות מאזנת לייזר",
  },
  {
    src: "/gallery/toilet-level.jpg",
    alt: "בדיקת מערכות אינסטלציה עם פלס על אסלה",
    title: "בדיקת מערכות אינסטלציה",
  },
  {
    src: "/gallery/ceramic-tiles.jpg",
    alt: "בדיקת פגיעות באריחי קרמיקה",
    title: "בדיקת פגיעות באריחי קרמיקה",
  },
]

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isDialogOpen) return
    
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault()
        nextImage()
        break
      case 'ArrowRight':
        event.preventDefault()
        prevImage()
        break
      case 'Escape':
        event.preventDefault()
        setIsDialogOpen(false)
        break
    }
  }

  return (
    <section 
      id="gallery" 
      className="py-16 md:py-24"
      role="region"
      aria-label="גלריית תמונות פרויקטים"
    >
      <div className="container px-4 md:px-6">
        <header className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">גלריה</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              צפו בתמונות מפרויקטים קודמים ובדיקות שביצענו
            </p>
          </div>
        </header>
        <div 
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12"
          role="grid"
          aria-label="גלריית תמונות בדיקות"
        >
          {galleryImages.map((image, index) => (
            <Dialog
              key={index}
              open={isDialogOpen && currentImage === index}
              onOpenChange={(open) => {
                setIsDialogOpen(open)
                if (open) setCurrentImage(index)
              }}
            >
              <DialogTrigger asChild>
                <Card 
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-brand-red focus-within:ring-offset-2"
                  role="gridcell"
                >
                  <CardContent className="p-0">
                    <button
                      className="w-full text-left focus:outline-none"
                      aria-label={`פתח תמונה בגודל מלא: ${image.title}`}
                    >
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">{image.title}</h3>
                      </div>
                    </button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent 
                className="sm:max-w-3xl p-0 bg-transparent border-none"
                onKeyDown={handleKeyDown}
                role="dialog"
                aria-label={`תמונה ${currentImage + 1} מתוך ${galleryImages.length}: ${galleryImages[currentImage].title}`}
                aria-describedby="gallery-dialog-description"
              >
                <div className="relative bg-white rounded-lg overflow-hidden">
                  <div className="relative aspect-video w-full">
                    <Image 
                      src={image.src || "/placeholder.svg"} 
                      alt={image.alt} 
                      fill 
                      className="object-contain" 
                    />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/80 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
                      onClick={() => setIsDialogOpen(false)}
                      aria-label="סגור גלריה"
                      type="button"
                    >
                      <X className="h-5 w-5" aria-hidden="true" />
                    </Button>
                  </div>
                  <div className="absolute left-2 top-1/2 -translate-y-1/2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/80 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                      aria-label={`עבור לתמונה הקודמת (${currentImage === 0 ? galleryImages.length : currentImage} מתוך ${galleryImages.length})`}
                      type="button"
                    >
                      <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                    </Button>
                  </div>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/80 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      aria-label={`עבור לתמונה הבאה (${currentImage + 2 > galleryImages.length ? 1 : currentImage + 2} מתוך ${galleryImages.length})`}
                      type="button"
                    >
                      <ChevronRight className="h-6 w-6" aria-hidden="true" />
                    </Button>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-medium">{image.title}</h3>
                    <p id="gallery-dialog-description" className="sr-only">
                      תמונה {currentImage + 1} מתוך {galleryImages.length}. השתמש בחצים כדי לנווט בין תמונות או לחץ Escape לסגירה.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
