import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

type Statuses = 'typing' | 'pending' | 'failed' | 'submited';

const PhonePanel = ({
  btnCloseNode,
}: {
  btnCloseNode: { current: HTMLButtonElement | null };
}) => {
  const [phoneInput, setPhoneInput] = useState<Array<string>>([]);
  const [checked, setChecked] = useState<boolean>(false);
  const [status, setStatus] = useState<Statuses>('typing');
  const panelRef = useRef<HTMLDivElement>(null);
  const btnsNavRef = useRef<
    Array<HTMLButtonElement | HTMLInputElement | HTMLElement>
  >([]);

  useEffect(() => {
    const node = panelRef.current;
    let previousClassName: string;
    node && (previousClassName = node.className);
    const newClassName = twMerge(node?.className, "translate-x-[0px]");
    if (node) setTimeout(() => (node.className = newClassName), 0);
    return () => {
      node && (node.className = previousClassName);
    };
  }, []);

  useEffect(() => {
    const handlePhoneInput = (e: KeyboardEvent) => {
      const key = e.key;
      const navBtns: string[] = [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "Enter",
      ];
      if (navBtns.includes(key)) {
        const focusedElement = document.activeElement as HTMLElement;
        const lastBtn = btnsNavRef.current[btnsNavRef.current.length - 1] as HTMLButtonElement;
       
				if (
          focusedElement &&
          !btnsNavRef.current.includes(focusedElement) &&
          key === "ArrowDown"
        ) {
          // if there's no focus yet
          btnsNavRef.current[0].focus();
        }

        if (focusedElement && focusedElement.id === "GDPR" && key === "Enter")
          setChecked((prev) => !prev);

        if (
          focusedElement &&
          ["1", "2", "3", "4", "5", "6", "7"].includes(focusedElement.id) &&
          key === "ArrowDown"
        ) {
          const elemToFocus = btnsNavRef.current.indexOf(focusedElement) + 3;
          btnsNavRef.current[elemToFocus].focus();
        }
        if (
          focusedElement &&
          ["8", "9"].includes(focusedElement.id) &&
          key === "ArrowDown"
        ) {
          const elemToFocus = btnsNavRef.current.indexOf(focusedElement) + 2;
          btnsNavRef.current[elemToFocus].focus();
        }
        if (
          focusedElement &&
          ["0", "BACKSPACE"].includes(focusedElement.id) &&
          key === "ArrowDown"
        ) {
          const elemToFocus = btnsNavRef.current.find(
            (elem) => elem.id === "GDPR"
          );
          elemToFocus && elemToFocus.focus();
        }
        if (
          focusedElement &&
          focusedElement.id === "GDPR" &&
          key === "ArrowDown" &&
          !lastBtn.disabled
        ) {
          lastBtn.focus();
        }
        if (
          focusedElement &&
          focusedElement.id === "confirm" &&
          key === "ArrowUp" &&
          !lastBtn.disabled
        ) {
          btnsNavRef.current[btnsNavRef.current.length - 2].focus();
        }
        if (
          focusedElement &&
          focusedElement.id === "GDPR" &&
          key === "ArrowUp"
        ) {
          const elemToFocus = btnsNavRef.current.find(
            (elem) => elem.id === "0"
          );
          elemToFocus && elemToFocus.focus();
        }
        if (
          focusedElement &&
          ["BACKSPACE", "0"].includes(focusedElement.id) &&
          key === "ArrowUp"
        ) {
          const elemToFocus = btnsNavRef.current.indexOf(focusedElement) - 2;
          btnsNavRef.current[elemToFocus].focus();
        }
        if (
          focusedElement &&
          ["4", "5", "6", "7", "8", "9"].includes(focusedElement.id) &&
          key === "ArrowUp"
        ) {
          const elemToFocus = btnsNavRef.current.indexOf(focusedElement) - 3;
          btnsNavRef.current[elemToFocus].focus();
        }
        if (
          focusedElement &&
          ["3", "6", "9", "0", "GDPR", "confirm"].includes(focusedElement.id) &&
          key === "ArrowRight"
        ) {
          btnCloseNode.current && btnCloseNode.current.focus();
        }
        if (
          focusedElement &&
          focusedElement.id === "closeBtn" &&
          key === "ArrowLeft"
        ) {
          const elemToFocus = btnsNavRef.current.find(
            (elem) => elem.id === "3"
          );
          elemToFocus && elemToFocus.focus();
        }
        if (
          focusedElement &&
          ["1", "2", "4", "5", "7", "8", "BACKSPACE"].includes(
            focusedElement.id
          ) &&
          key === "ArrowRight"
        ) {
          const elemToFocus = btnsNavRef.current.indexOf(focusedElement) + 1;
          btnsNavRef.current[elemToFocus].focus();
        }
        if (
          focusedElement &&
          ["2", "3", "5", "6", "8", "9", "0"].includes(focusedElement.id) &&
          key === "ArrowLeft"
        ) {
          const elemToFocus = btnsNavRef.current.indexOf(focusedElement) - 1;
          btnsNavRef.current[elemToFocus].focus();
        }
      }

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
      window.removeEventListener("keydown", handlePhoneInput);
    };
  }, [phoneInput, btnCloseNode]);

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
	
	const handleSubmit = () => {
		if (checked && phoneInput.length === 10) {
			// const response = await fetch(`
			//   http://apilayer.net/api/validate?access_key=233aa9415b6ec3de251f464e8bed3dea&number=${phoneInput.join('')}&country_code=RU`)
			//   const validation = await response.json()
				// validation.valid ? setStatus('submited') : setStatus('failed')
				setStatus('submited')
		};
	};

  const handleClick = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLButtonElement;
    if (target.value === "BACKSPACE") {
			setStatus('typing')
      setPhoneInput((prev) => [...phoneInput.slice(0, phoneInput.length - 1)]);
      return;
    }
    if (phoneInput.length > 9) return;
    target && setPhoneInput((prev) => [...phoneInput, target.value]);
  };

  if (status === 'submited' && btnCloseNode.current) btnCloseNode.current.focus();

  return (
    <>
      <div
        ref={panelRef}
        className={`
			w-[380px] pt-[72px] px-[48px] h-full bg-primary absolute top-0 left-0 transition-transform duration-300
			-translate-x-[380px]
			`}
      >
        {status === 'submited' ? (
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
            <p className={`text-[32px] leading-[37.5px] font-bold mb-[13px] whitespace-nowrap ${status === 'failed' && 'text-[#EA0000]'}`}>
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
                  ref={(node) => {
                    node
                      ? btnsNavRef.current.push(node)
                      : btnsNavRef.current.filter((elem) => elem !== node);
                  }}
                  onClick={(e: React.SyntheticEvent) => handleClick(e)}
                  value={btn === "СТЕРЕТЬ" ? "BACKSPACE" : btn}
                  key={index}
                  id={btn === "СТЕРЕТЬ" ? "BACKSPACE" : btn}
                  className={`h-[52px] text-lg leading-[18.75px] border-2 border-black border-solid 
										${btn === "СТЕРЕТЬ" && "col-span-2"}
										focus:bg-black focus:text-white
									`}
                >
                  {btn}
                </button>
              ))}
            </div>

						{status !== 'failed' ? (
              <div className="flex mb-[13px]">
                <div className="py-1.5 px-2.5 mr-2.5 h-[52px] relative">
                  <input
                    ref={(node) => {
                      node
                        ? btnsNavRef.current.push(node)
                        : btnsNavRef.current.filter((elem) => elem !== node);
                    }}
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
						) : (
							<div className="h-[52px]  font-medium uppercase leading-[18.75px] text-[#EA0000]">Неверно введён номер</div>
						)
            }
            <button
              id="confirm"
              ref={(node) => {
                node
                  ? btnsNavRef.current.push(node)
                  : btnsNavRef.current.filter((elem) => elem !== node);
              }}
              disabled={!(checked && phoneInput.length === 10)}
              onClick={() => handleSubmit()}
              className="h-[52px] w-full uppercase font-medium leading-[18.75px] text-[#4E4E4E] border border-[#4E4E4E] border-solid focus:bg-black focus:text-white"
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
