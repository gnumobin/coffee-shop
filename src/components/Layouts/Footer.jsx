import FeaturedIn from "../../sections/FeaturedIn";
import CopyRight from "../CopyRight";
import EmailBox from "../Email/EmailBox";
import NavList from "../NavList";
// data
import contactListJson from "../../data/Footer/contactList.json";
import contactAccessibilityJson from "../../data/Footer/accessibilityList.json";
import Logo from "../Logo";
import Icon from "../Icons/Icon";

const Footer = () => {
  return (
    <footer className="bg-footer text-xl text-bright-shade-2">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <Logo />
            <div className="flex gap-20">
              <ul className="flex flex-col gap-7 pt-12">
                <li>شنبه تا پنج شنبه: 10 صبح تا 17 بعد از ظهر</li>
                <li>جمعه : 10 صبح تا 14 بعد از ظهر</li>
                <li className="flex items-center gap-4">
                  <Icon icon="location" className={"!h-10 !w-10"} />
                  <span>مشهد، خیابان مطهری، مطهری 36، پلاک 18</span>
                </li>
                <li className="flex items-center gap-4">
                  <Icon icon="email" className={"!h-10 !w-10"} />
                  <span>cafena@coffee.com</span>
                </li>
                <li className="flex items-center gap-4">
                  <Icon icon="mobile" className={"!h-10 !w-10"} />
                  <span>02192024359</span>
                </li>
              </ul>
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
