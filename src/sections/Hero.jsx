import CupImg from "../assets/img/hero/cup.png";
import Button from "../components/ui/buttons/Button";

const Hero = () => {
  return (
    <section className="text-4xl 2xl:text-3xl  text-bright-shade-2 px-4">
      <div className="container flex xl:flex-col-reverse">
        <div className="w-1/2 xl:w-full xl:text-center flex flex-col justify-center gap-16 bg-coffees mt-10">
          <h1 className="heading-primary 2xl:text-5xl">
            خرید آنلاین انواع قهوه
          </h1>
          <h2 className="leading-14">
            فروشگاه اینترنتی قهوه، خرید انواع پودر و دان قهوه با قیمت مناسب
          </h2>
          <Button className="self-start xl:self-center" primary={false}>
            خرید و مشاوره
          </Button>
        </div>
        <div className="w-1/2 flex justify-end xl:justify-center xl:w-full">
          <img
            src={CupImg}
            alt="cup"
            loading="eager"
            width={555}
            height={646}
            decoding="async"
            className="w-[65%] xl:w-3/4"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
