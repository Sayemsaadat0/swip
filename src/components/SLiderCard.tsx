import Image from "next/legacy/image";

export interface SlideData {
  id: number;
  image: string;
}
const SLiderCard: React.FC<SlideData> = (props) => {
  return (
    <div className="sliderContent">
      <Image
        className="rounded-[15px]"
        src={props.image}
        alt={"slider"}
        width={400}
        height={400}
        priority
      />
    </div>
  );
};

export default SLiderCard;
