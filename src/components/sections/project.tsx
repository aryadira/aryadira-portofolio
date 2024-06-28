/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Button from "../button";
import HorizontalLine from "../horizontal";
import Label from "@/components/label";
import { projectCategories } from "@/lib/categories";
import Mask from "../mask";

export default function Project() {
  const projects = [
    {
      name: "Competiverse",
      category: "Web",
      desc: "Silogy Competition - 2023",
      url: "...",
      github: "...",
      img: "/projects/competiverse.png",
      stacks: [
        {
          name: "React JS",
          icon: "reactjs.png",
        },
      ],
    },
    {
      name: "Competiverse",
      category: "UI/UX Design",
      desc: "Silogy Competition - 2023",
      url: "...",
      github: "...",
      img: "/projects/competiverse.png",
      stacks: [
        {
          name: "React JS",
          icon: "reactjs.png",
        },
      ],
    },
  ];

  return (
    <section id='project' className='w-full pt-10'>
      <Mask>
        <HorizontalLine />
      </Mask>
      <Mask>
        <div className='flex justify-between items-center'>
          <Label type='icon'>Project</Label>
          <Label type='link' link='/projects'>
            See All
          </Label>
        </div>
      </Mask>
      <Mask>
        <div className='filter-bar gap-2 flex border border-[#E3E3E3] p-[10px] rounded-full mt-10'>
          {projectCategories.map((category, index) => (
            <Button key={index}>{category.name}</Button>
          ))}
        </div>
      </Mask>
      <div className='group-card-project w-full mt-10'>
        {projects.map((project, index) => (
          <Mask key={index}>
            <div className='card-project border border-[#E3E3E3] bg-[#FAFAFC] shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-[50px] mb-10 relative'>
              <div className='container px-10 md:px-[100px] pt-[50px]'>
                <div className='group-title flex items-center gap-3'>
                  <div className='title-project text-xl sm:text-[32px] font-medium'>{project.name}</div>
                  <div className='text-[12px] inline py-[2px] px-[10px] gap-[10px] bg-[#6E6BFF] text-white rounded-full '>
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
                <div className='image-project px-0 pt-8 relative'>
                  <img src={project.img} className='w-full h-full' alt='image' />
                  <div className='w-full stack-project bg-white-transparent absolute bottom-0 mb-2 sm:mb-4 flex item-cemter justify-start py-[10px] px-[10px] border border-[#E3E3E3] rounded-full backdrop-blur-md'>
                    {project.stacks.map((stack, index) => (
                      <Label type='image' src={stack.icon} key={index} className='text-xs sm:text-base'>
                        {stack.name}
                      </Label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Mask>
        ))}
      </div>
    </section>
  );
}
