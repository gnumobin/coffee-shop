import FeaturedIn from "../sections/FeaturedIn";
import CopyRight from "../components/layout-parts/CopyRight";
import NavList from "../components/navigation/GenericList";
import Logo from "../components/ui/Logo";
import EmailBox from "../components/form/email/EmailBox";
// data
import contactListJson from "../data/footer/contactList.json";
import contactAccessibilityJson from "../data/footer/accessibilityList.json";
import addressJson from "../data/footer/address.json";

const Footer = () => {
  return (
    <footer className="bg-footer pt-32 text-xl text-bright-shade-2 3xl:pt-20 2xl:pt-16 xl:pt-12 3xl:text-lg 2xl:text-base xl:text-sm">
      <div className="container">
        <div className="flex items-center justify-between gap-x-[14rem] gap-y-12 3xl:flex-col-reverse 3xl:gap-y-20 2xl:gap-x-[8rem] xl:gap-x-[4rem]">
          <div className="3xl:w-full">
            <Logo />
            <div className="flex gap-5 xl:flex-col xl:gap-4 3xl:justify-between">
              <NavList data={addressJson} />
              <NavList title="دسترسی سریع" data={contactAccessibilityJson} />
              <NavList title="ارتباط با ما" data={contactListJson} />
            </div>
          </div>

          <FeaturedIn />
        </div>

        <p className="my-12 leading-12 3xl:my-10 2xl:my-8 3xl:leading-10 2xl:leading-9 xl:text-justify">
          کافینا گسترده ترین فروش قهوه و چای تخصصی در سراسر جهان. از دانه‌های
          اسپرسوی طعم‌دار، ما انواعی از محصولات را ارائه می‌دهیم تا کام هر مشتری
          را وسوسه کند. برای کسانی که به دنبال تجهیزات منحصر به فرد دم کردن
          هستند، همچنین طیف کاملی از اسپرسوسازهای با کیفیت، آسیاب، آبجو، پرس
          فرنچ و غیره. همه اینها به راحتی با کلیک یک دکمه در دسترس هستند!
        </p>
        <EmailBox />
      </div>
      <CopyRight />
    </footer>
  );
};

export default Footer;
