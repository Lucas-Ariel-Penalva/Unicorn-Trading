import { feedback } from "../constants";

const Testimonials = () => (
  <section id="testimonials" className=" mt-8 flex w-full flex-col items-center justify-center py-6 px-6 transition-all duration-200 sm:py-10 sm:px-16">
    <div>
      <h2 className="w-full text-center font-poppins text-[40px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px]">
        This is what <br />
        <span className="text-gradient animate-pulse text-[52px] font-extrabold underline decoration-white xs:text-[72px]">Winners</span>
        <br />
        <span className="text-rose-400">
          {" "}
          say about <span className="text-[48px] text-rose-800 xs:text-[58px]">Us</span>{" "}
        </span>
      </h2>
    </div>

    <div className="mt-8 flex flex-wrap justify-center" data-aos="fade-up">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="my-5 mr-0 ml-0 flex max-w-[370px] flex-col  justify-between rounded-[20px] bg-gradient-to-t from-gray-900 via-rose-800 to-rose-500  px-10  py-6 shadow-md shadow-rose-600 transition-all duration-300 hover:scale-110 sm:mr-5 sm:ml-5">
    <p className=" my-7 text-center font-poppins text-[18px] font-normal leading-[32.4px] text-white">{content}</p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="h-[48px] w-[48px] rounded-full" />
      <div className="ml-4 flex flex-col">
        <h4 className="text-gradient font-poppins text-[20px] font-extrabold leading-[32px] text-white">{name}</h4>
        <p className="font-poppins text-[16px] font-medium leading-[24px] text-white opacity-80">{title}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;
