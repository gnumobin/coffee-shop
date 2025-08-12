import Icon from "./Icon";
// data
import data from "../../data/Etc/socialsIcons.json";

const SocialsIcon = () => {
  return (
    <address className="flex gap-11">
      {data.map((icon, i) => (
        <Icon key={i} icon={icon.icon} link={icon.link} />
      ))}
    </address>
  );
};

export default SocialsIcon;
