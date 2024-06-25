import Button from "../button";
import HorizontalLine from "../horizontal";
import Label from "../label";
import { artCategories } from "@/lib/categories";
import Mask from "../mask";

export default function Art() {
  return (
    <section className='w-full'>
      <Mask className='text-black-2nd font-medium text-5xl mb-10'>I love art especially with my hands.</Mask>
      <Mask>
        <div className='flex justify-between items-center'>
          <Label type='icon'>Art</Label>
          <Label type='link' link='/art'>
            See All
          </Label>
        </div>
      </Mask>
      <Mask>
        <div className='filter-bar gap-2 flex border border-[#E3E3E3] p-[10px] rounded-full mt-10'>
          {artCategories.map((category, index) => (
            <Button key={index}>{category.name}</Button>
          ))}
        </div>
      </Mask>
      <HorizontalLine />
    </section>
  );
}
