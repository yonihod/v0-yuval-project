import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Building, Ruler, FileText, Search, ShieldCheck } from "lucide-react"

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">השירותים שלנו</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              אנו מציעים מגוון שירותי בדק בית מקצועיים כדי להגן על ההשקעה שלכם
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card className="border-2 border-blue-200">
            <CardHeader className="pb-2">
              <Home className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>בדק בית לפני רכישה</CardTitle>
              <CardDescription>בדיקה מקיפה לפני רכישת נכס</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                בדיקה מקצועית של הנכס לפני הרכישה לאיתור ליקויים נסתרים שעלולים להשפיע על ערך הנכס ועלויות תיקון
                עתידיות.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Building className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>בדיקת דירות חדשות</CardTitle>
              <CardDescription>בדיקת איכות בנייה בדירות חדשות</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                בדיקה מקיפה של דירות חדשות לפני קבלת מפתח, לוודא שהבנייה עומדת בתקנים ובמפרט הטכני.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Ruler className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>פיקוח על שיפוצים</CardTitle>
              <CardDescription>ליווי מקצועי בתהליך השיפוץ</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                פיקוח הנדסי על עבודות שיפוץ לוודא שהעבודה מתבצעת בהתאם לתקנים ולמפרט המוסכם.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <FileText className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>דוחות הנדסיים</CardTitle>
              <CardDescription>דוחות מפורטים ומקצועיים</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                הכנת דוחות הנדסיים מפורטים המתעדים את כל הליקויים שנמצאו, כולל המלצות לתיקון והערכת עלויות.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Search className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>איתור נזילות</CardTitle>
              <CardDescription>זיהוי וטיפול בבעיות רטיבות</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                איתור מקורות רטיבות ונזילות בנכס, כולל המלצות לטיפול ומניעת נזקים עתידיים.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <ShieldCheck className="h-12 w-12 text-blue-600 mb-2" />
              <CardTitle>ייעוץ הנדסי</CardTitle>
              <CardDescription>ייעוץ מקצועי בנושאי בנייה</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                ייעוץ הנדסי מקצועי בנושאי בנייה, שיפוצים, ותחזוקת מבנים לטווח ארוך.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
