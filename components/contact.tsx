import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare,
  InstagramIcon,
  FacebookIcon,
} from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">צרו קשר</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              נשמח לענות על כל שאלה ולתאם בדיקה
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>השאירו פרטים</CardTitle>
              <CardDescription>מלאו את הטופס ונחזור אליכם בהקדם</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input placeholder="שם פרטי" />
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="שם משפחה" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input placeholder="אימייל" type="email" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="טלפון" type="tel" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="הודעה" />
                </div>
                <div className="grid gap-4">
                  <Button asChild size="lg" className="w-full">
                    <Link href="https://wa.me/972506427772?text=היי, אשמח לקבוע בדיקת בדק בית">
                      <MessageSquare className="h-5 w-5 ml-2" />
                      צרו קשר בוואטסאפ
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <Link href="https://wa.me/972506427772?text=היי, אשמח להתייעץ בנוגע לבדק בית">
                      <Phone className="h-5 w-5 ml-2" />
                      התייעצות חינם
                    </Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>פרטי התקשרות</CardTitle>
                <CardDescription>ניתן ליצור קשר באחת מהדרכים הבאות</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-brand-red" />
                  <div>
                    <p className="font-medium">כתובת</p>
                    <p className="text-sm text-muted-foreground"> נס ציונה, ישראל</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-red" />
                  <div>
                    <p className="font-medium">טלפון</p>
                    <Link href="tel:0506427772" className="text-sm text-brand-red hover:text-red-700 hover:underline">
                      050-642-7772
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-red" />
                  <div>
                    <p className="font-medium">אימייל</p>
                    <Link href="mailto:contour.bedek@gmail.com" className="text-sm text-brand-red hover:text-red-700 hover:underline">
                      contour.bedek@gmail.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <InstagramIcon className="h-5 w-5 text-brand-red" />
                  <div>
                    <p className="font-medium">אינסטגרם</p>
                    <Link
                      href="https://www.instagram.com/yuval.hodefi"
                      className="text-sm text-brand-red hover:text-red-700 hover:underline"
                    >
                      yuval.hodefi
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FacebookIcon className="h-5 w-5 text-brand-red" />
                  <div>
                    <p className="font-medium">פייסבוק</p>
                    <Link
                      href="https://www.facebook.com/profile.php?id=61574141625757"
                      className="text-sm text-brand-red hover:text-red-700 hover:underline"
                    >
                      קונטור הנדסה - בדק בית
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>שעות פעילות</CardTitle>
                <CardDescription>זמינים לשירותכם</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">ימים א'-ה'</p>
                    <p className="text-sm text-muted-foreground">08:00 - 19:00</p>
                  </div>
                  <div>
                    <p className="font-medium">יום ו'</p>
                    <p className="text-sm text-muted-foreground">08:00 - 13:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
