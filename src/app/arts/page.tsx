/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Mask from "@/components/mask";
import Art from "@/components/sections/art";

export default function ArtPage() {
  return (
    <div id='project' className='w-full pt-[100px] mt-[100px]'>
      <div className='intro-title text-[32px]'>
        <div className='text-black-2nd font-medium flex'>
          <Mask className='text-black font-bold'>Art.</Mask>
          <Mask className='star ml-2'>
            <Image src='/icons/explode.png' width={40} height={45} alt='star' />
          </Mask>
        </div>
        <Mask className='text-black-2nd font-medium'>art as a healing and imagining.</Mask>
      </div>
      <Art />
    </div>
  );
}
