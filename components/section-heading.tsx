interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {tag && (
        <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-4 rounded-full border border-[#222222] bg-[#0A0A0A]/80 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-subtle-pulse" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#A0A0A0]">
            {tag}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#A0A0A0] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
