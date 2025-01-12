export default function Card4() {
  return (
    <div className="bg-[#4e4d93] border border-white rounded-lg shadow-lg mx-auto mt-10 p-6 w-[90%] max-w-[824px]">
      
      <h1 className="text-white text-left font-clash-display text-lg md:text-xl font-medium mb-4">
        Use the content blocks
      </h1>

      
      <p className="text-white text-left font-satoshi text-sm md:text-base leading-[150%] font-normal mb-8">
        We’ve built out a multitude of content blocks for you to use in your landing pages. From hero sections, forms, CTAs to pricing sections. Everything you need to get started building polished, modern landing pages.
      </p>

      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-4 gap-4">
        <img
          src="card4p1.png"
          alt="Content Block Preview"
          className="w-full md:w-[365px] h-auto rounded-lg"
        />
        <div className="text-center md:text-left">
          <h2 className="font-clash-display text-base md:text-lg text-black mb-2">
            Join the club and get the benefits
          </h2>
          <p className="font-satoshi text-sm text-black leading-[150%]">
            Sign up for our newsletter and receive exclusive offers on new ranges,
            sales, pop-up stores, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
