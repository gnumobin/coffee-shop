// Images
import latteImg from "../../../assets/img/products/latte.jpg";
import macchiatoImg from "../../../assets/img/products/macchiato.jpg";
import espressoImg from "../../../assets/img/products/espresso.jpg";
import cappuccinoImg from "../../../assets/img/products/cappuccino.jpg";
// data
import data from "../../../data/products/bestSellers.json";
import ProductCard from "./ProductCard";
import GridWrapper from "../../ui/GridWrapper";
// images
const images = {
  latte: latteImg,
  macchiato: macchiatoImg,
  espresso: espressoImg,
  cappuccino: cappuccinoImg,
};

const BestSellerProductList = () => {
  return (
    <GridWrapper
      title="دسته بندی محصولات"
      data={data}
      images={images}
      RenderItem={ProductCard}
      // grid="grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]"
      grid={"best-seller-grid"}
      additionalStyle={"gap-y-36 2xl:gap-y-25 mt-16"}
    />
  );
};

export default BestSellerProductList;
