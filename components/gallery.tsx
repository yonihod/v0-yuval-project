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

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">גלריה</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              צפו בתמונות מפרויקטים קודמים ובדיקות שביצענו
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
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
                <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
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
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl p-0 bg-transparent border-none">
                <div className="relative bg-white rounded-lg overflow-hidden">
                  <div className="relative aspect-video w-full">
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/80 hover:bg-white"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      <X className="h-5 w-5" />
                      <span className="sr-only">סגור</span>
                    </Button>
                  </div>
                  <div className="absolute left-2 top-1/2 -translate-y-1/2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/80 hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                    >
                      <ChevronLeft className="h-6 w-6" />
                      <span className="sr-only">תמונה קודמת</span>
                    </Button>
                  </div>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/80 hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                    >
                      <ChevronRight className="h-6 w-6" />
                      <span className="sr-only">תמונה הבאה</span>
                    </Button>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-medium">{image.title}</h3>
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
