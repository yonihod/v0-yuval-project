import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section 
      className="py-16 md:py-24"
      role="region"
      aria-label="שאלות נפוצות"
    >
      <div className="container px-4 md:px-6">
        <header className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">שאלות נפוצות</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              תשובות לשאלות הנפוצות ביותר על שירותי בדק הבית שלנו
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl mt-12">
          <Accordion 
            type="single" 
            collapsible 
            className="w-full"
            aria-label="רשימת שאלות ותשובות נפוצות"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger 
                className="text-right"
                aria-label="מתי כדאי לבצע בדק בית?"
              >
                מתי כדאי לבצע בדק בית?
              </AccordionTrigger>
              <AccordionContent className="text-right">
                מומלץ לבצע בדק בית לפני רכישת דירה (חדשה או יד שנייה), לפני קבלת מפתח מקבלן, לפני ביצוע שיפוץ, או כאשר
                מתגלות בעיות כמו רטיבות או סדקים בדירה קיימת.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger 
                className="text-right"
                aria-label="כמה זמן אורכת בדיקת בדק בית?"
              >
                כמה זמן אורכת בדיקת בדק בית?
              </AccordionTrigger>
              <AccordionContent className="text-right">
                בדיקת בדק בית מקיפה אורכת בין שעתיים לארבע שעות, תלוי בגודל הנכס ובמורכבות הבדיקה. לאחר הבדיקה, הכנת
                הדוח המפורט אורכת בין יום לשלושה ימים.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger 
                className="text-right"
                aria-label="האם הדוח קביל בבית משפט?"
              >
                האם הדוח קביל בבית משפט?
              </AccordionTrigger>
              <AccordionContent className="text-right">
                כן, הדוחות שלנו נכתבים על ידי מהנדס אזרחי מוסמך ומוכרים כחוות דעת מקצועית הקבילה בבית המשפט במקרה של
                סכסוך עם קבלן או מוכר דירה.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger 
                className="text-right"
                aria-label="מה כולל דוח בדק הבית?"
              >
                מה כולל דוח בדק הבית?
              </AccordionTrigger>
              <AccordionContent className="text-right">
                הדוח כולל תיעוד מפורט של כל הליקויים שנמצאו בנכס, מלווה בתמונות, הסברים מקצועיים, הפניות לתקנים
                הרלוונטיים, והמלצות לתיקון. בנוסף, הדוח כולל הערכת עלויות תיקון במקרים רבים.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger 
                className="text-right"
                aria-label="האם אתם מבצעים גם בדיקות רטיבות?"
              >
                האם אתם מבצעים גם בדיקות רטיבות?
              </AccordionTrigger>
              <AccordionContent className="text-right">
                כן, אנו מתמחים באיתור מקורות רטיבות ונזילות באמצעות ציוד מתקדם כמו מצלמה טרמית ומצלמת סיב אופטי,
                המאפשרים לנו לאתר את מקור הבעיה ללא הרס מיותר.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger 
                className="text-right"
                aria-label="האם כדאי להיות נוכח בזמן הבדיקה?"
              >
                האם כדאי להיות נוכח בזמן הבדיקה?
              </AccordionTrigger>
              <AccordionContent className="text-right">
                מומלץ מאוד להיות נוכח בזמן הבדיקה, כך תוכלו לראות את הליקויים בזמן אמת ולקבל הסברים מקצועיים. עם זאת, אם
                אינכם יכולים להיות נוכחים, אנו נבצע את הבדיקה ונשלח לכם דוח מפורט.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
