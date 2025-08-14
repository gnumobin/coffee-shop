import EmailInput from "./EmailInput";

const EmailBox = () => {
  return (
    <div className="flex xl:flex-col items-center justify-between bg-bright rounded-[var(--rounded-2xl)] py-12 2xl:py-8 px-14 2xl:px-10 gap-y-5">
      <div className="w-full">
        <h2 className="text-title text-2xl font-semibold">اطلاع رسانی</h2>
        <p className="text-xl text-dark-alpha-8 mt-2">
          ایمیل‌تان را وارد کنید تا از تخفیف‌ها باخبر شوید.
        </p>
      </div>
      <EmailInput />
    </div>
  );
};

export default EmailBox;
