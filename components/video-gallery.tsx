"use client";

import * as React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

type Video = {
  id: string;
  thumbnail: string;
};

interface VideoGalleryProps {
  videos: Video[];
}

export function VideoGallery({ videos }: VideoGalleryProps) {
  const [current, setCurrent] = React.useState(0);
  const [isMuted, setIsMuted] = React.useState(true);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    if (videos.length === 0) return;

    const iframe = iframeRef.current;
    if (!iframe) return;

    const currentVideo = videos[current];
    const embedUrl = `https://www.youtube.com/embed/${
      currentVideo.id
    }?autoplay=${isPlaying ? 1 : 0}&mute=${isMuted ? 1 : 0}&loop=1&playlist=${
      currentVideo.id
    }&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&playsinline=1&enablejsapi=1&origin=${
      window.location.origin
    }&disablekb=1&color=white&cc_load_policy=0&hl=en`;

    iframe.src = embedUrl;

    // Handle video end to loop back
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube.com") return;

      try {
        const data = JSON.parse(event.data);
        if (data.event === "onStateChange" && data.info === 0) {
          // Video ended, loop back to start
          setCurrent(0);
        }
      } catch (e) {
        // Ignore parsing errors
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [current, isPlaying, isMuted, videos]);

  const handleThumbnailInteraction = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
    setIsPlaying(true);
    if (isMobile) {
      setIsMuted(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleThumbnailInteraction(index);
    }
  };

  const handleControlKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const toggleMute = () => {
    console.log("Toggle mute clicked");
    setIsMuted((prev) => !prev);
  };

  const togglePlay = () => {
    console.log("Toggle play clicked");
    setIsPlaying((prev) => !prev);
  };

  if (videos.length === 0) {
    return (
      <section 
        className="relative flex justify-center items-center bg-black w-full h-[600px] overflow-hidden"
        role="region"
        aria-label="גלריית וידאו"
      >
        <p className="text-white" role="status" aria-live="polite">
          לא נמצאו סרטונים.
        </p>
      </section>
    );
  }

  const currentVideoTitle = `סרטון ${current + 1} מתוך ${videos.length} - קונטור הנדסה`;

  return (
    <section 
      className="relative bg-black w-full h-[600px] overflow-hidden"
      role="region"
      aria-label="גלריית וידאו - קונטור הנדסה"
      id="video-gallery"
    >
      {/* Background blur effect */}
      <div className="absolute inset-0 blur-2xl brightness-50 w-full h-full filter" aria-hidden="true">
        <img
          src={videos[current].thumbnail}
          alt=""
          className="w-full h-full object-cover"
          role="presentation"
        />
      </div>

      {/* Main video iframe */}
      <iframe
        ref={iframeRef}
        className="z-10 relative w-full h-full object-contain duration-500"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={currentVideoTitle}
        aria-label={currentVideoTitle}
        role="application"
      />

      {/* Live region for screen readers */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {`מציג כעת: ${currentVideoTitle}. הסרטון ${isPlaying ? 'מתנגן' : 'מושהה'} ${isMuted ? 'עם השתקה' : 'עם קול'}.`}
      </div>

      {/* Thumbnail gallery */}
      <div
        className="bottom-4 z-[9999] absolute inset-x-0 px-4"
        style={{ isolation: "isolate" }}
        role="region"
        aria-label="בקרי וידאו ותמונות מקדימות"
      >
        {/* Controls */}
        <div
          className="bottom-4 left-4 z-20 absolute flex items-center space-x-2"
          style={{ isolation: "isolate" }}
          role="group"
          aria-label="בקרי נגן וידאו"
        >
          <button
            onClick={togglePlay}
            onKeyDown={(e) => handleControlKeyDown(e, togglePlay)}
            className="z-10 relative bg-black/50 hover:bg-black/70 focus:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black shadow-lg p-3 rounded-full text-white transition-colors"
            aria-label={isPlaying ? "השהה סרטון" : "נגן סרטון"}
            type="button"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Play className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
          <button
            onClick={toggleMute}
            onKeyDown={(e) => handleControlKeyDown(e, toggleMute)}
            className="z-10 relative bg-black/50 hover:bg-black/70 focus:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black shadow-lg p-3 rounded-full text-white transition-colors"
            aria-label={isMuted ? "הפעל קול" : "השתק קול"}
            type="button"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Volume2 className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div 
          className="pb-2 w-full overflow-x-auto no-scrollbar"
          role="region"
          aria-label="תמונות מקדימות לסרטונים"
        >
          <div className="flex space-x-2 bg-black/20 backdrop-blur-sm mx-auto p-2 rounded-lg w-max">
            {videos.map((video, index) => (
              <button
                key={`thumb-${index}`}
                className={`w-24 h-14 rounded-md cursor-pointer overflow-hidden transition-all duration-300 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black ${
                  index === current
                    ? "ring-4 ring-white shadow-lg"
                    : "opacity-70 hover:opacity-100 focus:opacity-100"
                }`}
                onMouseEnter={() =>
                  !isMobile && handleThumbnailInteraction(index)
                }
                onClick={() => handleThumbnailInteraction(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-label={`נגן סרטון ${index + 1}`}
                aria-pressed={index === current}
                type="button"
              >
                <img
                  src={video.thumbnail}
                  alt={`תמונה מקדימה לסרטון ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
