import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Download, Features, CTA, Footer, Navbar, Testimonials, Hero } from "./components";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="stars w-full overflow-hidden">
      <ToastContainer autoClose={4000} />
      <div className="flex items-center justify-center px-6 sm:px-16">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </div>

      <div className="flex justify-center px-6 sm:px-16">
        <div className="w-full xl:max-w-[1280px]">
          <Hero />
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center px-6 sm:px-16">
        <div className="w-full xl:max-w-[1280px]">
          <Features />
          <Download />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
