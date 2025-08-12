import Category from "./Category";
// Images
import sweetsImg from "../../assets/img/categories/sweets.svg";
import equipmentImg from "../../assets/img/categories/equipment.svg";
import coffeeBeansImg from "../../assets/img/categories/coffeeBeans.svg";
import espressoImg from "../../assets/img/categories/espresso.svg";
import takeAwayImg from "../../assets/img/categories/takeAway.svg";
// data
import data from "../../data/Categories/categories.json";

const images = {
  sweets: sweetsImg,
  equipment: equipmentImg,
  coffeeBeans: coffeeBeansImg,
  espresso: espressoImg,
  takeAway: takeAwayImg,
};

const Categories = () => {
  return (
    <section className="container">
      <h2 className="heading-secondary">دسته بندی محصولات</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-8 rounded mt-16">
        {data.map((category) => (
          <Category
            key={category.id}
            title={category.title}
            img={images[category.img]}
            alt={category.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
