import clsx from "clsx";
import Image from "next/image";

type LabelType = "icon" | "image";

interface Label {
  type: LabelType;
  src?: string;
  children: any;
}

export default function Label({ type, src, children }: Label) {
  return (
    <div
      className={clsx("inline-flex items-center justify-center rounded-full", {
        "py-[5px] px-[10px] gap-[10px] bg-[#0F0F0F] text-white": type === "icon",
        "py-[10px] px-[15px] gap-[10px] bg-white text-black border border-[#E3E3E3]": type === "image",
      })}>
      <Image src={`/icons/${type == "image" ? src : "dot.png"}`} width={type == "image" ? 17 : 10} height={10} alt='dot' />
      {children}
    </div>
  );
}
