const Button = ({ children, primary = true, className }) => {
  const generalStyles =
    "rounded-full text-3xl border-2 font-bold cursor-pointer duration-250";
  const appliedStyles = `${generalStyles} ${className} ${
    primary
      ? "bg-yellow-shade-1 border-yellow-shade-1 py-6 2xl:py-4 px-16 2xl:px-12 text-dark hover:bg-primary hover:text-white"
      : "bg-secondary-tint-1 text-secondary py-5 px-14 hover:bg-transparent"
  }`;
  return <button className={appliedStyles}>{children}</button>;
};

export default Button;
