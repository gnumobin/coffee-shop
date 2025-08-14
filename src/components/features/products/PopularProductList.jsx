// Images
import latteImg from "../../../assets/img/products/latte.jpg";
import macchiatoImg from "../../../assets/img/products/macchiato.jpg";
import espressoImg from "../../../assets/img/products/espresso.jpg";
import cappuccinoImg from "../../../assets/img/products/cappuccino.jpg";
// data
import data from "../../../data/products/populars.json";
import ProductCard from "./ProductCard";
import GridWrapper from "../../ui/GridWrapper";

const images = {
  latte: latteImg,
  macchiato: macchiatoImg,
  espresso: espressoImg,
  cappuccino: cappuccinoImg,
};

const PopularProductList = () => {
  return (
    <GridWrapper
      title="دسته بندی محصولات"
      data={data}
      images={images}
      RenderItem={ProductCard}
      grid={"best-seller-grid"}
      wrapperStyle="relative"
      additionalStyle={"gap-y-36 2xl:gap-y-25 "}
    >
      <div className="pos-center w-full h-1/2 bg-secondary-tint-2 xl:hidden">
        &nbsp;
      </div>
    </GridWrapper>
  );
};

export default PopularProductList;
