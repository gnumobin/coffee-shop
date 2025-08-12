import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ author, rate, quote, active }) => {
  const starsCount = Array.from({ length: rate });

  const figureStyle = "rounded-2xl border border-primary-shade-1 p-10";
  const appliedStyle = `${figureStyle} ${
    active ? "bg-bright-shade-1" : "bg-bright"
  }`;

  return (
    <figure className={appliedStyle}>
      <figcaption>
        <cite className="text-3xl font-bold text-primary-tint-1">{author}</cite>
        <div className="flex gap-2 mt-3">
          {starsCount.map((star, index) => (
            <FaStar key={index} className="text-yellow w-7 h-7" />
          ))}
        </div>
      </figcaption>
      <blockquote className="text-xl text-dark leading-9 mt-8">
        <p>{quote}</p>
      </blockquote>
    </figure>
  );
};

export default TestimonialCard;
