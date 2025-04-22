import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Ruler, Shield, Home, CheckCircle, Phone } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-[url('/blueprint-pattern.svg')] opacity-5"></div>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mx-auto w-full max-w-[500px] lg:ml-0 relative">
            <div className="aspect-square overflow-hidden rounded-full bg-gradient-to-tr from-brand-red to-red-700 p-1 shadow-xl">
              <div className="h-full w-full rounded-full bg-white p-4">
                <div className="h-full w-full rounded-full overflow-hidden relative">
                  <Image
                    src="/engineer-portrait.jpg"
                    alt="יובל חודפי - מהנדס אזרחי"
                    fill
                    className="object-cover object-[100%_35%] translate-x-[-5%]"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <Home className="h-8 w-8 text-brand-red" />
                <div>
                  <p className="text-sm font-medium">מגן על הבית שלך</p>
                  <p className="text-xs text-muted-foreground">מאתר ליקויים נסתרים</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 text-right">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">בדק בית מקצועי</h1>
              <p className="text-xl text-muted-foreground">לדאוג לבית שלך לפני שהדברים מסתבכים!</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-end">
              <Button asChild size="lg" className="gap-1">
                <Link href="https://wa.me/972506427772?text=היי, אשמח לקבוע בדיקת בדק בית">
                  <CheckCircle className="h-5 w-5 ml-1" />
                  קבע בדיקה
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://wa.me/972506427772">
                  <Phone className="h-5 w-5 ml-1" />
                  התייעצות חינם
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2 text-right">
                <div>
                  <h3 className="font-medium">מהנדס אזרחי</h3>
                  <p className="text-sm text-muted-foreground">בדיקה על ידי מהנדס מוסמך</p>
                </div>
                <Ruler className="h-8 w-8 text-brand-red" />
              </div>
              <div className="flex items-center gap-2 text-right">
                <div>
                  <h3 className="font-medium">דוחות מפורטים</h3>
                  <p className="text-sm text-muted-foreground">קבילים בבית המשפט</p>
                </div>
                <Shield className="h-8 w-8 text-brand-red" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
