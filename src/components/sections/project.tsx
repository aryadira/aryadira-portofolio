/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Button from "../button";
import HorizontalLine from "../horizontal";
import Label from "@/components/label";
import { categories } from "@/lib/categories";

export default function Project() {
  const projects = [
    {
      name: "Competiverse",
      category: "Web",
      desc: "Silogy Competition - 2023",
      url: "...",
      github: "...",
      img: "/projects/competiverse.png",
    },
    {
      name: "Competiverse",
      category: "UI/UX Design",
      desc: "Silogy Competition - 2023",
      url: "...",
      github: "...",
      img: "/projects/competiverse.png",
    },
  ];


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
        {projects.map((project, index) => (
          <div key={index} className='card-project border border-[#E3E3E3] bg-[#FAFAFC] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-[50px] mb-10'>
            <div className='container px-[100px] pt-[50px]'>
              <div className='group-title flex items-center gap-3'>
                <div className='title-project text-[32px] font-medium'>{project.name}</div>
                <div className='text-[12px] inline-flex py-[5px] px-[10px] gap-[10px] bg-[#6E6BFF] text-white items-center justify-center rounded-full '>
                  {project.category}
                </div>
              </div>
              <div className='desc-project text-[15px] text-[#636363] font-medium'>{project.desc}</div>
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
                <img src={project.img} className='w-full' alt='image' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <HorizontalLine />
    </section>
  );
}
