import Icon from "../Icons/Icon";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="text-2xl text-bright-shade-2">
      <div className="container flex items-center justify-between py-12">
        <Logo />
        <nav className="mr-20">
          <ul className="flex gap-16">
            <li>
              <a href="#">فروشگاه</a>
            </li>
            <li>
              <a href="#">فروشگاه</a>
            </li>
            <li>
              <a href="#">فروشگاه</a>
            </li>
            <li>
              <a href="#">فروشگاه</a>
            </li>
            <li>
              <a href="#">فروشگاه</a>
            </li>
          </ul>
        </nav>
        <nav className="mr-auto">
          <ul className="flex gap-20">
            <li>
              <a href="#">
                <Icon icon="user" />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon icon="basket" />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon icon="search" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
