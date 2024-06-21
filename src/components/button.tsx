import React from "react";

export default function Button({ children }: any) {
  return <div className='flex py-[10px] px-[15px] gap-[10px] bg-white hover:bg-[#EEEEEE] text-black border border-[#E3E3E3] rounded-full cursor-pointer'>{children}</div>;
}
