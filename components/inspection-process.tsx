import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Ruler, Search, FileText } from "lucide-react"

export default function InspectionProcess() {
  return (
    <section 
      className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50"
      role="region"
      aria-label="תהליך הבדיקה"
    >
      <div className="container px-4 md:px-6">
        <header className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">תהליך הבדיקה</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              להלן פירוט השירותים שיינתנו במעמד בדיקת הנכס
            </p>
          </div>
        </header>
        <div 
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12"
          role="list"
          aria-label="שלבי תהליך הבדיקה"
        >
          <Card className="text-center" role="listitem">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-red">
                <Search className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg">בדיקה מקדימה</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                סקירה ראשונית של הנכס וזיהוי אזורים הדורשים תשומת לב מיוחדת
              </p>
            </CardContent>
          </Card>
          <Card className="text-center" role="listitem">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-red">
                <Ruler className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg">מדידות מדויקות</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                ביצוע מדידות מדויקות באמצעות ציוד מקצועי לבדיקת שיפועים, פילוס ומפלסים
              </p>
            </CardContent>
          </Card>
          <Card className="text-center" role="listitem">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-red">
                <CheckCircle className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg">תיעוד הליקויים</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                תיעוד מפורט של כל הליקויים שנמצאו כולל צילום ורישום מדויק של המיקום
              </p>
            </CardContent>
          </Card>
          <Card className="text-center" role="listitem">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-red">
                <FileText className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <CardTitle className="text-lg">הכנת דוח</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                הכנת דוח מפורט הכולל תמונות, הסברים מקצועיים והמלצות לתיקון
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
