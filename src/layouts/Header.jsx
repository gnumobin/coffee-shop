import primaryNav from "../data/header/primaryNav.json";
import actionsIcons from "../data/header/actionsIcons.json";
import Icon from "../components/ui/icons/Icon";
import Logo from "../components/ui/Logo";
import { useState } from "react";

const Header = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);

  const navigationDefaultStyle = `mr-20 w-full flex ${
    menuVisibility ? "2xl:translate-y-0" : "2xl:-translate-y-[120%]"
  } 2xl:flex-col 2xl:fixed left-0 top-0 2xl:bg-primary-shade-1 2xl:p-10 2xl:gap-y-10 duration-500 2xl:h-screen z-100`;

  return (
    <header className="text-2xl text-bright-shade-2 3xl:px-4 relative">
      <div className="container">
        <div className="flex items-center justify-between py-12">
          <button onClick={() => setMenuVisibility((prev) => !prev)}>
            <Icon icon={"menu"} className={"hidden w-20 h-20 2xl:block"} />
          </button>
          <Logo />
          <nav className={navigationDefaultStyle}>
            <button onClick={() => setMenuVisibility((prev) => !prev)}>
              <Icon icon={"close"} className={"hidden w-20 h-20 2xl:block"} />
            </button>
            <ul className="flex 2xl:flex-col gap-16 2xl:gap-8">
              {primaryNav.map((item, i) => (
                <li
                  key={i}
                  className="2xl:bg-primary-tint-1 2xl:p-8 2xl:rounded-2xl"
                >
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
            <ul className="flex gap-20 mr-auto 2xl:mr-0 justify-center">
              {actionsIcons.map((icon, i) => (
                <Icon icon={icon.icon} key={i} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
