"use client"

import { useState, useRef } from "react"
import { Droplet, Grid, CheckSquare, Lightbulb, ShieldCheck, Home } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const services = [
  {
    icon: <Home className="h-12 w-12" aria-hidden="true" />,
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
    icon: <Droplet className="h-12 w-12" aria-hidden="true" />,
    title: "בדיקת רטיבות",
    description: "איתור וטיפול בבעיות רטיבות",
    details: ["איתור מקורות רטיבות ונזילות בנכס, כולל שימוש במצלמה טרמית ומכשור מתקדם לזיהוי מדויק של מקור הבעיה."]
  },
  {
    icon: <Grid className="h-12 w-12" aria-hidden="true" />,
    title: "ריצוף",
    description: "בדיקת פגיעות, שקיעות, רובה ושיפועים",
    details: ["בדיקת תקינות הריצוף, איתור פגמים, בדיקת שיפועים במקלחות ובמרפסות, ובדיקת איכות הרובה והתקנת האריחים."]
  },
  {
    icon: <CheckSquare className="h-12 w-12" aria-hidden="true" />,
    title: "התאמה לתוכניות ומפרטים",
    description: "בדיקת התאמה למפרט הטכני",
    details: ["בדיקת מידות הדירה בלייזר והתאמה לתכניות, וידוא שכל הבנייה בוצעה בהתאם למפרט הטכני המוסכם."]
  },
  {
    icon: <Lightbulb className="h-12 w-12" aria-hidden="true" />,
    title: "חשמל",
    description: "בדיקה ויזואלית והתאמה לתקן",
    details: ["בדיקה ויזואלית של מערכת החשמל, בדיקת תקינות השקעים והמפסקים, ווידוא התאמה לתקן הישראלי."]
  },
  {
    icon: <ShieldCheck className="h-12 w-12" aria-hidden="true" />,
    title: "אינסטלציה",
    description: "בדיקת מערכות וכלים סניטריים",
    details: ["בדיקת מערכות אינסטלציה, כלים סניטריים והתאמה למפרט, בדיקת לחץ מים ותקינות מערכת הניקוז."]
  }
]

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null)
  const [isExiting, setIsExiting] = useState<number | null>(null)
  const isMobile = useIsMobile()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const clearExistingTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const handleMouseEnter = (index: number) => {
    clearExistingTimeout()
    setIsExiting(null)
    setActiveService(index)
  }

  const handleMouseLeave = () => {
    if (!isMobile && activeService !== null) {
      clearExistingTimeout()
      setIsExiting(activeService)
      timeoutRef.current = setTimeout(() => {
        setActiveService(null)
        setIsExiting(null)
        timeoutRef.current = null
      }, 300) // Match animation duration
    }
  }

  const handleClick = (index: number) => {
    clearExistingTimeout()
    if (activeService === index) {
      setIsExiting(index)
      timeoutRef.current = setTimeout(() => {
        setActiveService(null)
        setIsExiting(null)
        timeoutRef.current = null
      }, 300)
    } else {
      setIsExiting(null)
      setActiveService(index)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleClick(index)
    }
  }

  return (
    <section 
      id="services" 
      className="py-16 md:py-24 bg-slate-50"
      role="region"
      aria-label="השירותים שלנו"
    >
      <div className="container px-4 md:px-6">
        <header className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">השירותים שלנו</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              בדיקה הנדסית יסודית ומקיפה, המפורטת בהתאם לתקן
            </p>
          </div>
        </header>

        <div 
          className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto"
          role="group"
          aria-label="רשימת שירותים זמינים"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center md:pb-2"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleClick(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`relative w-32 h-32 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 ${
                  activeService === index
                    ? "bg-brand-red shadow-lg scale-110"
                    : "bg-white shadow-md hover:shadow-lg hover:scale-105"
                }`}
                aria-label={`לחץ לפרטים נוספים על ${service.title} - ${service.description}`}
                aria-expanded={activeService === index}
                aria-describedby={`service-details-${index}`}
                type="button"
              >
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-colors ${
                    activeService === index ? "text-white" : "text-brand-red"
                  }`}
                >
                  {service.icon}
                </div>
              </button>
              <h3 className="mt-4 font-medium">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
              {(activeService === index || isExiting === index) && (
                <div
                  id={`service-details-${index}`}
                  className={`bg-white rounded-lg shadow-lg p-4 text-right ${
                    isMobile
                      ? "mt-4 w-full"
                      : "absolute top-full w-64 z-10"
                  } ${
                    isExiting === index
                      ? "animate-out fade-out duration-300"
                      : "animate-in fade-in duration-300"
                  }`}
                  role="region"
                  aria-label={`פרטים נוספים על ${service.title}`}
                >
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
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            role="list"
            aria-label="רשימת ציוד מקצועי"
          >
            {[
              "פלס דיגיטלי ופלס 2 מטר לבדיקת שיפועים",
              "קליבר דיגיטלי לבדיקת עוביים",
              "פלס לייזר לבדיקת משטחים ישרים",
              "מד לחץ מים לבדיקת תקינות עוצמת הזרם",
              "מד זווית ומד לחות",
              "מצלמה טרמית ומצלמת סיב אופטי"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2" role="listitem">
                <div className="h-2 w-2 bg-brand-red rounded-full mt-2" aria-hidden="true"></div>
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
