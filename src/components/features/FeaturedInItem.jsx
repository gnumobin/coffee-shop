const FeaturedInItem = ({ img, alt }) => {
  return (
    <div
      className="bg-bright rounded-[var(--rounded-2xl)] px-6 py-4
               2xl:px-5 2xl:py-3
               xl:px-4 xl:py-2
               lg:px-3 lg:py-2"
    >
      <img
        src={img}
        width={78}
        height={78}
        loading="lazy"
        decoding="async"
        alt={alt}
      />
    </div>
  );
};

export default FeaturedInItem;
