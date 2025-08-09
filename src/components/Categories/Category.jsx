const Category = ({ title, img, alt }) => {
  return (
    <figure className="flex flex-col justify-center items-center text-secondary rounded-2xl px-20 py-16 text-2xl gradient-subtle select-none">
      <img
        src={img}
        alt={alt}
        draggable="false"
        width={107}
        height={107}
        loading="lazy"
        decoding="async"
      />
      <figcaption className="mt-6">{title}</figcaption>
    </figure>
  );
};

export default Category;
