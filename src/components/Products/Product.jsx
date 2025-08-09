const Product = ({ title, img, alt, recipe, price }) => {
  return (
    <figure className="bg-bright text-center rounded-2xl rounded-t-3xl border border-yellow">
      <img
        src={img}
        alt={alt}
        className="w-full rounded-t-3xl"
        width={280}
        height={222}
        loading="lazy"
        decoding="async"
      />
      <figcaption className="pt-6 flex flex-col gap-3 pb-16">
        <h3 className="text-3xl text-primary-tint-1 font-bold">{title}</h3>
        <p className="text-xl text-dark flex gap-1 justify-center">
          <span>قهوه</span>
          <i>{recipe.coffee}%</i>

          <span> | </span>

          <span>شیر</span>
          <i>{recipe.milk}%</i>
        </p>
        <p className="text-2xl font-bold text-primary-tint-1">
          <i>{price.toLocaleString()}</i> تومان
        </p>
      </figcaption>
    </figure>
  );
};

export default Product;
