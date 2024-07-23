import dynamic from "next/dynamic";
import { twMerge } from "tailwind-merge";
import { Icon as IconType } from "@phosphor-icons/react";

export default function Icon({ name, size, active, glow, weight, className, ...props }: any) {
  const Ic = dynamic(async () => {
    const mod = (await import(`@phosphor-icons/react`)) as any;
    return mod[name] as IconType;
  });
  if (!Ic) return "";
  return (
    <Ic
      size={size || 24}
      className={twMerge(
        "text-gray_2",
        active && "text-session",
        glow && "drop-shadow-sm drop-shadow-session",
        className,
      )}
      weight={weight || (active ? "fill" : "regular")}
      {...props}
    />
  );
}
