import CloseBtn from "./CloseBtn";
import QrCode from "./QrCode";
import PhoneInput from "./PhoneInput";

const ActivePage = ({ handleStatus, handlePlayback }: { handleStatus: Function, handlePlayback: Function }) => {
  return (
    <>
      <PhoneInput />
			<CloseBtn handleStatus={handleStatus} handlePlayback={handlePlayback} />
			<QrCode />
    </>
  );
};

export default ActivePage;
