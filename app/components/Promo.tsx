"use client";
import { useState } from "react";
import VideoPlayer from "../features/video/VideoPlayer";
import ActivePage from "../features/input/ActivePage";
import Banner from "../features/video/Banner";

const Promo = () => {
  const [isIdle, setIsIdle] = useState(true);
  const [playback, setPlayback] = useState(true);

  const handleStatus = (): void => {
    setIsIdle((prev) => !prev);
  };

  const handlePlayback = () => {
    setPlayback((prev) => !prev);
  };

  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden">
      <VideoPlayer playback={playback} />
      {isIdle ? (
        <Banner handleStatus={handleStatus} handlePlayback={handlePlayback} />
      ) : (
        <ActivePage
          handleStatus={handleStatus}
          handlePlayback={handlePlayback}
        />
      )}
    </div>
  );
};

export default Promo;
