import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const PhoneInput = () => {
	const [checked, setChecked] = useState(false)
	const panelRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		let node = panelRef.current;
		let previousClassName: string;
		node && (previousClassName = node.className);
		const newClassName = twMerge(node?.className, "translate-x-[0px]");
		node && (node.className = newClassName)

		return () => {
			node && (node.className = previousClassName)
		}
	})

	const handleChange = () => {
		setChecked(prev => !prev)
	}
	
  return (
    <>
      <div
			ref={panelRef}
		 className={`
			w-[380px] pt-[72px] px-[48px] h-full bg-primary absolute top-0 left-0 transition-transform duration-300
			-translate-x-[380px]
			`
			}>
        <div
          id="wrapper"
          className="w-[284px] flex flex-col items-center text-center"
        >
          <h3 className="text-[26px] leading-[30.47px] mb-[13px]">
            Введите ваш номер мобильного телефона
          </h3>
          <h1 className="text-[32px] leading-[37.5px] font-bold mb-[13px]">
            +7(___)___-__-__
          </h1>
          <p className="text-sm leading-[16.41px] mb-[13px]">
            и с Вами свяжется наш менеждер для дальнейшей консультации
          </p>
          <div
            id="pad"
            className="w-[284px] grid grid-cols-3 gap-y-[10px] gap-x-[10px] py-5 font-medium mb-[13px]"
          >
            <button className="w-[88px] h-[52px] text-lg leading-[18.75px] border-2 border-black border-solid">
              1
            </button>
            <button className="w-[88px] h-[52px] text-lg leading-[18.75px] border-2 border-black border-solid">
              2
            </button>
            <button className="w-[88px] h-[52px] text-lg leading-[18.75px] border-2 border-black border-solid">
              3
            </button>
            <button className="w-[88px] h-[52px] text-lg leading-[18.75px] border-2 border-black border-solid">
              4
            </button>
            <button className="w-[88px] h-[52px] text-lg leading-[18.75px] border-2 border-black border-solid">
              5
            </button>
            <button className="w-[88px] h-[52px] text-lg leading-[18.75px] border-2 border-black border-solid">
              6
            </button>
            <button className="w-[88px] h-[52px] text-lg leading-[18.75px] border-2 border-black border-solid">
              7
            </button>
            <button className="w-[88px] h-[52px] text-lg leading-[18.75px] border-2 border-black border-solid">
              8
            </button>
            <button className="w-[88px] h-[52px] text-lg leading-[18.75px] border-2 border-black border-solid">
              9
            </button>
            <button className="h-[52px] text-lg leading-[18.75px] border-2 border-black border-solid col-span-2">
              СТЕРЕТЬ
            </button>
            <button className="w-[88px] h-[52px] text-lg leading-[18.75px] border-2 border-black border-solid">
              0
            </button>
          </div>
          <div className="flex mb-[13px]">
            <div className="py-1.5 px-2.5 mr-2.5 h-[52px] relative">
              <input
                checked={checked}
                onChange={handleChange}
                id="GDPR"
                name="GDPR"
                type="checkbox"
                className="appearance-none w-10 h-10 border-2 border-black border-solid relative peer"
              />
              <Image
                src="/check.svg"
                width={23.98}
                height={16.63}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      hidden peer-checked:block pointer-events-none"
                alt="check-icon"
              />
            </div>
            <label
              className="flex items-center text-[#565656] text-left align-middle text-sm leading-[16.41px]"
              htmlFor="GDPR"
            >
              Согласие на обработку персональных данных
            </label>
          </div>
          <button 					
					className="h-[52px] w-full uppercase font-medium leading-[18.75px] text-[#4E4E4E] border border-[#4E4E4E] border-solid">
            Подтвердить номер
          </button>
        </div>
      </div>
    </>
  );
};

export default PhoneInput;
