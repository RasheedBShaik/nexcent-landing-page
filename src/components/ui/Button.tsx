import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const styles = `
    inline-flex
    items-center
    justify-center
    rounded
    border
    border-[#4acf4f]
    bg-[#4acf4f]
    px-8
    py-[14px]
    font-[Inter]
    text-white
    transition-colors
    duration-200
    hover:border-[#3fba44]
    hover:bg-[#3fba44]
    disabled:cursor-not-allowed
    disabled:opacity-50
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
}

