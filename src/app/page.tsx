import Card1 from "@/components/card1";
import Card2 from "@/components/card2";
import Card3 from "@/components/card3";
import Card4 from "@/components/card4";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 lg:w-auto lg:flex p-2">
          <Card1 />
          <Card2/>
        </div>
        
        <div className="w-full sm:w-1/2 lg:w-auto lg:flex p-2">
          <Card3 />
          <Card4/>
        </div>
      </div>
    </div>
  );
}
