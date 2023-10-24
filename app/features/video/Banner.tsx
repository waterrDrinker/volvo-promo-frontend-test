import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Banner = ({ handleStatus, handlePlayback }: { handleStatus: Function, handlePlayback: Function }) => {
	const ref = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const node = ref.current;
		const previousClassName = node?.className
		const newClassName = twMerge(node?.className, "translate-x-[0px]");
		if (ref.current) ref.current.className = newClassName

		return () => {
			previousClassName && (node.className = previousClassName)
		}
	})

  return (
    <div
			ref={ref}
      className='
			absolute top-[220px] right-0 flex flex-col items-center text-center w-[251px] h-[357px] bg-primary pt-5 px-[10px] transition-transform duration-300 translate-x-[251px]
			'
    >
      <h3 className="mb-5 font-medium leading-[18.75px]">
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО
        <br />
        МУЖЧИНЫ!
        <br />
        ПОДАРИТЕ ЕМУ ФУРУ! &#41;&#41;
      </h3>
      <Image
        src="/images/qr-code.png"
        className="mb-5"
        width={126}
        height={126}
        alt="qr-code"
      />
      <div className="w-[126px] mb-5">
        <p className="text-sm leading-[18.75px]">
          Сканируйте QR-код <br />
          или нажмите ОК
        </p>
      </div>
      <button
        onClick={() => {
					const node = ref.current
					node && (node.className = twMerge(node.className, 'translate-x-[251px]'))
					setTimeout(() => {
						handleStatus()
						handlePlayback()
					}, 350)
				}}
        className="w-[156px] h-[52px] bg-black text-primary py-[16.5px]"
      >
        OK
      </button>
    </div>
  );
};

export default Banner;
