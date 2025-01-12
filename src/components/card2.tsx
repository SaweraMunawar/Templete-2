export default function Card2() {
  return (
    <div className="bg-[#4e4d93] border-l-2 border-white rounded-lg shadow-lg overflow-hidden mx-auto mt-10 p-6 w-[90%] max-w-[824px]">
  
      <div className="text-white text-left font-clash-display text-xl md:text-2xl font-medium mb-6">
        Use the components
      </div>

      
      <div className="text-white text-left font-satoshi text-sm md:text-base leading-[150%] font-normal mb-8">
        There’s a bunch of pre-configured components for you to use in this free
        template. Simply go to the Style Guide page, and under the components header, 
        you can see everything included.
        <br />
        <br />
        Buttons, steppers, filter options, and more for you to integrate into your screens 
        and modify to your tastes and requirements.
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="product-card bg-white text-black rounded-lg shadow-md p-4">
          <img src="card2p1.png" alt="The Dandy Chair" className="rounded-lg mb-4" />
          <h3 className="text-sm font-semibold">The Dandy Chair</h3>
          <p className="text-gray-700">£250</p>
        </div>

        <div className="product-card bg-white text-black rounded-lg shadow-md p-4">
          <img src="card2p2.png" alt="Small Tables" className="rounded-lg mb-4" />
          <h3 className="text-sm font-semibold">Small Tables</h3>
          <p className="text-gray-700">£250</p>
        </div>

        <div className="flex flex-col gap-4">
        
          <button className="bg-white text-black rounded px-2 py-2 shadow-md">Button</button>
          <button className="bg-blue-500 text-white rounded px-2 py-2 shadow-md">Button</button>
          <button className="bg-gray-500 text-white rounded px-2 py-2 shadow-md">Button</button>
          <button className="bg-black bg-opacity-50 text-white rounded px-4 py-2 shadow-md">Button</button>
        </div>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2 text-white">Furniture</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2 text-white">Homeware</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2 text-white">Vases</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2 text-white">Components</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2 text-white">Products</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2 text-white">StyleGuide</span>
        </label>
      </div>
    </div>
  );
}
