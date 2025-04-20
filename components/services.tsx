import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ShieldCheck, Droplet, Grid, CheckSquare, Lightbulb } from "lucide-react"

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">השירותים שלנו</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              בדיקה הנדסית יסודית ומקיפה, המפורטת בהתאם לתקן, לצורך איתור ליקויי בנייה בכל רכיבי הדירה
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card className="border-2 border-blue-200">
            <CardHeader className="pb-2">
              <Home className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>בדק בית מקצועי</CardTitle>
              <CardDescription>בדיקה על ידי מהנדס בניין מוסמך</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1 list-inside rtl">
                <li>✔ בדיקה על ידי מהנדס בניין מוסמך</li>
                <li>✔ בדיקה באמצעות כלי מדידה הנדסיים ומכשור מתקדם</li>
                <li>✔ בדיקת הדירה כולל מחסן, גינה וחנייה</li>
                <li>✔ כתיבת דוח בדיקה מפורט קביל בבית המשפט</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Droplet className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>בדיקת רטיבות</CardTitle>
              <CardDescription>איתור וטיפול בבעיות רטיבות</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                איתור מקורות רטיבות ונזילות בנכס, כולל שימוש במצלמה טרמית ומכשור מתקדם לזיהוי מדויק של מקור הבעיה.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Grid className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>ריצוף</CardTitle>
              <CardDescription>בדיקת פגיעות, שקיעות, רובה ושיפועים</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                בדיקת תקינות הריצוף, איתור פגמים, בדיקת שיפועים במקלחות ובמרפסות, ובדיקת איכות הרובה והתקנת האריחים.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CheckSquare className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>התאמה לתוכניות ומפרטים</CardTitle>
              <CardDescription>בדיקת התאמה למפרט הטכני</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                בדיקת מידות הדירה בלייזר והתאמה לתכניות, וידוא שכל הבנייה בוצעה בהתאם למפרט הטכני המוסכם.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <Lightbulb className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>חשמל</CardTitle>
              <CardDescription>בדיקה ויזואלית והתאמה לתקן</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                בדיקה ויזואלית של מערכת החשמל, בדיקת תקינות השקעים והמפסקים, ווידוא התאמה לתקן הישראלי.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <ShieldCheck className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>אינסטלציה</CardTitle>
              <CardDescription>בדיקת מערכות וכלים סניטריים</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                בדיקת מערכות אינסטלציה, כלים סניטריים והתאמה למפרט, בדיקת לחץ מים ותקינות מערכת הניקוז.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto max-w-3xl mt-16 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center">ציוד ומכשור מקצועי</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
              <p className="text-sm">פלס דיגיטלי ופלס 2 מטר לבדיקת שיפועים</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
              <p className="text-sm">קליבר דיגיטלי לבדיקת עוביים</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
              <p className="text-sm">פלס לייזר לבדיקת משטחים ישרים</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
              <p className="text-sm">מד לחץ מים לבדיקת תקינות עוצמת הזרם</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
              <p className="text-sm">מד זווית ומד לחות</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
              <p className="text-sm">מצלמה טרמית ומצלמת סיב אופטי</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
