const Logo = () => {
  return (
    <div className="w-28">
      <img
        src="/logo.svg"
        alt="website logo"
        loading="eager"
        decoding="async"
        width={74}
        height={95}
        className="w-full"
        draggable="false"
      />
    </div>
  );
};

export default Logo;
