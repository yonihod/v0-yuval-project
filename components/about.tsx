import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { HardHat, Award, FileCheck, Building, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mx-auto w-full max-w-[500px] lg:ml-0 relative">
            <div className="aspect-[3/4] overflow-hidden rounded-xl max-w-[400px]">
              <Image
                src="/engineer-portrait.jpg"
                alt="יובל חודפי - מהנדס אזרחי"
                fill
                className="object-cover md:object-[100%_35%] md:translate-x-[-5%]"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-right">אודות</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-right">
                שלום! אני יובל חודפי, מהנדס אזרחי עם ניסיון רב בבדיקת ליקויי בנייה והכנת דוחות הנדסיים מפורטים. המטרה
                שלי היא להגן עליכם מפני ליקויים נסתרים שעלולים לעלות לכם ביוקר בעתיד.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-right mt-2">
                מטרת הבדיקה – להעניק ללקוח תמונת מצב מקצועית וברורה על מצב הדירה, כולל איתור ליקויים ומתן המלצות לטיפול,
                כדי לאפשר התנהלות מושכלת מול הקבלן ולוודא שהדירה תימסר במצב תקין ובאיכות הנדרשת.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-2">
                  <Award className="h-8 w-8 text-brand-red" />
                  <div>
                    <h3 className="font-medium">ניסיון מקצועי</h3>
                    <p className="text-sm text-muted-foreground">שנים של מומחיות</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-2">
                  <FileCheck className="h-8 w-8 text-brand-red" />
                  <div>
                    <h3 className="font-medium">דוחות מפורטים</h3>
                    <p className="text-sm text-muted-foreground">קבילים בבית המשפט</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-2">
                  <Building className="h-8 w-8 text-brand-red" />
                  <div>
                    <h3 className="font-medium">ידע הנדסי</h3>
                    <p className="text-sm text-muted-foreground">הבנה מעמיקה</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-2">
                  <CheckCircle className="h-8 w-8 text-brand-red" />
                  <div>
                    <h3 className="font-medium">ליווי מלא</h3>
                    <p className="text-sm text-muted-foreground">לאורך כל התהליך</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-4">
              <Button asChild size="lg" className="gap-1">
                <Link href="#contact">
                  <CheckCircle className="h-5 w-5 ml-1" />
                  לחצו להתייעצות חינם
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
