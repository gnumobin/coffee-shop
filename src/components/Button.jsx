const Button = ({ children, primary = true, className }) => {
  const generalStyles = "rounded-full text-2xl font-bold cursor-pointer";
  const appliedStyles = `${generalStyles} ${className} ${
    primary
      ? "bg-yellow-shade-1 py-6 px-16 text-dark"
      : "bg-secondary-tint-1 text-secondary py-5 px-14 border-2"
  }`;
  return <button className={appliedStyles}>{children}</button>;
};

export default Button;
