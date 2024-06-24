import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type LabelType = "icon" | "image" | "link" | "category";

interface Label {
  type: LabelType;
  src?: string;
  className?: string;
  link?: string;
  children: any;
  props?: any;
}

export default function Label({ type, src, children, className, link = "/", ...props }: Label) {
  return (
    <div
      className={clsx("items-center justify-center rounded-full " + className, {
        "inline-flex py-[5px] px-[10px] gap-[10px] bg-[#0F0F0F] text-white": type === "icon",
        "inline-flex py-[5px] px-[10px] gap-[10px] text-black": type === "link",
        "flex py-[10px] px-[15px] gap-[10px] bg-white text-black border border-[#E3E3E3]": type === "image",
      })}>
      <Image
        src={`/icons/${type == "image" ? src : type == "link" ? "dot-black.svg" : "dot.png"}`}
        width={type == "image" ? 17 : 10}
        height={type == "image" ? 0 : 10}
        alt='dot'
      />
      {type == "link" ? <Link href={link}>{children}</Link> : children}
    </div>
  );
}
