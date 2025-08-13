import {
  LuLocateFixed,
  LuMail,
  LuPhone,
  LuSearch,
  LuShoppingCart,
  LuUserRound,
} from "react-icons/lu";
import {
  RiFacebookFill,
  RiGithubLine,
  RiLinkedinBoxFill,
  RiTelegram2Line,
} from "react-icons/ri";

const Icon = ({ icon, link, className }) => {
  const conditionStyle = `${className && className}`;
  const generalStyle = `w-11 h-11 ${conditionStyle} `;

  switch (icon) {
    case "github":
      return link ? (
        <a href={link}>
          <RiGithubLine className={generalStyle} />
        </a>
      ) : (
        <RiGithubLine className={generalStyle} />
      );
    case "telegram":
      return link ? (
        <a href={link}>
          <RiTelegram2Line className={generalStyle} />
        </a>
      ) : (
        <RiTelegram2Line className={generalStyle} />
      );
    case "linkedin":
      return link ? (
        <a href={link}>
          <RiLinkedinBoxFill className={generalStyle} />
        </a>
      ) : (
        <RiLinkedinBoxFill className={generalStyle} />
      );
    case "facebook":
      return link ? (
        <a href={link}>
          <RiFacebookFill className={generalStyle} />
        </a>
      ) : (
        <RiFacebookFill className={generalStyle} />
      );
    case "email":
      return link ? (
        <a href={link}>
          <LuMail className={generalStyle} />
        </a>
      ) : (
        <LuMail className={generalStyle} />
      );
    case "mobile":
      return link ? (
        <a href={link}>
          <LuPhone className={generalStyle} />
        </a>
      ) : (
        <LuPhone className={generalStyle} />
      );
    case "location":
      return link ? (
        <a href={link}>
          <LuLocateFixed className={generalStyle} />
        </a>
      ) : (
        <LuLocateFixed className={generalStyle} />
      );
    case "search":
      return link ? (
        <a href={link}>
          <LuSearch className={generalStyle} />
        </a>
      ) : (
        <LuSearch className={generalStyle} />
      );
    case "user":
      return link ? (
        <a href={link}>
          <LuUserRound className={generalStyle} />
        </a>
      ) : (
        <LuUserRound className={generalStyle} />
      );
    case "basket":
      return link ? (
        <a href={link}>
          <LuShoppingCart className={generalStyle} />
        </a>
      ) : (
        <LuShoppingCart className={generalStyle} />
      );

    default:
      return link ? (
        <a>Your're Icon not in list</a>
      ) : (
        <p>Your're Icon not in list</p>
      );
  }
};

export default Icon;
