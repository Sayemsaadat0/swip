
import Carousel from "@/components/Slider";
import { slideData } from "@/libs/dummy.data";

export default function Home() {
  return (
    <main className="flex items-center justify-center border min-h-screen px-10">
        <Carousel activeSlide={2} data={slideData} />
    </main>
  );
}
