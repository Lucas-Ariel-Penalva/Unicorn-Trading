import Button from "./Button";
import { toast } from "react-toastify";

const CTA = () => {
  const finalCTA = () => {
    toast("Responsive Landing Page made with React ✨", { theme: "dark" });
  };

  return (
    <section className="my-6 flex flex-col items-center justify-center rounded-[20px]  px-6 py-4 sm:flex-row sm:px-16" data-aos="fade-down" data-aos-duration="1300">
      <div className="flex flex-col">
        <h2 className="text-center font-poppins text-[40px] font-semibold leading-[66.8px] text-white underline decoration-rose-600 underline-offset-8 xs:text-[48px] xs:leading-[76.8px] md:text-left lg:decoration-8">
          {" "}
          What are you
          <br className="md:hidden" /> waiting for?{" "}
        </h2>
        <div className="mt-14 flex items-center justify-center">
          <Button func={finalCTA} text={"Yes, I want to be a millionaire 🦄"} />
        </div>
      </div>
    </section>
  );
};

export default CTA;
