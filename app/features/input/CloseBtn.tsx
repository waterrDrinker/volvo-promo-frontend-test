import { forwardRef } from "react"

interface Props {
	onIdle: Function,
}

type Ref = HTMLButtonElement;

const CloseBtn = forwardRef<Ref, Props>(function CloseBtn(props, ref) {
	const { onIdle } = props
	
	return (
		<button
			id='closeBtn'
		  ref={ref}
			onClick={() => {
				onIdle()
			}}
		 className="group flex justify-center items-center absolute top-0 right-0 w-[88px] h-[52px] border-2 border-black border-solid bg-white -translate-x-5 translate-y-5 cursor-pointer focus:bg-black">
			<div className="w-[28.68px] h-[3px] bg-black rotate-45 before:block before:content-[''] before:w-[28.68px] before:h-[3px] before:bg-black before:absolute before:rotate-90 group-focus:bg-white group-focus:before:bg-white"></div>
		</button>
	)
}
)

export default CloseBtn