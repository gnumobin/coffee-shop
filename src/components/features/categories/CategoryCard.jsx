const CategoryCard = ({ title, img, alt }) => {
  return (
    <figure
      className="flex flex-col items-center justify-center
                 rounded-2xl gradient-subtle select-none text-secondary
                 px-20 py-16 text-2xl
                 2xl:px-16 2xl:py-12
                 xl:!px-10 xl:!py-8 xl:text-xl
                 lg:!px-6 lg:!py-6 lg:text-lg"
    >
      <img
        src={img}
        alt={alt}
        draggable="false"
        width={107}
        height={107}
        loading="lazy"
        decoding="async"
        className="w-full max-w-[107px]
                   2xl:w-2/3
                   xl:w-1/2
                   lg:w-2/5"
        role="presentation"
      />
      <figcaption className="mt-6 lg:mt-4">{title}</figcaption>
    </figure>
  );
};

export default CategoryCard;
