export default function Card3() {
  return (
    <div className="bg-[#4e4d93] border border-white rounded-lg shadow-lg mx-auto mt-10 p-6 w-[90%] max-w-[824px]">
    
      <h1 className="text-white text-left font-clash-display text-lg md:text-xl font-medium mb-4">
        Check the layouts
      </h1>

  
      <p className="text-white text-left font-satoshi text-sm md:text-base leading-[150%] font-normal mb-8">
        As well as components and styles, we’ve built a bunch of layouts in both mobile and desktop sizes. 
        Play around with replacing and modifying the nested content blocks, and to switch device, simply use 
        the content block property ‘device’ to toggle between mobile and desktop.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <img
          src="card3p1.png"
          alt="Screenshot 1"
          className="rounded-lg w-[191px] h-[245px] md:w-[226px] md:h-[310px] object-cover"
        />
        <img
          src="card3p2.png"
          alt="Screenshot 2"
          className="rounded-lg w-[191px] h-[245px] md:w-[234px] md:h-[220px] object-cover"
        />
        <img
          src="card3p3.png"
          alt="Screenshot 3"
          className="rounded-lg w-[191px] h-[200px] md:w-[236px] md:h-[245px] object-cover"
        />
      </div>
    </div>
  );
}
