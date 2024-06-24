/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Button from "../button";
import HorizontalLine from "../horizontal";
import Label from "../label";
import { categories } from "@/lib/categories";

export default function Project() {
  return (
    <section className='w-full'>
      <div className='flex justify-between items-center'>
        <Label type='icon'>Project</Label>
        <Label type='link' link='/projects'>
          See All
        </Label>
      </div>
      <div className='filter-bar gap-2 flex border border-[#E3E3E3] p-[10px] rounded-full mt-10'>
        {categories.map((category, index) => (
          <Button key={index}>{category.name}</Button>
        ))}
      </div>
      <div className='group-card-project w-full mt-10'>
        <div className='card-project border border-[#E3E3E3] bg-[#FAFAFC] shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-[50px]'>
          <div className='container px-[100px] pt-[50px]'>
            <div className='title-project text-[32px] font-medium'>Competiverse</div>
            <div className='desc-project text-[15px] text-[#636363] font-medium'>Silogy Competition - 2023</div>
            <div className='links-project flex items-center gap-5 mt-8'>
              <a href='' className='flex items-center gap-2 text-[14px] hover:underline'>
                Visit{" "}
                <span>
                  <Image src='/icons/arrow.png' width={13} height={14} quality={100} alt='arrow' />
                </span>
              </a>
              <a href='' className='flex items-center gap-2 text-[14px] hover:underline'>
                Github{" "}
                <span>
                  <Image src='/icons/arrow.png' width={13} height={14} alt='arrow' />
                </span>
              </a>
            </div>
            <div className='image-project px-0 pt-8'>
              <img src='/projects/competiverse.png' className='w-full' alt='image' />
            </div>
          </div>
        </div>
      </div>
      <HorizontalLine />
    </section>
  );
}
