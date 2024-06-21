import Button from "../button";
import HorizontalLine from "../horizontal";
import Label from "../label";

export default function Project() {
  return (
    <section className='w-full'>
      <div className='flex justify-between items-center'>
        <Label type='icon'>Project</Label>
        <Label type='link' link='/projects'>
          See All
        </Label>
      </div>
      <div className='filter-bar flex border border-[#E3E3E3] p-[10px] rounded-full mt-10'>
        <Button>All</Button>
      </div>
      <HorizontalLine />
    </section>
  );
}
