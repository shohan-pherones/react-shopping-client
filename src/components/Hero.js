import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero grid grid-cols-1 lg:grid-cols-4 bg-gray-200 py-5 sm:py-0">
      <div className="hero-l h-96 overflow-hidden lg:flex items-center justify-center hidden">
        <img
          src="https://res.cloudinary.com/dy28teazb/image/upload/v1668160692/React%20Shopping/Hero/ps4_oagfhk.png"
          alt="PS4"
          className="w-full block"
        />
      </div>
      <div className="hero-md col-span-2 h-96 overflow-hidden text-center flex flex-col gap-5 justify-center items-center px-5 lg:px-0">
        <h1 className="text-5xl lg:text-7xl font-black">
          Dive into the{" "}
          <span className="text-cyan-500 hover:text-rose-500 duration-300">
            tech
          </span>
          verse.
        </h1>
        <p className="text-lg">
          Technology is a gift of God. After the gift of life it is perhaps the
          greatest of God's gifts. It is the mother of civilizations, of arts
          and of sciences.
        </p>
        <Link to="shop">
          <button className="bg-gray-700 text-gray-50 px-6 py-3 uppercase tracking-widest font-medium hover:bg-cyan-500 duration-300">
            Shop now
          </button>
        </Link>
      </div>
      <div className="hero-r h-96 overflow-hidden lg:flex items-center justify-center hidden">
        <img
          src="https://res.cloudinary.com/dy28teazb/image/upload/v1668160693/React%20Shopping/Hero/tv_xzaxqw.png"
          alt="TV"
          className="w-full block"
        />
      </div>
    </div>
  );
};

export default Hero;
