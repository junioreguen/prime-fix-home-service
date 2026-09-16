interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      <p
        className={`mb-5 text-[11px] font-bold uppercase tracking-[0.2em] ${
          dark ? "text-orange-light" : "text-forest"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-6xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${
            dark ? "text-white" : "text-ink-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}