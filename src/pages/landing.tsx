import { useState } from "react";
import { WaitlistModal } from "../components";

const Landing = () => {
  const [isWaitlist, showWaitlist] = useState(false);

  return (
    <div className="flex flex-col w-screen h-screen px-20 max-sm:px-5">
      <div className="absolute flex flex-col top-44 -left-36 gap-36 -rotate-12">
        <div className="w-[20vw] h-[1px] border border-dashed border-black blur-[6px]"></div>
        <div className="w-[35vw] h-[1px] border border-dashed border-black blur-[6px]"></div>
        <div className="w-[30vw] h-[1px] border border-dashed border-black blur-[6px]"></div>
        <div className="w-[15vw] h-[1px] border border-dashed border-black blur-[6px]"></div>
      </div>

      <div className="absolute flex flex-col bottom-44 -right-36 gap-36 -rotate-[192deg]">
        <div className="w-[20vw] h-[1px] border border-dashed border-black blur-[6px]"></div>
        <div className="w-[35vw] h-[1px] border border-dashed border-black blur-[6px]"></div>
        <div className="w-[30vw] h-[1px] border border-dashed border-black blur-[6px]"></div>
        <div className="w-[15vw] h-[1px] border border-dashed border-black blur-[6px]"></div>
      </div>

      <div className="flex flex-col z-10 max-md:items-center">
        <div className="flex items-center justify-between w-full h-20">
          <a href="/" className="cursor-pointer">
            <span className="font-black text-xl tracking-tighter">
              StoxSight
            </span>
          </a>

          <div
            className="flex items-center justify-center w-fit bg-[#5386E4] px-5 py-2 rounded-full cursor-pointer hover:scale-105 hover:drop-shadow-lg transition-all ease-linear"
            onClick={() => {
              showWaitlist(true);
            }}
          >
            <span className="font-medium text-sm text-white">
              Join waitlist
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between py-40 max-md:flex-col max-md:gap-[40px] max-md:items-start max-md:py-20 max-sm:gap-0">
          <div className="flex flex-col gap-8 max-sm:gap-4 max-md:text-center max-md:items-center max-sm:px-20">
            <span className="font-black text-5xl max-sm:text-4xl w-96 max-md:w-fit tracking-tight">
              Follow multiple trusted traders all in one place
            </span>

            <span className="font-medium w-72 max-md:w-fit tracking-tight leading-none">
              See real-time trades of popular options by multiple well-known
              traders.
            </span>

            <div className="flex items-center gap-2">
              <div
                className="flex items-center justify-center w-fit bg-[#5386E4] px-5 py-2 rounded-full cursor-pointer hover:scale-105 hover:drop-shadow-lg transition-all ease-linear"
                onClick={() => {
                  showWaitlist(true);
                }}
              >
                <span className="font-medium text-sm text-white">
                  Join the waitlist, it's free.
                </span>
              </div>
            </div>
          </div>

          <div className="relative max-sm:scale-75 max-lg:max-w-[602px] max-md:w-[978.5px] md:min-w-[978.5px] h-[506px] px-[3px] py-[3px] rounded-lg shadow-xl drop-shadow-sm overflow-hidden">
            <img
              className="absolute min-w-[978.5px] w-auto h-full max-h-[500px] rounded-md z-[2] overflow-hidden blur-[2px]"
              src="/showcase.png"
            />

            <div className="w-full h-full bg-[#5386E4] z-[1] blur-[12px] gradient"></div>
          </div>
        </div>
      </div>

      {isWaitlist && <WaitlistModal close={() => showWaitlist(false)} />}
    </div>
  );
};

export default Landing;
