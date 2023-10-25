"use client";
import { useEffect, useRef } from "react";

const VideoPlayer = ({ state }: { state: string }) => {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
     state !== 'Active'
      ? ref.current && ref.current.play()
      : ref.current && ref.current.pause();
  }, [state]);

  return (
    <>
      <video ref={ref} width={1280} height={720} loop playsInline muted>
        <source src="/videos/volvo-video.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default VideoPlayer;
