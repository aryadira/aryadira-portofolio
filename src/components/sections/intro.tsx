import Image from "next/image";
import { Flaviotte } from "@/utils/custom-font";

export default function Intro() {
  return (
    <section id='intro' className='w-full pt-[100px]'>
      <div className='intro-title text-[32px]'>
        <div className='text-black-2nd font-medium'>
          <span className={Flaviotte.className}> Hello</span>, i’m <span className='font-bold text-black'>arya dira hernanda</span>
        </div>
        <div className='text-black-2nd font-medium'>a person who excited with coding and design</div>
      </div>
      <div className='resume-link mt-10'>
        <a href='...' className='flex items-center gap-1 hover:underline'>
          Resume{" "}
          <span>
            <Image src={"/icons/arrow.png"} width={12} height={12} alt='arrow'></Image>
          </span>
        </a>
      </div>
    </section>
  );
}
