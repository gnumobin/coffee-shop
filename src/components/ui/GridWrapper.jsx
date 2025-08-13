const GridWrapper = (props) => {
  const {
    title,
    data,
    images,
    RenderItem,
    minSize,
    additionalStyle,
    wrapperStyle,
    children,
  } = props;

  const gridContainerStyle = `grid grid-cols-[repeat(auto-fit,minmax(${
    minSize ? minSize : "22rem"
  },1fr))] gap-8 rounded mt-16 ${additionalStyle}`;

  return (
    <section className={wrapperStyle}>
      {children}
      <div className="container">
        <h2 className="heading-secondary">{title}</h2>

        <div className={gridContainerStyle}>
          {data.map((item) => (
            <RenderItem {...item} key={item.id} img={images?.[item.img]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridWrapper;
