import Image from "next/image";
import { Flaviotte } from "@/utils/custom-font";
import HorizontalLine from "../horizontal";
import Label from "../label";
import Mask from "../mask";

export default function Intro() {
  return (
    <section id='intro' className='w-full pt-[100px] mt-[100px]'>
      <div className='intro-title text-[32px]'>
        <div className='text-black-2nd font-medium flex'>
          <Mask>
            <span className={Flaviotte.className}> Hello</span>, i’m <span className='font-bold text-black'>arya dira hernanda</span>
          </Mask>
          <Mask className='star ml-2'>
            <Image src='/icons/star.png' width={40} height={45} alt='star' />
          </Mask>
        </div>
        <Mask className='text-black-2nd font-medium'>a person who excited with coding and design</Mask>
      </div>
      <Mask className='resume-link mt-10'>
        <a href='...' className='inline-flex items-center gap-1 hover:underline font-medium'>
          Resume{" "}
          <span>
            <Image src={"/icons/arrow.png"} width={12} height={12} alt='arrow' />
          </span>
        </a>
      </Mask>
      <HorizontalLine />
    </section>
  );
}
