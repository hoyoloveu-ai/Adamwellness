"use client";

type PlaceholderImageProps = {
  label: string;
  className?: string;
  aspect?: string;
};

/** Swap these for real photos later — same layout, new image source. */
export function PlaceholderImage({
  label,
  className = "",
  aspect = "aspect-[4/3]",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden border border-dashed border-neutral-400 bg-neutral-100 ${aspect} ${className}`}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg,#e5e5e5,#e5e5e5 10px,#ececec 10px,#ececec 20px)",
        }}
      />
      <span className="relative z-10 px-4 text-center text-xs font-medium tracking-wide text-neutral-500 sm:text-sm">
        {label}
      </span>
    </div>
  );
}
