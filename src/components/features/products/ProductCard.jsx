import Button from "../../ui/buttons/Button";

const ProductCard = ({ title, img, alt, recipe, price }) => (
  <figure className="relative rounded-2xl rounded-t-3xl border border-yellow-shade-1 bg-bright text-center 2xl:rounded-xl xl:rounded-lg">
    <img
      src={img}
      alt={alt}
      width={280}
      height={222}
      loading="lazy"
      decoding="async"
      className="w-full rounded-t-3xl 2xl:rounded-t-xl xl:rounded-t-lg"
    />

    <figcaption className="relative flex flex-col gap-6 pb-10 pt-12 3xl:gap-4 3xl:pb-10 3xl:pt-8 2xl:gap-3 2xl:pb-6 2xl:pt-4 xl:gap-1.5 xl:pb-5 xl:pt-3">
      <h3 className="text-4xl font-bold text-primary-tint-1 3xl:text-3xl 2xl:text-2xl xl:text-xl lg:text-lg">
        {title}
      </h3>

      <p className="flex justify-center gap-1 text-xl text-dark 3xl:text-lg 2xl:text-base xl:text-sm">
        <span>قهوه</span>
        <i>{recipe.coffee}%</i>
        <span> | </span>
        <span>شیر</span>
        <i>{recipe.milk}%</i>
      </p>

      <p className="text-2xl font-bold text-primary-tint-1 3xl:text-xl 2xl:text-lg xl:text-base">
        <i>{price.toLocaleString()}</i> تومان
      </p>

      <Button className="pos-center -translate-y-1/4 xl:-translate-y-1/2">
        سفارش
      </Button>
    </figcaption>
  </figure>
);

export default ProductCard;
