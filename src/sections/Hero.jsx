import CupImg from "../assets/img/hero/cup.png";
import Button from "../components/ui/buttons/Button";

const Hero = () => (
  <section
    className="px-4 text-bright-shade-2 text-4xl
               2xl:text-3xl xl:text-2xl lg:text-xl"
  >
    <div className="container flex xl:flex-col-reverse">
      {/* caption */}
      <div
        className="flex w-1/2 flex-col justify-center gap-16 bg-coffees mt-10
                   xl:w-full xl:text-center xl:gap-10 xl:mt-6
                   lg:gap-8 lg:mt-4"
      >
        <h1
          className="heading-primary text-5xl
                     2xl:text-4xl xl:!text-[2.5rem] lg:!text-3xl"
        >
          خرید آنلاین انواع قهوه
        </h1>
        <h2
          className="leading-14
                     2xl:leading-12 xl:leading-10 lg:leading-9"
        >
          فروشگاه اینترنتی قهوه، خرید انواع پودر و دان قهوه با قیمت مناسب
        </h2>
        <Button
          className="self-start xl:self-center
                     3xl:self-center lg:self-stretch"
          primary={false}
        >
          خرید و مشاوره
        </Button>
      </div>

      {/* image */}
      <div className="flex w-1/2 justify-end xl:w-full xl:justify-center">
        <img
          src={CupImg}
          alt="cup"
          width={555}
          height={646}
          loading="eager"
          decoding="async"
          draggable="false"
          className="w-[65%]
                     2xl:w-3/4 xl:w-4/5 lg:w-full"
        />
      </div>
    </div>
  </section>
);

export default Hero;
