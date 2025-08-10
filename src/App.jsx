import Button from "./components/Button";
import Categories from "./components/Categories/Categories";
import CopyRight from "./components/CopyRight";
import EmailBox from "./components/Email/EmailBox";
import Popular from "./components/Products/Popular";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonials/Testimonials";
import Cta from "./sections/Cta";

function App() {
  return (
    <div className="flex flex-col gap-section">
      {/* <Categories />
      <Products />
      <Cta />
      <Popular />
      <Testimonials /> */}
      {/* <EmailBox /> */}
      <CopyRight />
    </div>
  );
}

export default App;
