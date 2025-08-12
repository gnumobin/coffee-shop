// Images
import latteImg from "../../../assets/img/products/latte.jpg";
import macchiatoImg from "../../../assets/img/products/macchiato.jpg";
import espressoImg from "../../../assets/img/products/espresso.jpg";
import cappuccinoImg from "../../../assets/img/products/cappuccino.jpg";
// data
import data from "../../../data/products/bestSellers.json";
import ProductCard from "./ProductCard";
// images
const images = {
  latte: latteImg,
  macchiato: macchiatoImg,
  espresso: espressoImg,
  cappuccino: cappuccinoImg,
};

const BestSellerProductList = () => {
  return (
    <section>
      <div className="container">
        <h2 className="heading-secondary">پرفروش ترین‌ها</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(28rem,1fr))] gap-8 rounded mt-16 gap-y-36">
          {data.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              img={images[product.img]}
              alt={product.alt}
              recipe={product.recipe}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerProductList;
