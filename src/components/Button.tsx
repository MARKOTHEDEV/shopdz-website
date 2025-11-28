type Prop = React.PropsWithChildren<{
  variant?: "white" | "primary" | "outline" | "primaryOutline";
  className?: string;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant = "white", className, ...props }: Prop) => {
  const colorVariants = {
    white: "bg-[#FAF8F5] text-content-primary-black",
    primary: "bg-primary text-content-primary-inverse",
    outline: "bg-transparent border border-[#ECEAE7] text-[#3D3C39]",
    primaryOutline:
      "bg-transparent border border-[#FFFFFF33] text-content-primary-inverse",
  };
  return (
    <button
      className={`inline-block font-inter font-mediumn text-[16px] px-[20px] py-[12px] rounded-full ${colorVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
