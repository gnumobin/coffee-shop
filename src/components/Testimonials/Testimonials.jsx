import Testimonial from "./Testimonial";

const Testimonials = () => {
  const data = [
    {
      author: "مبین",
      rate: 5,
      quote:
        "کافی‌شاپ فوق‌العاده‌ایه! طعم قهوه‌هاش بی‌نظیره و فضای دنج و راحتی داره. همیشه دوست دارم اونجا باشم.",
      id: 1,
    },
    {
      author: "مهتاب",
      rate: 4,
      quote:
        "محیط بسیار خوب و پرسنل مودب و حرفه‌ای. فقط بعضی وقت‌ها صف کمی طولانی میشه، ولی ارزشش رو داره.",
      active: true,
      id: 2,
    },
    {
      author: "ساره",
      rate: 3,
      quote:
        "قهوه‌ها طعم خوبی دارن ولی حجم سرویس‌دهی می‌تونست بهتر باشه. امیدوارم به زودی بهتر بشه.",
      id: 3,
    },
  ];

  return (
    <section className="container">
      <h2 className="heading-secondary">نظرات مشتریان</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(28rem,1fr))] gap-8 rounded mt-16 gap-y-36">
        {data.map((testimonial) => (
          <Testimonial
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

export default Testimonials;
