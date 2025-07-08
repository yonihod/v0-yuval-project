import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  MessageSquare,
  InstagramIcon,
  FacebookIcon,
  Phone,
  Mail
} from "lucide-react"

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 bg-slate-50"
      role="region"
      aria-label="יצירת קשר"
    >
      <div className="container px-4 md:px-6">
        <header className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              צרו קשר
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              נשמח לענות על כל שאלה ולתאם בדיקה
            </p>
          </div>
        </header>
        
        <div className="mx-auto max-w-md mt-12">
          <div className="flex flex-col items-center space-y-6">
            <Button asChild size="lg" className="w-full text-lg py-6">
              <Link 
                href="https://wa.me/972506427772?text=היי, אשמח להתייעץ בנוגע לבדק בית"
                aria-label="פתח שיחת וואטסאפ להתייעצות חינם עם קונטור הנדסה"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="h-6 w-6 ml-2" aria-hidden="true" />
                לחצו להתייעצות חינם
              </Link>
            </Button>
            
            <nav 
              className="flex space-x-6 justify-center"
              role="navigation"
              aria-label="רשתות חברתיות ויצירת קשר"
            >
              <Link 
                href="tel:0506427772" 
                className="text-brand-red hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 rounded-md p-1"
                aria-label="התקשר לקונטור הנדסה: 050-642-7772"
              >
                <Phone className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link 
                href="mailto:contour.bedek@gmail.com" 
                className="text-brand-red hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 rounded-md p-1"
                aria-label="שלח מייל לקונטור הנדסה"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link 
                href="https://www.instagram.com/yuval.hodefi" 
                className="text-brand-red hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 rounded-md p-1"
                aria-label="עקוב אחר קונטור הנדסה באינסטגרם"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link 
                href="https://www.facebook.com/profile.php?id=61574141625757" 
                className="text-brand-red hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 rounded-md p-1"
                aria-label="עקוב אחר קונטור הנדסה בפייסבוק"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="h-6 w-6" aria-hidden="true" />
              </Link>
            </nav>
          </div>
        </div>

        <Card className="mx-auto max-w-md mt-8">
          <CardHeader className="text-center">
            <CardTitle>שעות פעילות</CardTitle>
            <CardDescription>זמינים לשירותכם</CardDescription>
          </CardHeader>
          <CardContent>
            <div 
              className="grid grid-cols-2 gap-4"
              role="table"
              aria-label="טבלת שעות פעילות"
            >
              <div className="text-center" role="row">
                <p className="font-medium" role="columnheader">ימים א'-ה'</p>
                <p className="text-sm text-muted-foreground" role="cell">08:00 - 19:00</p>
              </div>
              <div className="text-center" role="row">
                <p className="font-medium" role="columnheader">יום ו'</p>
                <p className="text-sm text-muted-foreground" role="cell">08:00 - 13:00</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
