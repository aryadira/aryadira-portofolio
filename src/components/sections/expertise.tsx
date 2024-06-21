import Label from "@/components/label";
import { expertises } from "@/lib/expertises";

export default function Expertise() {
  return (
    <section className='w-full'>
      <Label type='icon'>Expertise</Label>
      <div className="mt-11">
        {expertises.map((expertise, index) => (
          <Label type='image' src={expertise.image} key={index}>
            {expertise.name}
          </Label>
        ))}
      </div>
    </section>
  );
}
