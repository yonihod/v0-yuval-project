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
import { list } from '@vercel/blob'

// Update the Home component to include Testimonials
export default async function Home() {
  const { blobs } = await list()
  
  const desiredOrder = [
    'יובל חודפי - בדק בית 14',
    'יובל חודפי - בדק בית 13',
    'יובל חודפי - בדק בית 07 - אחרי תיקון',
    'יובל חודפי - בדק בית 05',
    'יובל חודפי - בדק בית 01',
  ]
  
  const videos = desiredOrder.map(prefix => {
    const blob = blobs.find(b => b.pathname.startsWith(prefix))
    return blob ? { name: blob.pathname, url: blob.url } : null
  }).filter(Boolean) as { name: string, url: string }[]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <VideoGallery videos={videos} />
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
