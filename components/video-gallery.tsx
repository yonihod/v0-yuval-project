"use client"

import * as React from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"

const videos = [
  { name: "יובל חודפי - בדק בית 14.mp4" },
  { name: "יובל חודפי - בדק בית 13.mp4" },
  { name: "יובל חודפי - בדק בית 07 - אחרי תיקון.mp4" },
  { name: "יובל חודפי - בדק בית 05.mp4" },
  { name: "יובל חודפי - בדק בית 01.mp4" },
]

/*
// Future YouTube integration
const youtubeVideos = [
  {
    id: "your_youtube_id_1",
    thumbnail: "your_thumbnail_url_1"
  },
  {
    id: "your_youtube_id_2",
    thumbnail: "your_thumbnail_url_2"
  }
]
*/

export function VideoGallery() {
  const [current, setCurrent] = React.useState(0)
  const [isMuted, setIsMuted] = React.useState(true)
  const [isPlaying, setIsPlaying] = React.useState(true)
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const bgVideoRef = React.useRef<HTMLVideoElement>(null)
  const isMobile = useIsMobile()

  React.useEffect(() => {
    const videoElement = videoRef.current
    const bgVideoElement = bgVideoRef.current
    if (!videoElement || !bgVideoElement) return

    const newSrc = `/videos/published/${encodeURIComponent(videos[current].name)}`
    
    // Safely get the path, default to empty string if no src exists yet
    const currentPath = videoElement.src ? new URL(videoElement.src).pathname : ""
    
    if (currentPath !== newSrc) {
      videoElement.src = newSrc
      bgVideoElement.src = newSrc
      videoElement.load()
      bgVideoElement.load()
    }

    if (isPlaying) {
      videoElement.play().catch(() => {})
      bgVideoElement.play().catch(() => {})
    } else {
      videoElement.pause()
      bgVideoElement.pause()
    }

    videoElement.classList.remove("animate-in", "fade-in")
    void videoElement.offsetWidth
    videoElement.classList.add("animate-in", "fade-in")

    const handleVideoEnded = () => {
      setCurrent(prev => (prev + 1) % videos.length)
    }
    videoElement.addEventListener("ended", handleVideoEnded)
    return () => videoElement.removeEventListener("ended", handleVideoEnded)
  }, [current, isPlaying])

  React.useEffect(() => {
    const nextVideoIndex = (current + 1) % videos.length
    const prevVideoIndex = (current - 1 + videos.length) % videos.length

    const preloadLinkNext = document.createElement("link")
    preloadLinkNext.rel = "preload"
    preloadLinkNext.as = "video"
    preloadLinkNext.href = `/videos/published/${encodeURIComponent(videos[nextVideoIndex].name)}`
    document.head.appendChild(preloadLinkNext)

    const preloadLinkPrev = document.createElement("link")
    preloadLinkPrev.rel = "preload"
    preloadLinkPrev.as = "video"
    preloadLinkPrev.href = `/videos/published/${encodeURIComponent(videos[prevVideoIndex].name)}`
    document.head.appendChild(preloadLinkPrev)

    return () => {
      document.head.removeChild(preloadLinkNext)
      document.head.removeChild(preloadLinkPrev)
    }
  }, [current])

  const handleThumbnailInteraction = (index: number) => {
    if (current !== index) {
      setCurrent(index)
    }
    setIsPlaying(true)
    if (isMobile) {
      setIsMuted(false)
    }
  }

  const toggleMute = () => setIsMuted(prev => !prev)
  const togglePlay = () => setIsPlaying(prev => !prev)

  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-black">
      <video
        ref={bgVideoRef}
        className="absolute inset-0 w-full h-full object-cover filter blur-2xl brightness-50"
        loop
        muted
        playsInline
      />
      <video
        ref={videoRef}
        className="relative z-10 w-full h-full object-contain duration-500"
        muted={isMuted}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
        <button
          onClick={togglePlay}
          className="text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors"
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6" />
          )}
        </button>
        <button
          onClick={toggleMute}
          className="text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors"
        >
          {isMuted ? (
            <VolumeX className="h-6 w-6" />
          ) : (
            <Volume2 className="h-6 w-6" />
          )}
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-4 z-20 px-4">
        <div className="w-full overflow-x-auto pb-2 no-scrollbar">
            <div className="mx-auto flex w-max space-x-2 rounded-lg bg-black/20 p-2 backdrop-blur-sm">
            {videos.map((video, index) => (
              <div
                key={`thumb-${index}`}
                className={`w-24 h-14 rounded-md cursor-pointer overflow-hidden transition-all duration-300 flex-shrink-0 ${
                  index === current
                    ? "ring-4 ring-white shadow-lg"
                    : "opacity-70 hover:opacity-100"
                }`}
                onMouseEnter={() => !isMobile && handleThumbnailInteraction(index)}
                onClick={() => handleThumbnailInteraction(index)}
              >
                <video
                  className="w-full h-full object-cover"
                  preload="metadata"
                  muted
                  playsInline
                >
                  <source
                    src={`/videos/published/${encodeURIComponent(video.name)}`}
                    type="video/mp4"
                  />
                </video>
              </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  )
} 