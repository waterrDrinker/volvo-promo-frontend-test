const CloseBtn = ({ handleStatus, handlePlayback }: { handleStatus: Function, handlePlayback: Function }) => {
	return (
		<button
			onClick={() => {
				handleStatus()
				handlePlayback()
			}}
		 className="flex justify-center items-center absolute top-0 right-0 w-[88px] h-[52px] border-2 border-black border-solid bg-white -translate-x-5 translate-y-5 cursor-pointer">
			<div className="w-[28.68px] h-[3px] bg-black rotate-45 before:block before:content-[''] before:w-[28.68px] before:h-[3px] before:bg-black before:absolute before:rotate-90"></div>
		</button>
	)
}

export default CloseBtn