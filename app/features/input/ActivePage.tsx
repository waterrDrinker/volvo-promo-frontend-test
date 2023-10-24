import CloseBtn from "./CloseBtn";
import QrCode from "./QrCode";
import PhonePanel from "./PhonePanel";

const ActivePage = ({ handleStatus, handlePlayback }: { handleStatus: Function, handlePlayback: Function }) => {
  return (
    <>
      <PhonePanel />
			<CloseBtn handleStatus={handleStatus} handlePlayback={handlePlayback} />
			<QrCode />
    </>
  );
};

export default ActivePage;
