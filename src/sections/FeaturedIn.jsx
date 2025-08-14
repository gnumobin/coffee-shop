// Images
import mainImg from "../assets/img/featuredIn/coffeeBag.png";
import enamadImg from "../assets/img/featuredIn/enamad.png";
import samandehiImg from "../assets/img/featuredIn/samandehi.png";
import etehadieImg from "../assets/img/featuredIn/etehadie.png";
// data
import data from "../data/licenses/featuredIn.json";
import FeaturedInItem from "../components/features/FeaturedInItem";

// Images map
const images = {
  enamad: enamadImg,
  samandehi: samandehiImg,
  etehadie: etehadieImg,
};

const FeaturedIn = () => (
  <aside className="flex flex-col items-center">
    {/* main pic */}
    <img
      src={mainImg}
      alt="coffee bag"
      width={222}
      height={222}
      draggable="false"
      loading="lazy"
      decoding="async"
      className="xl:hidden max-w-full 2xl:w-56 xl:w-48 lg:w-40"
    />

    {/* FeaturedIn Cards */}
    <div
      className="flex flex-wrap gap-8 mt-8 justify-center
                    2xl:gap-6 xl:gap-5 lg:gap-4"
    >
      {data.map((featured) => (
        <FeaturedInItem
          key={featured.id}
          img={images[featured.img]}
          alt={featured.alt}
        />
      ))}
    </div>
  </aside>
);

export default FeaturedIn;
