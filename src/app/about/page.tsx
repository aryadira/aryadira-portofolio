"use client";
import Image from "next/image";
import Mask from "@/components/mask";
import Label from "@/components/label";
import HorizontalLine from "@/components/horizontal";

export default function page() {
  return (
    <div id='about' className='w-full pt-[200px]'>
      <div className='flex justify-between items-center'>
        <div className='left-side w-[40%]'>
          <div className='intro-title text-[32px]'>
            <div className='text-black-2nd font-medium flex leading-loose'>
              <Mask>
                <span className='font-bold text-black text-[40px]'>Arya Dira Hernanda</span>
              </Mask>
            </div>
            <Mask className='text-black-2nd font-medium text-2xl'>Hello i’m Arya. I’m a passionate in Software Development and Design. </Mask>
          </div>
          <Mask className='resume-link mt-10'>
            <a href='...' className='inline-flex items-center gap-1 hover:underline font-medium'>
              Resume{" "}
              <span>
                <Image src={"/icons/arrow.png"} width={12} height={12} alt='arrow' />
              </span>
            </a>
          </Mask>
        </div>
        <div className='right-side'>
          <Mask>
            <Image src={"/about/left-side-profile.png"} width={191} height={100} alt='arrow' className='inline mx-1' />
            <Image src={"/about/mid-side-profile.png"} width={226} height={100} alt='arrow' className='inline mx-1' />
            <Image src={"/about/right-side-profile.png"} width={154} height={100} alt='arrow' className='inline mx-1' />
          </Mask>
        </div>
      </div>
      <div id='education' className='w-full pt-10'>
        <Mask>
          <HorizontalLine />
        </Mask>
        <Mask>
          <Label type='icon'>Education</Label>
        </Mask>
        <div className='flex items-center justify-between w-full py-12'>
          <div className='edu-title text-[32px]'>
            <div className='text-black-2nd font-medium flex'>
              <Mask>
                <span className='font-bold text-black text-3xl'>SMK Negeri 26 Jakarta</span>
              </Mask>
            </div>
            <Mask className='text-black-2nd font-medium text-base'>2021 - 2025 </Mask>
          </div>
          <div className='major'>
            <Mask className='text-black-2nd font-medium text-2xl'>Sistem Informatika Jaringan dan Aplikasi</Mask>
          </div>
        </div>
      </div>
      <div id='experience' className='w-full pt-10'>
        <Mask>
          <HorizontalLine />
        </Mask>
        <Mask>
          <Label type='icon'>Experience</Label>
        </Mask>
        <div className='flex items-center justify-between w-full py-12'>
          <div className='edu-title text-[32px]'>
            <div className='text-black-2nd font-medium flex'>
              <Mask>
                <span className='font-bold text-black text-3xl'>Anggada Duta Wisesa (adw)</span>
              </Mask>
            </div>
            <Mask className='text-black-2nd font-medium text-base'>
              2024 - 2025{" "}
              <span>
                <div className='text-[12px] inline py-[2px] px-[8px] bg-[#6E6BFF] text-white rounded-full '>internship</div>
              </span>
            </Mask>
          </div>
          <div className='major'>
            <Mask className='text-black-2nd font-medium text-2xl'>PHP Developer</Mask>
          </div>
        </div>
      </div>
    </div>
  );
}
