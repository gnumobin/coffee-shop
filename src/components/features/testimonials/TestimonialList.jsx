import data from "../../../data/testimonials/Testimonials.json";
import GridWrapper from "../../ui/GridWrapper";
import TestimonialCard from "./TestimonialCard";

const TestimonialList = () => {
  return (
    <GridWrapper
      title="دسته بندی محصولات"
      data={data}
      RenderItem={TestimonialCard}
      wrapperStyle={"pt-[var(--gap-section)] xl:pt-0"}
      grid={"grid-cols-[repeat(auto-fit,minmax(25rem,1fr))]"}
    />
  );
};

export default TestimonialList;
