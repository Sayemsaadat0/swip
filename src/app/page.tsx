import Carousel from "@/components/Slider";
import { slideData } from "@/libs/dummy.data";
import repeatObject from "@/libs/repeatedObject";

export default function Home() {


  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="center">
        <Carousel activeSlide={1} data={repeatObject(slideData, 3)} />
      </div>
    </main>
  );
}
