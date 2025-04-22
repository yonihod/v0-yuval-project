"use client"

import { useState } from "react"
import { Droplet, Grid, CheckSquare, Lightbulb, ShieldCheck, Home } from "lucide-react"

const services = [
  {
    icon: <Home className="h-12 w-12" />,
    title: "בדק בית מקצועי",
    description: "בדיקה על ידי מהנדס בניין מוסמך",
    details: [
      "✔ בדיקה על ידי מהנדס בניין מוסמך",
      "✔ בדיקה באמצעות כלי מדידה הנדסיים ומכשור מתקדם",
      "✔ בדיקת הדירה כולל מחסן, גינה וחנייה",
      "✔ כתיבת דוח בדיקה מפורט קביל בבית המשפט"
    ]
  },
  {
    icon: <Droplet className="h-12 w-12" />,
    title: "בדיקת רטיבות",
    description: "איתור וטיפול בבעיות רטיבות",
    details: ["איתור מקורות רטיבות ונזילות בנכס, כולל שימוש במצלמה טרמית ומכשור מתקדם לזיהוי מדויק של מקור הבעיה."]
  },
  {
    icon: <Grid className="h-12 w-12" />,
    title: "ריצוף",
    description: "בדיקת פגיעות, שקיעות, רובה ושיפועים",
    details: ["בדיקת תקינות הריצוף, איתור פגמים, בדיקת שיפועים במקלחות ובמרפסות, ובדיקת איכות הרובה והתקנת האריחים."]
  },
  {
    icon: <CheckSquare className="h-12 w-12" />,
    title: "התאמה לתוכניות ומפרטים",
    description: "בדיקת התאמה למפרט הטכני",
    details: ["בדיקת מידות הדירה בלייזר והתאמה לתכניות, וידוא שכל הבנייה בוצעה בהתאם למפרט הטכני המוסכם."]
  },
  {
    icon: <Lightbulb className="h-12 w-12" />,
    title: "חשמל",
    description: "בדיקה ויזואלית והתאמה לתקן",
    details: ["בדיקה ויזואלית של מערכת החשמל, בדיקת תקינות השקעים והמפסקים, ווידוא התאמה לתקן הישראלי."]
  },
  {
    icon: <ShieldCheck className="h-12 w-12" />,
    title: "אינסטלציה",
    description: "בדיקת מערכות וכלים סניטריים",
    details: ["בדיקת מערכות אינסטלציה, כלים סניטריים והתאמה למפרט, בדיקת לחץ מים ותקינות מערכת הניקוז."]
  }
]

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">השירותים שלנו</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              בדיקה הנדסית יסודית ומקיפה, המפורטת בהתאם לתקן
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <button
                onClick={() => setActiveService(activeService === index ? null : index)}
                className={`relative w-32 h-32 rounded-full transition-all duration-300 ${
                  activeService === index 
                  ? 'bg-brand-red shadow-lg scale-110' 
                  : 'bg-white shadow-md hover:shadow-lg hover:scale-105'
                }`}
              >
                <div className={`absolute inset-0 flex items-center justify-center transition-colors ${
                  activeService === index ? 'text-white' : 'text-brand-red'
                }`}>
                  {service.icon}
                </div>
              </button>
              <h3 className="mt-4 font-medium">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
              {activeService === index && (
                <div className="mt-4 bg-white rounded-lg shadow-lg p-4 text-right">
                  {service.details.map((detail, i) => (
                    <p key={i} className="text-sm mb-2">{detail}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-3xl mt-16 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-center">ציוד ומכשור מקצועי</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "פלס דיגיטלי ופלס 2 מטר לבדיקת שיפועים",
              "קליבר דיגיטלי לבדיקת עוביים",
              "פלס לייזר לבדיקת משטחים ישרים",
              "מד לחץ מים לבדיקת תקינות עוצמת הזרם",
              "מד זווית ומד לחות",
              "מצלמה טרמית ומצלמת סיב אופטי"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="h-2 w-2 bg-brand-red rounded-full mt-2"></div>
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
