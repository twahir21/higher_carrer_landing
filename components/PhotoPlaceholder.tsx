import { ImageIcon } from "lucide-react";

/**
 * Stand-in for real photography. Swap the wrapping <div> for a
 * <Image src="/your-photo.jpg" fill className="object-cover" /> when real
 * assets are ready — the rounded/overflow container is already sized for it.
 */
export default function PhotoPlaceholder({
  label,
  className = "",
  tone = "sky",
}) {
  const tones = {
    sky: "from-sky to-[#DCE9FF]",
    navy: "from-[#1B5AC8] to-[var(--hc-navy)]",
    amber: "from-[#FFE3BE] to-[#FFD199]",
  };
  const textTone = tone === "navy" ? "text-white/80" : "text-brand";

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${tones[tone]} flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <ImageIcon className={textTone} size={28} strokeWidth={1.6} />
      {label && (
        <span className={`text-xs font-medium text-center px-4 ${textTone}`}>
          {label}
        </span>
      )}
    </div>
  );
}