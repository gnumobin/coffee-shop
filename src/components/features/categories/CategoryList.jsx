// Images
import sweetsImg from "../../../assets/img/categories/sweets.svg";
import equipmentImg from "../../../assets/img/categories/equipment.svg";
import coffeeBeansImg from "../../../assets/img/categories/coffeeBeans.svg";
import espressoImg from "../../../assets/img/categories/espresso.svg";
import takeAwayImg from "../../../assets/img/categories/takeAway.svg";
// data
import data from "../../../data/categories/categories.json";
import CategoryCard from "./CategoryCard";
import GridWrapper from "../../ui/GridWrapper";

// Images map
const images = {
  sweets: sweetsImg,
  equipment: equipmentImg,
  coffeeBeans: coffeeBeansImg,
  espresso: espressoImg,
  takeAway: takeAwayImg,
};

const CategoryList = () => (
  <GridWrapper
    title="دسته بندی محصولات"
    data={data}
    images={images}
    RenderItem={CategoryCard}
    grid={
      "grid-cols-[repeat(auto-fit,minmax(14.5rem,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(12rem,1fr))]"
    }
  />
);

export default CategoryList;
