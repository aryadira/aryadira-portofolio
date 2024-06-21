import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className='flex justify-between py-6'>
      <div className='logo font-bold'>@aryaadrh</div>
      <nav className='nav-group flex items-center'>
        <div className='nav-list flex gap-6 mr-[34px]'>
          <li className='list-none'>
            <a href='#home'>Home</a>
          </li>
          <li className='list-none'>
            <a href='#project'>Project</a>
          </li>
          <li className='list-none'>
            <a href='#art'>Art</a>
          </li>
          <li className='list-none'>
            <a href='#about'>About</a>
          </li>
        </div>
        <div className='nav-social-button flex gap-2 bg-[#EEEEEE] p-[10px] rounded-full'>
          <Image src='/icons/linkedin.png' alt='linkedin' width={24} height={24} quality={95} />
          <Image src='/icons/instagram.png' alt='instagram' width={24} height={24} quality={95} />
          <Image src='/icons/github.png' alt='github' width={24} height={24} quality={95} />
        </div>
      </nav>
    </header>
  );
}
