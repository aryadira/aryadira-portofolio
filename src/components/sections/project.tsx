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
      <HorizontalLine />
    </section>
  );
}
