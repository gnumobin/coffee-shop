import Category from "./Category";
// Images
import sweetsImg from "../../assets/img/categories/sweets.svg";
import equipmentImg from "../../assets/img/categories/equipment.svg";
import coffeeBeansImg from "../../assets/img/categories/coffeeBeans.svg";
import espressoImg from "../../assets/img/categories/espresso.svg";
import takeAwayImg from "../../assets/img/categories/takeAway.svg";

const Categories = () => {
  const data = [
    {
      title: "شیرینی",
      img: sweetsImg,
      alt: "picture of sweets",
      id: 1,
    },
    {
      title: "انواع قهوه",
      img: coffeeBeansImg,
      alt: "picture of coffeeBeans",
      id: 2,
    },
    {
      title: "بیرون بر",
      img: takeAwayImg,
      alt: "picture of Take Away item",
      id: 3,
    },
    {
      title: "اسپرسو",
      img: espressoImg,
      alt: "picture of espresso",
      id: 4,
    },
    {
      title: "تجهیزات",
      img: equipmentImg,
      alt: "picture of equipment",
      id: 5,
    },
  ];

  return (
    <section className="container">
      <h2 className="heading-secondary">دسته بندی محصولات</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-8 rounded mt-16">
        {data.map((category) => (
          <Category
            key={category.id}
            title={category.title}
            img={category.img}
            alt={category.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
