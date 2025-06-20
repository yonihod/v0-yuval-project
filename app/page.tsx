import About from "@/components/about"
import Services from "@/components/services"
import InspectionProcess from "@/components/inspection-process"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
// Import the Testimonials component
import Testimonials from "@/components/testimonials"
// Import the FAQ component
import FAQ from "@/components/faq"
import { VideoGallery } from "@/components/video-gallery"

// Update the Home component to include Testimonials
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <VideoGallery />
        <About />
        <Services />
        <InspectionProcess />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
