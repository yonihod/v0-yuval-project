import Link from "next/link"
import Image from "next/image"
import { InstagramIcon, FacebookIcon, Mail, Phone, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="קונטור הנדסה" width={40} height={40} className="h-10 w-auto" />
              <span className="text-xl font-bold">קונטור הנדסה</span>
            </div>
            <p className="text-slate-300 max-w-xs">בדק בית מקצועי – לדאוג לבית שלך לפני שהדברים מסתבכים!</p>
            <div className="flex space-x-4">
              <Link href="https://wa.me/972506427772" className="text-slate-300 hover:text-white">
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">וואטסאפ</span>
              </Link>
              <Link href="https://www.instagram.com/yuval.hodefi" className="text-slate-300 hover:text-white">
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">אינסטגרם</span>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61574141625757"
                className="text-slate-300 hover:text-white"
              >
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">פייסבוק</span>
              </Link>
              <Link href="mailto:contour-bedek@gmail.com" className="text-slate-300 hover:text-white">
                <Mail className="h-5 w-5" />
                <span className="sr-only">אימייל</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">קישורים מהירים</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#about" className="text-slate-300 hover:text-white">
                אודות
              </Link>
              <Link href="#services" className="text-slate-300 hover:text-white">
                שירותים
              </Link>
              <Link href="#gallery" className="text-slate-300 hover:text-white">
                גלריה
              </Link>
              <Link href="#contact" className="text-slate-300 hover:text-white">
                צרו קשר
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">צור קשר</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>050-642-7772</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contour-bedek@gmail.com</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <span className="flex-shrink-0">📍</span>
                <span>הטייסים 4, נס ציונה, ישראל</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} קונטור הנדסה - בדק בית. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  )
}
