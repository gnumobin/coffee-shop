const Button = ({ children, primary = true, className }) => {
  const generalStyles =
    "rounded-full text-2xl 2xl:text-xl font-bold cursor-pointer";
  const appliedStyles = `${generalStyles} ${className} ${
    primary
      ? "bg-yellow-shade-1 py-6 2xl:py-4 px-16 2xl:px-12 text-dark"
      : "bg-secondary-tint-1 text-secondary py-5 2xl:py-3 px-14 2xl:px-10 border-2"
  }`;
  return <button className={appliedStyles}>{children}</button>;
};

export default Button;
