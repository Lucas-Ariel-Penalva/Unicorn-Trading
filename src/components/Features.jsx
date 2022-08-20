import { features } from "../constants";
import Button from "./Button";
import { toast } from "react-toastify";
import { useState } from "react";

const Features = () => {
  const [joinAttempts, setJoinAttempts] = useState(0);
  const messages = ["Actually, you aren't allowed!", "Sorry! You aren't that cool 🦄", "I said no.", "Ok, I will disable this."];

  const join = () => {
    toast(joinAttempts < messages.length ? messages[joinAttempts] : "Are you a hacker?", { theme: "dark" });
    setJoinAttempts(joinAttempts + 1);
  };

  return (
    <section id="features" className="flex flex-col items-center px-6 py-6 sm:py-16 md:px-16 lg:flex-row">
      {/*Description */}
      <div className="flex flex-1 flex-col justify-center px-6 text-center md:px-16 lg:text-left" data-aos="fade-right">
        <h2 className="w-full font-poppins text-[40px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px]">
          Introducing <br /> <span className="text-gradient font-bold">Mystery Stocks</span>
        </h2>

        <div className="mt-5  max-w-[470px] font-poppins text-[18px] font-normal leading-[30.8px] text-white opacity-90">
          <p className="text-[23px]">
            Use Crypto to buy stocks tied to... well, <span className="font-semibold text-rose-600"> it's a Mystery!</span>
          </p>
          <br />
          <p className="text-[21px] font-semibold text-rose-500 opacity-100">You can see data sets and line charts related to each stock.</p>
          <br />
          <p>
            Think, analyze, <span className="font-semibold text-rose-600">go on a tresure hunt</span> to figure out what the stock is about. Or simply gamble like crazy!
          </p>
        </div>

        <Button works={joinAttempts < 4 ? true : false} func={join} styles={`mt-10 max-w-[470px] `} />
      </div>
      {/*Cards */}
      <div className="mt-16 flex flex-1 flex-col px-6 ss:px-16 sm:max-w-[600px] md:ml-6 lg:max-w-[700px]" data-aos="fade-left">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row items-center rounded-[20px] p-6 ${
      index === 0 ? "mt-0" : "mt-6"
    } bg-opacity-10 bg-gradient-to-b from-rose-400 via-rose-600 to-rose-900 transition-all duration-500 hover:scale-110  `}
  >
    <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-rose-300 lg:h-[74px] lg:w-[74px]">
      <img src={icon} alt="star" className="h-[50%] w-[50%] object-contain lg:h-[55%] lg:w-[55%]" />
    </div>
    <div className="ml-6 flex flex-1 flex-col leading-6 lg:ml-8">
      <h4 className="font-poppins text-[18px] font-semibold  text-gray-200">{title}</h4>
      <p className="mt-3 font-poppins text-[16px] font-normal  text-white opacity-80">{content}</p>
    </div>
  </div>
);

export default Features;
