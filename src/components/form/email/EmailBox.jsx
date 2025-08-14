import EmailInput from "./EmailInput";

const EmailBox = () => (
  <div className="flex items-center justify-between gap-y-5 rounded-[var(--rounded-2xl)] bg-bright px-14 py-12 2xl:px-10 2xl:py-8 xl:flex-col xl:items-stretch xl:px-8 xl:py-6 lg:px-6 lg:py-5">
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-title 3xl:text-xl 2xl:text-lg xl:text-base">
        اطلاع رسانی
      </h2>
      <p className="mt-2 text-xl text-dark-alpha-8 3xl:text-lg 2xl:text-base xl:text-sm">
        ایمیل‌تان را وارد کنید تا از تخفیف‌ها باخبر شوید.
      </p>
    </div>

    <EmailInput />
  </div>
);

export default EmailBox;
