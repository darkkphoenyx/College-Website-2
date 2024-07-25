import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-[#C4DFF2] w-full h-screen bg-gradient-to-br from-[#a984f8] to-[#C1DCEE]">
        <div className="container mx-auto">
          <div className=" grid grid-flow-col grid-cols-2 gap-20 w-full mx-auto">
            <div className="p-10 pr-20 ml-10 w-[700px] ">
              <h1 className="text-5xl font-bold mt-10">
                Unique Education System that pushes you to{" "}
                <span className="text-red-700 uppercase text-6xl">success</span>{" "}
              </h1>
              <p className="mt-8 text-justify font-semibold text-gray-800">
                This college, hailed as one of Nepal's best, focuses on
                empowering students through a commitment to inspiration,
                innovation, and discovery. It provides a comprehensive education
                designed to prepare students for successful careers, emphasizing
                deep subject knowledge and practical learning experiences such
                as excursions. With a modern and student-centered environment,
                the college offers engaging campus life and robust academic
                programs, aiming to support students in climbing the career
                ladder effectively.
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
            <div className="w-full mt-20 p-10">
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
