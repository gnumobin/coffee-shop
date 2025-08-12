import Icon from "../Icons/Icon";
import Logo from "../Logo";

import primaryNav from "../../data/Header/primaryNav.json";
import actionsIcons from "../../data/Header/actionsIcons.json";

const Header = () => {
  return (
    <header className="text-2xl text-bright-shade-2">
      <div className="container flex items-center justify-between py-12">
        <Logo />
        <nav className="mr-20">
          <ul className="flex gap-16">
            {primaryNav.map((item, i) => (
              <li key={i}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="mr-auto">
          <ul className="flex gap-20">
            {actionsIcons.map((icon, i) => (
              <Icon icon={icon.icon} key={i} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
