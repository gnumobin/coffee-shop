import Icon from "./Icon";
// data
import data from "../../../data/etc/socialsIcons.json";

const IconList = () => {
  return (
    <address className="flex gap-11 2xl:gap-4 xl:!gap-11">
      {data.map((icon, i) => (
        <Icon key={i} icon={icon.icon} link={icon.link} />
      ))}
    </address>
  );
};

export default IconList;
