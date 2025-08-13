import Icon from "../ui/icons/Icon";

const GenericList = ({ title, data }) => {
  return (
    <div className="p-10 pt-0 text-xl font-medium text-bright-shade-2">
      <h2>{title}</h2>
      <ul className="list-disc flex flex-col gap-6 mt-12">
        {data.map((item, idx) => {
          // AddressList
          if (item.type) {
            return item.type === "text" ? (
              <li key={idx} className="list-none">
                <span>{item.value}</span>
              </li>
            ) : (
              <li key={idx} className="flex items-center gap-4">
                <Icon icon={item.icon} className="!h-10 !w-10" />
                <span>{item.text}</span>
              </li>
            );
          }
          // SimpleList
          else {
            return (
              <li key={item.id || idx}>
                <a href={item.link}>{item.title}</a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default GenericList;
