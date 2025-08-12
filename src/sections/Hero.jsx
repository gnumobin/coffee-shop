import CupImg from "../assets/img/hero/cup.png";
import Button from "../components/ui/buttons/Button";

const Hero = () => {
  return (
    <section className="text-4xl text-bright-shade-2">
      <div className="container flex pb-60">
        <div className="w-1/2 flex flex-col justify-center gap-16 bg-coffees mt-10">
          <h1 className="heading-primary">خرید آنلاین انواع قهوه</h1>
          <h2>
            فروشگاه اینترنتی قهوه، خرید انواع پودر و دان قهوه با قیمت مناسب
          </h2>
          <Button className="self-start" primary={false}>
            خرید و مشاوره
          </Button>
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            src={CupImg}
            alt="cup"
            loading="eager"
            width={555}
            height={646}
            decoding="async"
            className="w-[65%]"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
