/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Mask from "@/components/mask";
import Project from "@/components/sections/project";

export default function page() {
  return (
    <div id='project' className='w-full pt-[200px]'>
      <div className='intro-title text-[32px]'>
        <div className='text-black-2nd font-medium flex'>
          <Mask className='text-black font-bold'>Project.</Mask>
          <Mask className='star ml-2'>
            <Image src='/icons/target.png' width={40} height={45} alt='star' />
          </Mask>
        </div>
        <Mask className='text-black-2nd font-medium'>simple project with simple effort.</Mask>
      </div>
      <Project />
    </div>
  );
}
