import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaMobile,
  FaSearch,
  FaTelegram,
  FaUser,
} from "react-icons/fa";
import { FaBasketShopping, FaLocationDot } from "react-icons/fa6";

const Icon = ({ icon, link, className }) => {
  const conditionStyle = `${className && className}`;
  const generalStyle = `w-11 h-11 ${conditionStyle} `;

  switch (icon) {
    case "github":
      return link ? (
        <a href={link}>
          <FaGithub className={generalStyle} />
        </a>
      ) : (
        <FaGithub className={generalStyle} />
      );
    case "telegram":
      return link ? (
        <a href={link}>
          <FaTelegram className={generalStyle} />
        </a>
      ) : (
        <FaTelegram className={generalStyle} />
      );
    case "linkedin":
      return link ? (
        <a href={link}>
          <FaLinkedin className={generalStyle} />
        </a>
      ) : (
        <FaLinkedin className={generalStyle} />
      );
    case "facebook":
      return link ? (
        <a href={link}>
          <FaFacebookF className={generalStyle} />
        </a>
      ) : (
        <FaFacebookF className={generalStyle} />
      );
    case "email":
      return link ? (
        <a href={link}>
          <FaEnvelope className={generalStyle} />
        </a>
      ) : (
        <FaEnvelope className={generalStyle} />
      );
    case "mobile":
      return link ? (
        <a href={link}>
          <FaMobile className={generalStyle} />
        </a>
      ) : (
        <FaMobile className={generalStyle} />
      );
    case "location":
      return link ? (
        <a href={link}>
          <FaLocationDot className={generalStyle} />
        </a>
      ) : (
        <FaLocationDot className={generalStyle} />
      );
    case "search":
      return link ? (
        <a href={link}>
          <FaSearch className={generalStyle} />
        </a>
      ) : (
        <FaSearch className={generalStyle} />
      );
    case "user":
      return link ? (
        <a href={link}>
          <FaUser className={generalStyle} />
        </a>
      ) : (
        <FaUser className={generalStyle} />
      );
    case "basket":
      return link ? (
        <a href={link}>
          <FaBasketShopping className={generalStyle} />
        </a>
      ) : (
        <FaBasketShopping className={generalStyle} />
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
