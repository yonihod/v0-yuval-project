import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "רונית כהן",
    role: "רכשה דירה חדשה",
    content:
      "יובל ביצע בדיקה מקיפה ומקצועית לדירה החדשה שלנו. הוא איתר מספר ליקויים משמעותיים שלא היינו מודעים אליהם, וחסך לנו הרבה כסף וכאב ראש בעתיד. ממליצה בחום!",
  },
  {
    name: "אלון לוי",
    role: "בעל דירה",
    content:
      "הזמנתי את יובל לבדוק נזילה מתמשכת שלא הצלחנו לאתר את מקורה. בעזרת הציוד המתקדם שלו, הוא איתר את מקור הבעיה תוך זמן קצר. מקצועי, אמין ושירותי מאוד.",
  },
  {
    name: "מיכל אברהם",
    role: "קנתה דירה יד שנייה",
    content:
      "ביקשתי מיובל לבצע בדק בית לפני רכישת דירה יד שנייה. הדוח המפורט שהוא הכין היה מדהים - כל פרט קטן תועד, כולל תמונות והמלצות לתיקון. הצלחתי להוריד את מחיר הדירה משמעותית בזכות הדוח.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">לקוחות ממליצים</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              מה אומרים עלינו לקוחות שכבר נעזרו בשירותי בדק הבית שלנו
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <Quote className="h-8 w-8 text-brand-red mb-4" />
                <p className="flex-1 text-muted-foreground mb-4">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-red-100 text-brand-red">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
