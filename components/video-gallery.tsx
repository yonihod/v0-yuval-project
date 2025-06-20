"use client"

import * as React from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"

const videos = [
  "יובל חודפי - בדק בית 14.mp4",
  "יובל חודפי - בדק בית 13.mp4",
  "יובל חודפי - בדק בית 07 - אחרי תיקון.mp4",
  "יובל חודפי - בדק בית 05.mp4",
  "יובל חודפי - בדק בית 01.mp4",
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
  const isMobile = useIsMobile()

  React.useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    isPlaying ? videoElement.play() : videoElement.pause()

    const handleVideoEnded = () => {
      setCurrent(prev => (prev + 1) % videos.length)
    }

    videoElement.addEventListener("ended", handleVideoEnded)
    return () => {
      videoElement.removeEventListener("ended", handleVideoEnded)
    }
  }, [current, isPlaying])

  React.useEffect(() => {
    const nextVideoIndex = (current + 1) % videos.length
    const prevVideoIndex = (current - 1 + videos.length) % videos.length
    
    const preloadLinkNext = document.createElement('link')
    preloadLinkNext.rel = 'preload'
    preloadLinkNext.as = 'video'
    preloadLinkNext.href = `/videos/published/${encodeURIComponent(videos[nextVideoIndex])}`
    document.head.appendChild(preloadLinkNext)

    const preloadLinkPrev = document.createElement('link')
    preloadLinkPrev.rel = 'preload'
    preloadLinkPrev.as = 'video'
    preloadLinkPrev.href = `/videos/published/${encodeURIComponent(videos[prevVideoIndex])}`
    document.head.appendChild(preloadLinkPrev)

    return () => {
      document.head.removeChild(preloadLinkNext)
      document.head.removeChild(preloadLinkPrev)
    }
  }, [current])

  const handleThumbnailInteraction = (index: number) => {
    setCurrent(index)
    setIsPlaying(true)
  }

  const toggleMute = () => {
    setIsMuted(prev => !prev)
  }

  const togglePlay = () => {
    setIsPlaying(prev => !prev)
  }

  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-black">
      <video
        key={`bg-${current}`}
        className="absolute inset-0 w-full h-full object-cover filter blur-2xl brightness-50"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={`/videos/published/${encodeURIComponent(videos[current])}`}
          type="video/mp4"
        />
      </video>
      <video
        ref={videoRef}
        key={current}
        className="relative z-10 w-full h-full object-contain animate-in fade-in duration-500"
        autoPlay
        muted={isMuted}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src={`/videos/published/${encodeURIComponent(videos[current])}`}
          type="video/mp4"
        />
      </video>
      <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
        <button
          onClick={togglePlay}
          className="text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors"
        >
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
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
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 p-2 bg-black/20 rounded-lg backdrop-blur-sm z-20">
        {videos.map((video, index) => (
          <div
            key={`thumb-${index}`}
            className={`w-24 h-14 rounded-md cursor-pointer overflow-hidden transition-all duration-300 ${
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
                src={`/videos/published/${encodeURIComponent(video)}`}
                type="video/mp4"
              />
            </video>
          </div>
        ))}
      </div>
    </section>
  )
} 