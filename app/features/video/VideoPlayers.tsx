"use client";
import { useEffect, useRef } from "react";
import Banner from "./Banner";

const VideoPlayer = () => {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    ref.current && ref.current.play();
  });

  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden">
      <video ref={ref} width={1280} height={720} loop playsInline muted>
        <source src="/videos/volvo-video.mp4" type="video/mp4" />
      </video>
      <Banner />
    </div>
  );
};

export default VideoPlayer;
