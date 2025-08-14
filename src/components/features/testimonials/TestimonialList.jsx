import data from "../../../data/testimonials/Testimonials.json";
import GridWrapper from "../../ui/GridWrapper";
import TestimonialCard from "./TestimonialCard";

const TestimonialList = () => {
  return (
    <GridWrapper
      title="دسته بندی محصولات"
      data={data}
      RenderItem={TestimonialCard}
      wrapperStyle={"pt-[var(--gap-section)]"}
      minSize="28rem"
    />
  );
};

export default TestimonialList;
