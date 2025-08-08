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
      id: 1,
    },
    {
      title: "انواع قهوه",
      img: coffeeBeansImg,
      id: 2,
    },
    {
      title: "بیرون بر",
      img: takeAwayImg,
      id: 3,
    },
    {
      title: "اسپرسو",
      img: espressoImg,
      id: 4,
    },
    {
      title: "تجهیزات",
      img: equipmentImg,
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
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
