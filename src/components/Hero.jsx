import { arrowdown } from "../assets";

const Hero = () => {
  return (
    <section id="home" className="flex items-center justify-center py-2">
      <div className="text-center">
        <div className="w-full">
          <h1 className=" font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[72px] ss:leading-[100.8px]">
            Get Ready For <br className="hidden sm:block" />{" "}
            <span className="text-rose-500">
              Absolutely<span className="text-gradient block rotate-6 scale-125 animate-pulse">Insane</span>{" "}
            </span>{" "}
          </h1>
        </div>
        <h1 className="w-full font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[68px] ss:leading-[100.8px]">Stock Trading.</h1>

        <div className="mt-8 flex max-w-[680px] flex-col items-center  text-center font-poppins text-[19px] font-normal leading-[30.8px] text-white opacity-75 sm:text-[24px]">
          <p>Are you a genius or an amazing gambler? </p>

          <p className="mt-7 inline-block text-[24px] font-semibold text-rose-600 sm:text-[30px]">We got you covered. </p>
          <a href="#features">
            <img className="mt-10 h-14 w-14 transition-all duration-200 hover:scale-125" src={arrowdown} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
