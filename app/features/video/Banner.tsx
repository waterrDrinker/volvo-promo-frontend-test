import { useEffect, useState } from "react";
import Image from "next/image";

const Banner = () => {
	const [isBannerVisible, setIsBannerVisible] = useState(false)
	
	useEffect(() => {
		setTimeout(() => setIsBannerVisible(prev => prev = true), 5000)
	})
	
  return (
    <div 
		  className={`
			absolute top-[220px] right-0 flex flex-col items-center text-center w-[251px] h-[357px] bg-primary pt-5 px-[10px] transition-transform duration-300
			${isBannerVisible ? 'translate-x-[0px]' : 'translate-x-[251px]'}
			`}>
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
			<button className="w-[156px] h-[52px] bg-black text-primary py-[16.5px]">OK</button>
    </div>
  );
};

export default Banner;
