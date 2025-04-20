import Hero from "@/components/hero"
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

// Update the Home component to include Testimonials
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <InspectionProcess />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
