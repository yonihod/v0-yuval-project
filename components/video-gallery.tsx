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
      <section className="relative flex justify-center items-center bg-black w-full h-[600px] overflow-hidden">
        <p className="text-white">No videos found.</p>
      </section>
    );
  }

  return (
    <section className="relative bg-black w-full h-[600px] overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 blur-2xl brightness-50 w-full h-full filter">
        <img
          src={videos[current].thumbnail}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main video iframe */}
      <iframe
        ref={iframeRef}
        className="z-10 relative w-full h-full object-contain duration-500"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {/* Thumbnail gallery */}
      <div
        className="bottom-4 z-[9999] absolute inset-x-0 px-4"
        style={{ isolation: "isolate" }}
      >
        {/* Controls */}
        <div
          className="bottom-4 left-4 z-20 absolute flex items-center space-x-2"
          style={{ isolation: "isolate" }}
        >
          <button
            onClick={togglePlay}
            className="z-10 relative bg-black/50 hover:bg-black/70 shadow-lg p-3 rounded-full text-white transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="z-10 relative bg-black/50 hover:bg-black/70 shadow-lg p-3 rounded-full text-white transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </button>
        </div>
        <div className="pb-2 w-full overflow-x-auto no-scrollbar">
          <div className="flex space-x-2 bg-black/20 backdrop-blur-sm mx-auto p-2 rounded-lg w-max">
            {videos.map((video, index) => (
              <div
                key={`thumb-${index}`}
                className={`w-24 h-14 rounded-md cursor-pointer overflow-hidden transition-all duration-300 flex-shrink-0 ${
                  index === current
                    ? "ring-4 ring-white shadow-lg"
                    : "opacity-70 hover:opacity-100"
                }`}
                onMouseEnter={() =>
                  !isMobile && handleThumbnailInteraction(index)
                }
                onClick={() => handleThumbnailInteraction(index)}
              >
                <img
                  src={video.thumbnail}
                  alt={`Video ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
