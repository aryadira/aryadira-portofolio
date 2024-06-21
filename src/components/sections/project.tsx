import HorizontalLine from "../horizontal";
import Label from "../label";

export default function Project() {
  return (
    <section className='w-full'>
      <div className="flex justify-between items-center">
        <Label type='icon'>Project</Label>
        <Label type="link" link="/projects">See All</Label>
      </div>
      <HorizontalLine />
    </section>
  );
}
