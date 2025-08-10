const FeaturedInItem = ({ img, alt }) => {
  return (
    <div className="bg-bright rounded-[var(--rounded-2xl)] px-6 py-4">
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
