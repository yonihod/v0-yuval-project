import About from "@/components/about";
import Services from "@/components/services";
import InspectionProcess from "@/components/inspection-process";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
// Import the Testimonials component
import Testimonials from "@/components/testimonials";
// Import the FAQ component
import FAQ from "@/components/faq";
import { VideoGallery } from "@/components/video-gallery";

// Update the Home component to include Testimonials
export default function Home() {
  // YouTube video IDs extracted from the provided URLs
  const videos = [
    {
      id: "5cSeBEZL46I",
      thumbnail: "https://img.youtube.com/vi/5cSeBEZL46I/maxresdefault.jpg",
    },
    {
      id: "mZo7GBuFbzk",
      thumbnail: "https://img.youtube.com/vi/mZo7GBuFbzk/maxresdefault.jpg",
    },
    {
      id: "Fk7HYEIxifM",
      thumbnail: "https://img.youtube.com/vi/Fk7HYEIxifM/maxresdefault.jpg",
    },
    {
      id: "c8I3I2GRYLI",
      thumbnail: "https://img.youtube.com/vi/c8I3I2GRYLI/maxresdefault.jpg",
    },
    {
      id: "bpaySamc1tc",
      thumbnail: "https://img.youtube.com/vi/bpaySamc1tc/maxresdefault.jpg",
    },
  ];

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
  );
}
