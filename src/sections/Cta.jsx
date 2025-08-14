import Picture from "../assets/img/etc/cupThrown.png";
import Button from "../components/ui/buttons/Button";

const Cta = () => {
  return (
    <section className="px-4">
      <div className="container flex gradient-brown rounded-[var(--rounded-2xl)] justify-between items-center text-bright-shade-2 py-12 xl:py-8 px-14 xl:px-10 mt-10 relative">
        {/* Caption */}
        <div className="w-1/2 lg:w-full">
          <h2 className="heading-secondary 2xl:text-4xl xl:!text-3xl text-inherit">
            انواع قهوه فوری
          </h2>
          <p className="mt-6 mb-10 text-2xl 2xl:text-xl xl:!text-lg leading-12">
            انواع قهوه فوری کلاسیک، کافی میکس، کافی میت، کاپوچینو، لاته،
            موکاچینو، هات چاکلت و نسکافه گلد
          </p>
          {/* <Button primary={false} className="mt-20">
            همین حالا خرید کن
          </Button> */}
        </div>
        {/* Image */}
        <img
          src={Picture}
          alt="a cup of coffee thrown into the air"
          width={282}
          height={228}
          loading="lazy"
          decoding="async"
          draggable="false"
          className="max-w-1/3 lg:absolute -top-1/2 lg:translate-y-1/2 left-0 lg:w-40"
        />
      </div>
    </section>
  );
};

export default Cta;
