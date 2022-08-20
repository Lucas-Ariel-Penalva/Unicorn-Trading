import { apple, cryptoflowers, google } from "../assets";
import { toast } from "react-toastify";

const Download = () => {
  const storesClicked = () => {
    toast("I bet you wish this app existed 🦄", { theme: "dark" });
  };

  return (
    <section id="download" className="flex flex-col-reverse items-center px-6 py-6 sm:py-16 md:px-16 lg:flex-row" data-aos="fade-right">
      <div className="mr-0 mt-10 flex flex-1 items-center justify-center md:mr-10 md:mt-0">
        <img src={cryptoflowers} alt="billing" className=" relative z-[5] mt-12 h-[100%] w-[100%] max-w-[500px] lg:mt-0 lg:max-w-none" />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center ">
        <h2 className="text-center font-poppins text-[40px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px] sm:text-left">
          If you aren't here <br /> you are <span className="text-gradient inline-block scale-125 animate-bounce">Missing Out</span>
        </h2>

        <div className="mt-5 max-w-[470px] font-poppins text-[19px] font-normal leading-[30.8px] text-white opacity-90">
          <p>Our users have amazing opportunities to get rich beyond their wildest dreams.</p>
          <br />
          <p>
            If you don't download this app, you are like those <span className="text-[22px] font-bold text-rose-500 opacity-100">Losers</span> that knew about Bitcoin early and
            didn't buy.
          </p>
        </div>

        <div className="mt-10 flex flex-row flex-wrap sm:mt-12 lg:mt-8">
          <button onClick={storesClicked}>
            <img src={apple} alt="google_play" className="mr-5 h-[42.05px] w-[128.86px] cursor-pointer object-contain transition-all duration-300 hover:scale-125" />
          </button>
          <button onClick={storesClicked}>
            <img src={google} alt="google_play" className="h-[43.08px] w-[144.17px] cursor-pointer object-contain transition-all duration-300 hover:scale-125" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Download;
