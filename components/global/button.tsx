import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "text";

interface ButtonProps extends ComponentProps<typeof Link> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary:
      "border border-forest bg-forest !text-white hover:border-forest-dark hover:bg-forest-dark hover:!text-white",
    secondary:
      "border border-forest bg-transparent text-forest hover:bg-forest hover:!text-white",
    text: "border-b border-current bg-transparent px-0 text-forest hover:text-orange",
  };

  return (
    <Link
      className={[
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] px-6 text-sm font-semibold tracking-[-0.01em] transition-colors duration-200",
        variantClasses[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </Link>
  );
}