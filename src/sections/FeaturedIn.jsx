// Images
import mainImg from "../assets/img/featuredIn/coffeeBag.png";
import enamadImg from "../assets/img/featuredIn/enamad.png";
import samandehiImg from "../assets/img/featuredIn/samandehi.png";
import etehadieImg from "../assets/img/featuredIn/etehadie.png";
// data
import data from "../data/licenses/featuredIn.json";
import FeaturedInItem from "../components/features/FeaturedInItem";
// images
const images = {
  enamad: enamadImg,
  samandehi: samandehiImg,
  etehadie: etehadieImg,
};

const FeaturedIn = () => {
  return (
    <aside className="flex flex-col items-center">
      <img
        src={mainImg}
        alt="coffee bag"
        draggable="false"
        loading="lazy"
        decoding="async"
        width={222}
        height={222}
        className=""
      />
      <div className="flex gap-8 mt-8">
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
};

export default FeaturedIn;
