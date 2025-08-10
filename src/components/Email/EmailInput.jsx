import { FaEnvelope } from "react-icons/fa";

const EmailInput = () => {
  return (
    <form
      action="#"
      className="bg-yellow-shade-1 rounded-[var(--rounded-xs)] text-xl px-5 w-full flex gap-3 items-center"
    >
      <label htmlFor="emailInput">
        <FaEnvelope className="text-title w-10 h-10" />
      </label>
      <input
        type="email"
        name="email"
        id="emailInput"
        placeholder="ایمیل خود را وارد کنید"
        className="p-5 w-full text-title"
      />

      <input
        type="submit"
        value="ارسال"
        className="bg-title cursor-pointer text-bright py-3 px-12 rounded-[var(--rounded-xs)] font-bold"
      />
    </form>
  );
};

export default EmailInput;
