import Button from "./components/Button";
import Categories from "./components/Categories/Categories";
import CopyRight from "./components/CopyRight";
import EmailBox from "./components/Email/EmailBox";
import FeaturedIn from "./sections/FeaturedIn";
import Popular from "./components/Products/Popular";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonials/Testimonials";
import Cta from "./sections/Cta";
import Logo from "./components/Logo";
import NavList from "./components/NavList";
import Footer from "./components/Layouts/Footer";

function App() {
  return (
    <div className="flex flex-col gap-section">
      {/* <Categories />
      <Products />
      <Cta />
      <Popular />
      <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;
