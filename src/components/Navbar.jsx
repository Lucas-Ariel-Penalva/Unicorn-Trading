import { useState } from "react";
import { close, menu, star } from "../assets";
import { navLinks } from "../constants";
import { toast } from "react-toastify";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [logoPress, setLogoPress] = useState(0);
  const messages = ["You pressed the logo! 🦄", "And again!", "Yet again!", "Think I'm gonna hide an easter egg here?", "Nope!"];

  const logoToast = () => {
    toast(logoPress === 68 ? "69! Funny number! Hahahaha!" : logoPress < messages.length ? messages[logoPress] : `You pressed the logo ${logoPress + 1} times.`, { theme: "dark" });
    setLogoPress(logoPress + 1);
  };

  return (
    <nav className="flex w-full items-center justify-between py-6">
      <div className="flex items-center justify-center  underline decoration-rose-500 underline-offset-[5px] md:decoration-4" data-aos="fade-right">
        <button onClick={logoToast}>
          <div className=" flex h-[64px] w-[64px] items-center justify-center rounded-full bg-rose-500 bg-opacity-10 transition-all duration-200 hover:scale-125 sm:h-[74px] sm:w-[74px]">
            <img src={star} alt="logo-star" className="h-8 w-8 opacity-80 sm:h-10 sm:w-10" />
          </div>
        </button>
        <h3 className="text-gradient ml-2 font-poppins text-xl font-semibold underline md:text-2xl "> Unicorn Trading</h3>
      </div>

      <ul className="hidden flex-1 list-none items-center justify-end md:flex" data-aos="fade-left">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer font-poppins text-[18px] font-normal text-gray-100 transition-all duration-200 hover:scale-110 hover:text-white ${
              active === nav.title ? "" : "opacity-80"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="relative flex flex-1 items-center justify-end md:hidden " data-aos="fade-left">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="h-[28px] w-[28px] object-contain transition-all duration-200 hover:scale-110 sm:h-[36px] sm:w-[36px]"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } sidebar absolute top-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-gradient-to-t from-gray-900 via-rose-900 to-rose-700 p-6 shadow-md shadow-rose-800`}
        >
          <ul className="flex flex-1  flex-col items-start justify-end">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer font-poppins text-[16px]  font-medium text-white transition-all duration-200 hover:scale-110  ${
                  active === nav.title ? "" : "opacity-80"
                } ${index === 0 ? "mt-0" : "mt-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
