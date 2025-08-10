import Button from "../components/Button";
import Picture from "../assets/img/etc/cupThrown.png";

const Cta = () => {
  return (
    <section className="container flex gradient-brown rounded-[var(--rounded-2xl)] justify-between items-center text-bright-shade-2 py-12 px-14 ">
      {/* Caption */}
      <div className="w-1/2">
        <h2 className="heading-secondary text-inherit">انواع قهوه فوری</h2>
        <p className="mt-6 mb-10 text-2xl leading-12">
          انواع قهوه فوری کلاسیک، کافی میکس، کافی میت، کاپوچینو، لاته، موکاچینو،
          هات چاکلت و نسکافه گلد
        </p>
        <Button primary={false} className="mt-20">
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
        className="h-full"
      />
    </section>
  );
};

export default Cta;
