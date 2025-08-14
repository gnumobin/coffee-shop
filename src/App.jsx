// import BestSellerProductList from "./components/layout-parts/products/BestSellerProductList";
import CategoryList from "./components/features/categories/CategoryList";
import PopularProductList from "./components/features/products/PopularProductList";
import TestimonialList from "./components/features/testimonials/TestimonialList";
import BestSellerProductList from "./components/features/products/BestSellerProductList";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Cta from "./sections/Cta";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="flex flex-col gap-section">
      <div className="gradient-brown h-screen">
        <Header />
        <Hero />
      </div>
      <CategoryList />
      <BestSellerProductList />
      <Cta />
      <PopularProductList />
      <TestimonialList />
      <Footer />
    </div>
  );
}

export default App;
