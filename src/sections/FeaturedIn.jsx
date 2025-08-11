import FeaturedInItem from "../components/FeaturedInItem";
// Images
import enamadImg from "../assets/img/featuredIn/enamad.png";
import samandehiImg from "../assets/img/featuredIn/samandehi.png";
import etehadieImg from "../assets/img/featuredIn/etehadie.png";
import mainImg from "../assets/img/featuredIn/coffeeBag.png";

const FeaturedIn = () => {
  const data = [
    {
      img: enamadImg,
      alt: "Enamad",
      id: 1,
    },
    {
      img: samandehiImg,
      alt: "Samandehi",
      id: 2,
    },
    {
      img: etehadieImg,
      alt: "Etehadie",
      id: 3,
    },
  ];
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
      />
      <div className="flex gap-8 mt-8">
        {data.map((featured) => (
          <FeaturedInItem
            key={featured.id}
            img={featured.img}
            alt={featured.alt}
          />
        ))}
      </div>
    </aside>
  );
};

export default FeaturedIn;
