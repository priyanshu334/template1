import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md font-medium transition duration-200 ${
        className || "bg-blue-600 text-white hover:bg-blue-700"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};
