import { useState } from "react";
import confetti from "canvas-confetti";

interface WaitlistModalProps {
  close: () => void;
}

const WaitlistModal = ({ close }: WaitlistModalProps) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    discord: "",
  });
  const isReady =
    userData.name !== "" && userData.email !== "" && userData.discord !== "";

  const [buttonText, setButtonText] = useState("Join the waitlist");
  const [isJoined, setJoined] = useState(false);

  const joinWaitlist = async () => {
    if (buttonText == "Finish") {
      close();
      return;
    }
    if (!isReady || buttonText == "Joined") return;

    // const response = await (
    //   await fetch("https://api.stoxsight.com/api/waitlist", {
    //     method: "POST",
    //     body: JSON.stringify(userData),
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     mode: "cors",
    //   })
    // ).json();

    // if (!response.status || response.status !== "ok") {
    //   return;
    // }

    setJoined(true);
    setButtonText("Finish");

    confetti({
      particleCount: 150,
      spread: 750,
    });
  };

  return (
    <div
      className="absolute flex items-center justify-center w-screen h-screen top-0 left-0 bg-black/[.2] backdrop-blur-sm z-10 transition-all ease-linear fadeIn"
      onClick={close}
    >
      <div
        className={`flex flex-col w-[336px] bg-white px-6 py-6 gap-10 rounded-md drop-shadow-md transition-all ease-linear ${
          isJoined ? "h-[166px]" : "h-[336px]"
        }`}
        onClick={(element: React.MouseEvent<HTMLDivElement>) => {
          element.stopPropagation();
        }}
      >
        <div className="flex flex-col">
          <span className="font-bold text-2xl tracking-tighter leading-none">
            {isJoined ? "You're now waitlisted," : "Enter your information"}
          </span>

          <span className="font-medium text-gray-400 text-lg tracking-tighter leading-none">
            {isJoined
              ? "we hope to see you soon!"
              : "and get notified when we launch."}
          </span>
        </div>

        {!isJoined && (
          <div className="flex flex-col gap-2">
            <input
              placeholder="Tell us your name"
              className="font-medium text-sm border border-slate-300 rounded-md w-72 px-2 py-2 placeholder:text-gray-400 focus:border-[#5386E4] transition-all ease-linear"
              onChange={(element: React.ChangeEvent<HTMLInputElement>) => {
                setUserData({ ...userData, name: element.target.value });
              }}
            />

            <input
              placeholder="Enter your email address"
              className="font-medium text-sm border border-slate-300 rounded-md w-72 px-2 py-2 placeholder:text-gray-400 focus:border-[#5386E4] transition-all ease-linear"
              onChange={(element: React.ChangeEvent<HTMLInputElement>) => {
                setUserData({ ...userData, email: element.target.value });
              }}
            />

            <input
              placeholder="Enter your discord username"
              className="font-medium text-sm border border-slate-300 rounded-md w-72 px-2 py-2 placeholder:text-gray-400 focus:border-[#5386E4] transition-all ease-linear"
              onChange={(element: React.ChangeEvent<HTMLInputElement>) => {
                setUserData({ ...userData, discord: element.target.value });
              }}
            />
          </div>
        )}

        <div
          className="relative flex items-center justify-center w-full bg-gray-400 px-5 py-2 rounded-md cursor-pointer overflow-hidden"
          onClick={joinWaitlist}
        >
          <span className="font-medium text-sm text-white z-[1]">
            {buttonText}
          </span>

          <div
            className={`absolute w-full h-full bg-[#5386E4] rounded-md transition-all ease-linear ${
              isReady ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;
