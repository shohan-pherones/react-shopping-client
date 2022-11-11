const Categories = () => {
  return (
    <div className="categories grid grid-cols-4 text-4xl text-center font-medium text-gray-50">
      <div className="camera h-96 row-span-2 col-span-2 flex justify-center items-center cursor-pointer hover:scale-90 duration-300">
        Camera
      </div>
      <div className="tv h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300">
        TV
      </div>
      <div className="console h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300">
        Console
      </div>
      <div className="headphones h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300">
        Headphones
      </div>
      <div className="smart-watches h-48 flex justify-center items-center cursor-pointer hover:scale-90 duration-300">
        Smart Watches
      </div>
    </div>
  );
};

export default Categories;
