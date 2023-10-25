import { useRef } from "react";
import CloseBtn from "./CloseBtn";
import QrCode from "./QrCode";
import PhonePanel from "./PhonePanel";

const ActivePage = ({ onIdle }: { onIdle: Function }) => {
	const closeBtnRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <PhonePanel btnCloseNode={closeBtnRef} />
			<CloseBtn onIdle={onIdle} ref={closeBtnRef} />
			<QrCode />
    </>
  );
};

export default ActivePage;
