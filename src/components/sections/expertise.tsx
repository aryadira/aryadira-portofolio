import Label from "@/components/label";
import { expertises } from "@/lib/expertises";
import HorizontalLine from "../horizontal";

export default function Expertise() {
  return (
    <section className='w-full'>
      <Label type='icon'>Expertise</Label>
      <div className='mt-11 flex justify-between items-center flex-wrap gap-4'>
        {expertises.map((expertise, index) => (
          <Label type='image' src={expertise.image} key={index}>
            {expertise.name}
          </Label>
        ))}
      </div>
      <HorizontalLine />
    </section>
  );
}
