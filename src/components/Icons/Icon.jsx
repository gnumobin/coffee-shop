import { FaFacebookF, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const Icon = ({ icon, link }) => {
  const generalStyle = "w-11 h-11 cursor-pointer";

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

    default:
      return link ? (
        <a>Your're Icon not in list</a>
      ) : (
        <p>Your're Icon not in list</p>
      );
  }
};

export default Icon;
