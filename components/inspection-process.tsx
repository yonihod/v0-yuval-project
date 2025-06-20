import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Ruler, Search, FileText } from "lucide-react"

export default function InspectionProcess() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">תהליך הבדיקה</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              להלן פירוט השירותים שיינתנו במעמד בדיקת הנכס
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                חוות הדעת מבוססת על בדיקה ויזואלית מעמיקה, תוך שימוש בכלים מתקדמים
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                <p className="text-sm">בדיקת שיפועים במקלחות ובמרפסת</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                <p className="text-sm">בדיקת תקינות הריצוף (רובה, פגמים)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                <p className="text-sm">בדיקת מידות הדירה בלייזר והתאמה לתכניות</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                <p className="text-sm">בדיקת אלומיניום - תקינות תריסים, גומיות, איטום בהיקף החלונות ומנגנון הפעלה</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                <p className="text-sm">בדיקת מסגרות ומעקות</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                <p className="text-sm">בדיקת נגרות - ארונות מטבח, ארונות אמבטיה ודלתות פנים</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                <p className="text-sm">בדיקת ממ"ד</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                <p className="text-sm">בדיקת סדקים וסטייה בקירות</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                <p className="text-sm">ובדיקות נוספות בהתאם לדרישה</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardHeader className="pb-2">
                <Ruler className="h-10 w-10 text-brand-red mb-2" />
                <CardTitle className="text-lg">בדיקה מקצועית</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  בדיקה יסודית ומקיפה על ידי מהנדס בניין מוסמך, תוך שימוש בכלי מדידה מתקדמים
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Search className="h-10 w-10 text-brand-red mb-2" />
                <CardTitle className="text-lg">איתור ליקויים</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  איתור ליקויי בנייה בכל רכיבי הדירה, כולל ליקויים נסתרים שעלולים להתגלות בעתיד
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <FileText className="h-10 w-10 text-brand-red mb-2" />
                <CardTitle className="text-lg">דוח מפורט</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  כתיבת דוח בדיקה מפורט הקביל בבית המשפט, כולל המלצות לטיפול בליקויים
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
