const CategoryCard = ({ title, img, alt }) => {
  return (
    <figure className="flex flex-col justify-center items-center text-secondary rounded-2xl px-20 2xl:px-16 py-16 2xl:py-12 text-2xl gradient-subtle select-none">
      <img
        src={img}
        alt={alt}
        draggable="false"
        width={107}
        height={107}
        loading="lazy"
        decoding="async"
        className="w-full 2xl:w-2/3"
        role="icon"
      />
      <figcaption className="mt-6">{title}</figcaption>
    </figure>
  );
};

export default CategoryCard;
