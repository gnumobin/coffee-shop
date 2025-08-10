import Product from "./Product";
// Images
import latteImg from "../../assets/img/products/latte.jpg";
import macchiatoImg from "../../assets/img/products/macchiato.jpg";
import espressoImg from "../../assets/img/products/espresso.jpg";
import cappuccinoImg from "../../assets/img/products/cappuccino.jpg";

const Popular = () => {
  const data = [
    {
      title: "لاته",
      img: latteImg,
      alt: "picture of latte coffee",
      recipe: {
        coffee: 30,
        milk: 70,
      },
      price: 120000,
      id: 10,
    },
    {
      title: "ماکیاتو",
      img: macchiatoImg,
      alt: "picture of macchiato coffee",
      recipe: {
        coffee: 60,
        milk: 40,
      },
      price: 140000,
      id: 11,
    },
    {
      title: "اسپرسو",
      img: espressoImg,
      alt: "picture of espresso coffee",
      recipe: {
        coffee: 100,
        milk: 0,
      },
      price: 90000,
      id: 12,
    },
    {
      title: "کاپوچینو",
      img: cappuccinoImg,
      alt: "picture of cappuccino coffee",
      recipe: {
        coffee: 40,
        milk: 60,
      },
      price: 130000,
      id: 13,
    },
  ];
  return (
    <section className="relative">
      <div className="pos-center h-1/2 bg-secondary-tint-2 w-full">&nbsp;</div>
      <div className="container">
        <h2 className="heading-secondary">محبوب ترین‌ها</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(28rem,1fr))] gap-8 rounded mt-16 gap-y-36">
          {data.map((product) => (
            <Product
              key={product.id}
              title={product.title}
              img={product.img}
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

export default Popular;
