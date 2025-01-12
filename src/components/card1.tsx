export default function Card1() {
  return (
    <div className="bg-[#4e4d93] border border-white rounded-lg shadow-lg mx-auto my-10 p-6 w-[90%] max-w-[824px]">
      {/* Title Section */}
      <div className="text-white text-left font-clash-display text-lg md:text-xl font-medium mb-4">
        Use the styles
      </div>

      {/* Description Section */}
      <div className="text-white text-left font-satoshi text-sm md:text-base leading-[150%] font-normal mb-6">
        Styles in Figma mean you don’t have to repetitively enter values for typography, colors, and elevations, 
        minimizing the risk of inconsistencies and streamlining the design process.
        <br />
        <br />
        Within this template, you can find color and type styles and their definitions on the style guide page. To use them, 
        simply select them from the Figma style panel as shown below.
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center gap-4">
        <img
          className="rounded-lg w-[226px] h-[310px] object-cover"
          src="card1p1.png"
          alt="Screenshot 1"
        />
        <img
          className="rounded-lg w-[234px] h-[220px] object-cover"
          src="card1p2.png"
          alt="Screenshot 2"
        />
        <img
          className="rounded-lg w-[236px] h-[245px] object-cover"
          src="card1p3.png"
          alt="Screenshot 3"
        />
      </div>
    </div>
  );
}
