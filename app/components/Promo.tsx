"use client";
import { useState } from "react";
import { useIdleTimer } from "react-idle-timer";

import VideoPlayer from "../features/video/VideoPlayer";
import ActivePage from "../features/input/ActivePage";
import Banner from "../features/video/Banner";

const Promo = () => {
  const [state, setState] = useState<string>('Idle');

	const onIdle = () => {
		setState('Idle')
	}

	const onActive = () => {
		setState('Active')
	}

	useIdleTimer({
    onIdle,
    timeout: 10_000,
    throttle: 500
  })


  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden">
      <VideoPlayer state={state} />
      {state === 'Active' ? (
				<ActivePage
				onIdle={onIdle}
			/>
      ) : (
        <Banner onActive={onActive} />
      )}
    </div>
  );
};

export default Promo;
