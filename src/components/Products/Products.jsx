import Product from "./Product";
// Images
import latteImg from "../../assets/img/products/latte.jpg";
import macchiatoImg from "../../assets/img/products/macchiato.jpg";
import espressoImg from "../../assets/img/products/espresso.jpg";
import cappuccinoImg from "../../assets/img/products/cappuccino.jpg";

const Products = () => {
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
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
    },
    {
      title: "لاته",
      img: latteImg,
      alt: "picture of latte coffee",
      recipe: {
        coffee: 30,
        milk: 70,
      },
      price: 120000,
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
    },
  ];
  return (
    <section className="container">
      <h2 className="heading-secondary">پرفروش ترین‌ها</h2>
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
    </section>
  );
};

export default Products;
