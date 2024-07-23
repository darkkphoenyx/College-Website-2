import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <div className="bg-[#C4DFF2] w-full h-screen">
        <div className="container mx-auto">
          <div className=" grid grid-flow-col grid-cols-2 gap-20 w-full mx-auto">
            <div className="p-10 pr-20 ml-10 w-[700px]">
              <h1 className="text-5xl font-bold mt-10">
                Unique Education System that pushes you to{" "}
                <span className="text-red-700 uppercase text-6xl">success</span>{" "}
              </h1>
              <p className="mt-8 text-center text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                debitis sed eveniet atque molestiae facilis blanditiis
                repudiandae minus consequatur, ratione nesciunt mollitia sint
                fuga culpa perferendis ut dicta dolorem porro.
              </p>
              <div className=" mt-10">
                <Link to={"/register"}>
                  <button className=" bg-[#6D2DF6] hover:bg-[#8665cd] text-white font-medium px-4 rounded-3xl py-1 mr-5">
                    Enroll Now
                  </button>
                </Link>
                <Link to={"/about"}>
                  <button className="border border-black hover:bg-[#8665cd] hover:border-transparent hover:text-white text-black font-medium px-4 rounded-3xl py-1 ">
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full mt-10 p-10">
              <img
                className="mx-auto rounded-3xl "
                src="/assets/designfinal1.png"
                alt="illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
