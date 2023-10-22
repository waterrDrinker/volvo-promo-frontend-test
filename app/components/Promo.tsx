'use client'
import { useState } from "react"
import Banner from "../features/video/Banner"
import VideoPlayer from "../features/video/VideoPlayer"
import ActivePage from "../features/input/ActivePage";

type Status = 'idle' | 'input';

const Promo = () => {
	const [status, setStatus] = useState<Status>('idle')

	const handleStatus = (status: Status): void => {
		setStatus(status)
	}

	return (
		<div className="w-[1280px] h-[720px] relative overflow-hidden">
			<VideoPlayer />
			{/* {status === 'idle' && <Banner handleStatus={handleStatus} />} */}
			<ActivePage />
		</div>
	)
}

export default Promo