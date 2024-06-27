import Label from "@/components/label";
import { expertises } from "@/lib/expertises";
import HorizontalLine from "../horizontal";
import MaskText from "../mask";
import Mask from "../mask";

export default function Expertise() {
  return (
    <section className='w-full'>
      <MaskText>
        <Label type='icon'>Expertise</Label>
      </MaskText>
      <div className='mt-11 flex  sm:justify-between items-center flex-wrap gap-1 sm:gap-4'>
        {expertises.map((expertise, index) => (
          <Mask key={index}>
            <Label type='image' src={expertise.image}>
              {expertise.name}
            </Label>
          </Mask>
        ))}
      </div>
      <HorizontalLine />
    </section>
  );
}
