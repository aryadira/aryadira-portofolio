/* eslint-disable @next/next/no-img-element */
"use client";
import Container from "@/layouts/container";
import Mask from "./mask";
import HorizontalLine from "./horizontal";

export default function Footer() {
  return (
    <footer className='bg-white w-full pt-20'>
      <Mask>
        <HorizontalLine />
      </Mask>
      <Container className='flex flex-col justify-between gap-y-48 pt-10'>
        <div>
          <Mask className='text-black-2nd font-medium text-5xl mb-5'>Let’s Drink Coffee with Me</Mask>
          <div className='gmail-text text-xl text-[#4E4E4E] font-medium flex items-center'>
            <span className='mr-2'>
              <img src='/icons/gmail.png' alt='gmail' />
            </span>
            <p>aryadyra27@gmail.com</p>
          </div>
        </div>
        <div className='footer-copyright flex justify-between items-center pt-5 pb-10'>
          <div className='art-from text-base sm:text-lg text-[#4E4E4E] font-medium flex items-center justify-between'>
            <p>Made with</p>
            <span className='mx-2'>
              <img src='/icons/love.png' alt='gmail' />
            </span>
            <p>by @aryaadrh</p>
          </div>
          <div className='art-from text-base sm:text-lg text-[#4E4E4E] font-medium flex items-center'>
            <p>@2024</p>
          </div>
          <div className='art-from text-base sm:text-lg text-[#4E4E4E] font-medium sm:flex items-center hidden'>
            <p>East Jakarta, Indonesia</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
