import Icon from "../ui/icons/Icon";

const GenericList = ({ title, data }) => (
  <div
    className="p-10 pt-0 text-xl font-medium text-bright-shade-2
               2xl:p-8 2xl:text-lg
               xl:p-6 xl:text-base
               lg:p-4 lg:text-sm"
  >
    <h2
      className="text-2xl font-bold
                 2xl:text-xl xl:text-lg lg:text-base"
    >
      {title}
    </h2>

    <ul
      className={`list-disc mt-12 flex flex-col gap-6
                   2xl:mt-10 2xl:gap-5
                   xl:mt-8 xl:gap-4
                   lg:mt-6 lg:gap-3 `}
    >
      {data.map((item, idx) => {
        // AddressList
        if (item.type) {
          return item.type === "text" ? (
            <li key={idx} className="list-none">
              <span>{item.value}</span>
            </li>
          ) : (
            <li
              key={idx}
              className="flex items-center gap-4
                                     2xl:gap-3 xl:gap-2 lg:gap-2"
            >
              <Icon
                icon={item.icon}
                className="!h-10 !w-10 2xl:!h-8 2xl:!w-8 xl:!h-6 xl:!w-6 lg:!h-5 lg:!w-5"
              />
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

export default GenericList;
