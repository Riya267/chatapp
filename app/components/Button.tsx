import clsx from "clsx";

interface ButtonProps {
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  error?: boolean;
  disabled?: boolean;
}

const getButtonClassNames = ({
  secondary,
  error,
  fullWidth,
  disabled,
}: ButtonProps) => {
  return clsx(
    "flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    disabled && "opacity-50 cursor-default",
    fullWidth && "w-full",
    secondary ? "text-gray-900" : "text-white",
    error && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
    !secondary && !error && "bg-primary-500 hover:bg-primary-400 focus-visible:outline-sky-600"
  );
};

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  fullWidth = false,
  children,
  onClick,
  secondary = false,
  error = false,
  disabled = false,
}) => {
  const buttonClassNames = getButtonClassNames({
    secondary,
    error,
    fullWidth,
    disabled,
  });

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label="Submit"
      className={buttonClassNames}
    >
      {children}
    </button>
  );
};