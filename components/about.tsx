import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { HardHat, Award, FileCheck, Building, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section 
      id="about" 
      className="py-16 md:py-24"
      role="region"
      aria-label="אודותינו"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <header>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">אודותינו</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-right">
                שלום! אני יובל חודפי, מהנדס אזרחי עם ניסיון רב בבדיקת ליקויי בנייה והכנת דוחות הנדסיים מפורטים. המטרה
                שלי היא להגן עליכם מפני ליקויים נסתרים שעלולים לעלות לכם ביוקר בעתיד.
              </p>
            </header>
            <div 
              className="grid grid-cols-2 gap-4 pt-4"
              role="list"
              aria-label="יתרונות מקצועיים"
            >
              <Card role="listitem">
                <CardContent className="p-4 flex items-center gap-2">
                  <Award className="h-8 w-8 text-brand-red" aria-hidden="true" />
                  <div>
                    <h3 className="font-medium">ניסיון מקצועי</h3>
                    <p className="text-sm text-muted-foreground">שנים של מומחיות</p>
                  </div>
                </CardContent>
              </Card>
              <Card role="listitem">
                <CardContent className="p-4 flex items-center gap-2">
                  <FileCheck className="h-8 w-8 text-brand-red" aria-hidden="true" />
                  <div>
                    <h3 className="font-medium">דוחות מפורטים</h3>
                    <p className="text-sm text-muted-foreground">קבילים בבית המשפט</p>
                  </div>
                </CardContent>
              </Card>
              <Card role="listitem">
                <CardContent className="p-4 flex items-center gap-2">
                  <Building className="h-8 w-8 text-brand-red" aria-hidden="true" />
                  <div>
                    <h3 className="font-medium">ידע הנדסי</h3>
                    <p className="text-sm text-muted-foreground">הבנה מעמיקה</p>
                  </div>
                </CardContent>
              </Card>
              <Card role="listitem">
                <CardContent className="p-4 flex items-center gap-2">
                  <CheckCircle className="h-8 w-8 text-brand-red" aria-hidden="true" />
                  <div>
                    <h3 className="font-medium">ליווי מלא</h3>
                    <p className="text-sm text-muted-foreground">לאורך כל התהליך</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-4">
              <Button asChild size="lg" className="gap-1">
                <Link 
                  href="https://wa.me/972506427772?text=היי, אשמח להתייעץ בנוגע לבדק בית"
                  aria-label="פתח שיחת וואטסאפ להתייעצות חינם עם קונטור הנדסה"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CheckCircle className="h-5 w-5 ml-1" aria-hidden="true" />
                  לחצו להתייעצות חינם
                </Link>
              </Button>
            </div>
          </div>
          <div 
            className="relative h-[400px] w-full"
            role="img"
            aria-label="תמונת יובל חודפי, מהנדס אזרחי מוסמך של קונטור הנדסה"
          >
            <Image
              src="/engineer-portrait.jpg"
              alt="יובל חודפי - מהנדס אזרחי מוסמך, מומחה בבדק בית ובדיקות הנדסיות"
              fill
              className="object-cover md:object-[100%_35%] md:translate-x-[-5%]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
