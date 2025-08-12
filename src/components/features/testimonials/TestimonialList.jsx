import data from "../../../data/testimonials/Testimonials.json";
import TestimonialCard from "./TestimonialCard";

const TestimonialList = () => {
  return (
    <section className="container pt-[var(--gap-section)]">
      <h2 className="heading-secondary">نظرات مشتریان</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(28rem,1fr))] gap-8 rounded mt-16 gap-y-36">
        {data.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            author={testimonial.author}
            quote={testimonial.quote}
            rate={testimonial.rate}
            active={testimonial.active}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialList;
