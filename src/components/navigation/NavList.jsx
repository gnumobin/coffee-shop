const NavList = ({ title, data }) => {
  return (
    <div className="p-10 pt-0 text-xl font-medium text-bright-shade-2">
      <h2>{title}</h2>
      <ul className="list-disc flex flex-col gap-6 mt-12">
        {data.map(({ title, link, id }) => (
          <li key={id}>
            <a href={link}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavList;
