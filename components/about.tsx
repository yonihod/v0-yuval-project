import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { HardHat, Award, FileCheck, Building } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-xl">
              <Image src="/engineer-portrait.jpg" alt="יובל חודפי - מהנדס אזרחי" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-lg bg-white p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-sm font-medium">יובל חודפי</p>
                  <p className="text-xs text-muted-foreground">מהנדס אזרחי</p>
                </div>
                <HardHat className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-right">אודות</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-right">
                שלום! אני יובל חודפי, מהנדס אזרחי עם ניסיון רב בבדיקת ליקויי בנייה והכנת דוחות הנדסיים מפורטים. המטרה
                שלי היא להגן עליכם מפני ליקויים נסתרים שעלולים לעלות לכם ביוקר בעתיד.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-2">
                  <Award className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-medium">ניסיון מקצועי</h3>
                    <p className="text-sm text-muted-foreground">שנים של מומחיות</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-2">
                  <FileCheck className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-medium">דוחות מפורטים</h3>
                    <p className="text-sm text-muted-foreground">תיעוד מקיף</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-2">
                  <Building className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-medium">ידע הנדסי</h3>
                    <p className="text-sm text-muted-foreground">הבנה מעמיקה</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-2">
                  <HardHat className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-medium">מקצועיות</h3>
                    <p className="text-sm text-muted-foreground">שירות אמין</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
