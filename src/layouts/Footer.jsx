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
    <footer className="bg-footer text-xl text-bright-shade-2 pt-32">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <Logo />
            <div className="flex gap-20">
              <NavList data={addressJson} />
              <NavList title="دسترسی سریع" data={contactAccessibilityJson} />
              <NavList title="ارتباط با ما" data={contactListJson} />
            </div>
          </div>
          <FeaturedIn />
        </div>
        <p className="leading-12 my-12">
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
