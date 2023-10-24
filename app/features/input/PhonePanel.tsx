import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const PhonePanel = () => {
  const [phoneInput, setPhoneInput] = useState<Array<string>>([]);
  const [checked, setChecked] = useState(false);
  const [requestAccept, setRequestAccept] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let node = panelRef.current;
    let previousClassName: string;
    node && (previousClassName = node.className);
    const newClassName = twMerge(node?.className, "translate-x-[0px]");
    node && (node.className = newClassName);

    const handlePhoneInput = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === "Backspace") {
        setPhoneInput((prev) => [
          ...phoneInput.slice(0, phoneInput.length - 1),
        ]);
        return;
      }
      if (phoneInput.length > 9) return;
      if (key >= "0" && key <= "9")
        setPhoneInput((prev) => [...phoneInput, key]);
    };

    window.addEventListener("keydown", handlePhoneInput);

    return () => {
      node && (node.className = previousClassName);
      window.removeEventListener("keydown", handlePhoneInput);
    };
  });

  const phoneNumber: (string | number)[] = new Array(10)
    .fill("_")
    .map((num, index) => {
      if (phoneInput[index]) return phoneInput[index];
      return num;
    });

  const renderNumber: string = [
    "+7(",
    phoneNumber.slice(0, 3).join(""),
    ")",
    phoneNumber.slice(3, 6).join(""),
    "-",
    phoneNumber.slice(6, 8).join(""),
    "-",
    phoneNumber.slice(8).join(""),
  ].join("");

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleClick = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLButtonElement;
    if (target.value === "BACKSPACE") {
      setPhoneInput((prev) => [...phoneInput.slice(0, phoneInput.length - 1)]);
      return;
    }
    if (phoneInput.length > 9) return;
    target && setPhoneInput((prev) => [...phoneInput, target.value]);
  };

  const handleConfirm = () => {
    if (checked && phoneInput.length === 10) setRequestAccept((prev) => !prev);
  };

  return (
    <>
      <div
        ref={panelRef}
        className={`
			w-[380px] pt-[72px] px-[48px] h-full bg-primary absolute top-0 left-0 transition-transform duration-300
			-translate-x-[380px]
			`}
      >
        {requestAccept ? (
          <div className="w-[284px] text-center pt-[189px]">
						<h1 className="text-[32px] leading-[37.5px] font-bold mb-[15px]">
							ЗАЯВКА <br />
						  ПРИНЯТА
						</h1>
						<p className="text-sm leading-[16.41px]">
							Держите телефон под рукой. <br /> 
							Скоро с Вами свяжется наш менеджер. 
						</p>
					</div>
        ) : (
          <div
            id="wrapper"
            className="w-[284px] flex flex-col items-center text-center"
          >
            <h3 className="text-[26px] leading-[30.47px] mb-[13px]">
              Введите ваш номер мобильного телефона
            </h3>
            <p className="text-[32px] leading-[37.5px] font-bold mb-[13px] whitespace-nowrap">
              {renderNumber}
            </p>
            <p className="text-sm leading-[16.41px] mb-[13px]">
              и с Вами свяжется наш менеждер для дальнейшей консультации
            </p>
            <div
              id="pad"
              className="w-[284px] grid grid-cols-3 gap-y-[10px] gap-x-[10px] py-5 font-medium mb-[13px]"
            >
              {[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "СТЕРЕТЬ",
                "0",
              ].map((btn, index) => (
                <button
                  onClick={(e: React.SyntheticEvent) => handleClick(e)}
                  value={btn !== "СТЕРЕТЬ" ? btn : "BACKSPACE"}
                  key={index}
                  className={`h-[52px] text-lg leading-[18.75px] border-2 border-black border-solid 
										${btn === "СТЕРЕТЬ" && "col-span-2"}
										focus:bg-black focus:text-white
									`}
                >
                  {btn}
                </button>
              ))}
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
              onClick={() => handleConfirm()}
              className="h-[52px] w-full uppercase font-medium leading-[18.75px] text-[#4E4E4E] border border-[#4E4E4E] border-solid"
            >
              Подтвердить номер
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default PhonePanel;
