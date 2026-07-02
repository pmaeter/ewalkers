import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#00AEEF]">
        {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg leading-relaxed text-white/55">{description}</p>
      )}
    </div>
  );
}
