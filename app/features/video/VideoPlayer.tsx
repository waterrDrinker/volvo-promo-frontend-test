"use client";
import { useEffect, useRef } from "react";

const VideoPlayer = ({ playback }: { playback: Boolean }) => {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
		!playback ? ref.current && ref.current.pause() :
    ref.current && ref.current.play();
  }, [playback]);

  return (
    <>
      <video ref={ref} width={1280} height={720} loop playsInline muted>
        <source src="/videos/volvo-video.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default VideoPlayer;
