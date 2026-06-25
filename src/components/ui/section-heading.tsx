import { cn } from "@/lib/utils";
import { SplitText } from "@/components/anim/split-text";
import { Reveal } from "@/components/anim/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  goldWords?: number[];
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  goldWords = [],
  description,
  align = "left",
  className,
  titleClassName,
  as = "h2",
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Tag
        className={cn(
          "font-display text-h2 font-light text-balance text-ivory",
          titleClassName,
        )}
      >
        <SplitText text={title} goldWords={goldWords} />
      </Tag>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-prose text-pretty text-base leading-relaxed text-mist md:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
