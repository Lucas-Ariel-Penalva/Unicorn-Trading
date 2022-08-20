const Button = ({ styles, text, func, works = true }) => (
  <button
    disabled={!works}
    type="button"
    className={`rounded-[10px] bg-gradient-to-r from-rose-500 to-rose-900 py-4  px-6 font-poppins text-[18px] font-medium text-rose-200 outline-rose-800 transition-all duration-200 hover:scale-110  hover:text-white ${styles} disabled:opacity-50 disabled:duration-1000 disabled:hover:opacity-0`}
    onClick={func}
  >
    {text ? text : "Sounds great, I'm in! 🦄"}
  </button>
);

export default Button;
