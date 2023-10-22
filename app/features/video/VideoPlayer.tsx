"use client";
import { useEffect, useRef } from "react";
import Banner from "./Banner";

const VideoPlayer = () => {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    ref.current && ref.current.play();
  });

  return (
    <>
      <video ref={ref} width={1280} height={720} loop playsInline muted>
        <source src="/videos/volvo-video.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default VideoPlayer;
