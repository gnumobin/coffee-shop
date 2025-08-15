import Picture from "../assets/img/etc/cupThrown.png";
import Button from "../components/ui/buttons/Button";

const Cta = () => (
  <section className="px-4 lg:pt-18">
    <div
      className="container relative mt-10 flex items-center justify-between
                 rounded-[var(--rounded-2xl)] gradient-brown px-14 py-12
                 text-bright-shade-2
                 2xl:px-10 2xl:py-8"
    >
      {/* Caption */}
      <div className="w-1/2 lg:w-full">
        <h2
          className="heading-secondary text-inherit
                     2xl:text-4xl xl:!text-3xl lg:!text-2xl"
        >
          انواع قهوه فوری
        </h2>
        <p
          className="mt-6 mb-10 leading-12 text-2xl
                     2xl:mt-3 2xl:mb-5 2xl:text-xl
                     xl:!text-lg"
        >
          انواع قهوه فوری کلاسیک، کافی میکس، کافی میت، کاپوچینو، لاته، موکاچینو،
          هات چاکلت و نسکافه گلد
        </p>
        <Button
          primary={false}
          className="mt-20
                     2xl:!text-lg
                     xl:mt-6 
                     lg:mt-4"
        >
          همین حالا خرید کن
        </Button>
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
        className="max-w-1/3
                   lg:absolute lg:left-0 lg:w-40 lg:-top-3/7 lg:translate-y-1/2"
      />
    </div>
  </section>
);

export default Cta;
