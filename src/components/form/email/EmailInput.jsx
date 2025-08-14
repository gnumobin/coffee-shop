import { FaEnvelope } from "react-icons/fa";

const EmailInput = () => (
  <form
    action="#"
    className="flex w-full items-center gap-3 rounded-[var(--rounded-xs)] bg-yellow-shade-1 2xl:bg-white px-5 text-xl 3xl:px-4 3xl:text-lg 2xl:px-3 2xl:text-base xl:flex-col xl:items-stretch xl:gap-2 relative"
  >
    <label htmlFor="emailInput" className="shrink-0">
      <FaEnvelope className="h-10 w-10 text-title 3xl:h-8 3xl:w-8 2xl:h-7 2xl:w-7 2xl:absolute z-1 top-5 right-8" />
    </label>

    <input
      type="email"
      name="email"
      id="emailInput"
      placeholder="ایمیل خود را وارد کنید"
      className="w-full p-5 text-title
                 3xl:p-4
                 2xl:p-3 2xl:bg-yellow-shade-1 rounded-[var(--rounded-xs)]
                 xl:text-center"
    />

    <input
      type="submit"
      value="ارسال"
      className="cursor-pointer rounded-[var(--rounded-xs)] bg-title 
                 px-12 py-3 font-bold text-bright
                 3xl:px-8 3xl:py-2
                 2xl:px-6 2xl:py-2
                 xl:w-full xl:px-0"
    />
  </form>
);

export default EmailInput;
