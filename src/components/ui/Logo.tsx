import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  textClassName?: string;
};

export function Logo({ className, textClassName }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="flex flex-col gap-[3px]" aria-hidden>
        <span className="h-[3px] w-6 rounded-full bg-[#00AEEF]" />
        <span className="h-[3px] w-6 rounded-full bg-[#00AEEF]" />
        <span className="h-[3px] w-6 rounded-full bg-[#00AEEF]" />
      </span>
      <span
        className={cn(
          "font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight text-white",
          textClassName,
        )}
      >
        ewalkers
      </span>
    </span>
  );
}
