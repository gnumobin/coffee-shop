import CupImg from "../assets/img/hero/cup.png";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="gradient-brown-tint text-4xl text-bright-shade-2">
      <div className="container flex items-center gap-28">
        <div className="w-1/2 flex flex-col gap-16  ">
          <h1 className="heading-primary">خرید آنلاین انواع قهوه</h1>
          <h2>
            فروشگاه اینترنتی قهوه، خرید انواع پودر و دان قهوه با قیمت مناسب
          </h2>
          <Button className="self-start" primary={false}>
            خرید و مشاوره
          </Button>
        </div>
        <div className="w-1/2">
          <img
            src={CupImg}
            alt="cup"
            loading="eager"
            width={650}
            height={646}
            decoding="async"
            className="w-full"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
