import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import PopularCourses from "../components/cards/PopularCourses";

export default function About() {
  return (
    <>
      <div className=" w-full h-max grid grid-flow-row ">
        <div className="bg-[url(/assets/background.png)] bg-cover bg-no-repeat">
          <div className="container mx-auto ">
            <div className="w-full grid grid-flow-col grid-cols-2">
              <div className="py-32 pr-10 w-[800px] pl-20">
                <p className="italic pl-1">
                  Inspiration, Innovation and Discovery.
                </p>
                <h1 className="text-6xl font-semibold">
                  <span className="text-red-600 font-extrabold">
                    Empowering students{" "}
                  </span>
                  with Nepal's Best College.
                </h1>
                <div className="w-full mt-4">
                  <p className="w-[88%]">
                    Any successful career starts with good education. Together
                    with us you will have deeper knowledge of the subjects that
                    will be especially useful for you when climbing the career
                    ladder.
                  </p>
                </div>
                <div className="mt-5">
                  <Link to="/contact">
                    <button className="bg-[#FEB856] text-white p-5 shadow-2xl rounded-xl border-2 border-[#FEB856] font-serif font-semibold text-2xl hover:bg-white hover:text-yellow-500">
                      Sign up for Excursion
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F7F6F2] h-32 w-full flex items-center justify-center gap-16">
          <div className="flex items-center justify-center mx-5">
            <img
              className="h-16 w-16"
              src="./assets/hat.png"
              alt="graduation_cap"
            />
            <div>
              <h1 className="uppercase pl-2 text-black font-semibold text-2xl">
                best college in nepal
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center mx-5">
            <img className="h-12 w-16 " src="./assets/bell.png" alt="bell" />
            <div>
              <h1 className="uppercase pl-2 text-black font-semibold text-2xl">
                learn courses online
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center mx-5">
            <img
              className="h-11 w-16"
              src="./assets/bookStand.png"
              alt="book stand"
            />
            <div>
              <h1 className="uppercase pl-2 text-black font-semibold text-2xl">
                book library & store
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full bg-white">
          <div className="w-full container mx-auto bg-white grid grid-flow-col grid-cols-2 py-20 gap-20 ">
            <div className="w-full ml-20 px-20">
              <h1 className="text-4xl mt-5 text-[#4F3F39] font-serif">
                A Few Words About the University
              </h1>
              <div className="h-1 bg-yellow-400 mt-5 w-20"></div>
              <p className="text-sm mt-5  text-gray-500">
                This college, hailed as one of Nepal's best, focuses on
                empowering students through a commitment to inspiration,
                innovation, and discovery. It provides a comprehensive education
                designed to prepare students for successful careers, emphasizing
                deep subject knowledge and practical learning experiences such
                as excursions. With a modern and student-centered environment,
                the college offers engaging campus life and robust academic
                programs, aiming to support students in climbing the career
                ladder effectively
              </p>
              <div>
                <button className="border border-[#504A42]/30 px-8 py-3 mt-4 rounded-lg hover:bg-[#504A42] font-serif text-[#504A42] hover:text-white">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full pr-20 ">
              <img
                className="h-96 w-96 mx-auto rounded-2xl shadow-2xl"
                src="/assets/aboutus1.png"
                alt="about us page 1"
              />
            </div>
          </div>
        </div>
        <PopularCourses></PopularCourses>
        <div className="container mx-auto text-center my-20">
          <h1 className="text-[#4F3F39] text-4xl font-serif">Statistics</h1>
          <div className="mt-5 w-2/3 mx-auto">
            <p className="text-[#4F3F39]/80 text-sm">
              College was founded on the principle that by pursuing big ideas
              and sharing what we learn, we make the world a better place. For
              more than 15 years, we haven’t strayed from that vision.
            </p>
            <div className="grid grid-cols-4 mt-8 mb-5">
              <div>
                <h1 className="text-5xl text-yellow-500 font-serif">97%</h1>
                <p className="italic font-serif text-sm text-[#4F3F39]/90">
                  Graduates
                </p>
              </div>
              <div>
                <h1 className="text-5xl text-yellow-500 font-serif">30+</h1>
                <p className="italic font-serif text-sm text-[#4F3F39]/90">
                  Certified Teachers
                </p>
              </div>
              <div>
                <h1 className="text-5xl text-yellow-500 font-serif">10</h1>
                <p className="italic font-serif text-sm text-[#4F3F39]/90">
                  Student Campuses
                </p>
              </div>
              <div>
                <h1 className="text-5xl text-yellow-500 font-serif">6510</h1>
                <p className="italic font-serif text-sm text-[#4F3F39]/90">
                  Students
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="backgroundImage bg-[url(/assets/aboutBackground2.png)] h-96 bg-cover bg-center bg-no-repeat">
          {/* <img src="/assets/aboutBackground2.png" alt="background image" /> */}
        </div>
        <div className="carosel mx-auto max-w-4xl bg-white text-center py-20">
          <div className="group1 container grid grid-cols-3 mx-auto gap-5">
            <div className="image1">
              <img src="/assets/carosel1.png" alt="carosel1" />
            </div>
            <div className="image2">
              <img src="/assets/carosel2.png" alt="carosel2" />
            </div>
            <div className="image3">
              <img src="/assets/carosel3.png" alt="carosel3" />
            </div>
          </div>
          <div className="group2 container grid grid-cols-3 mx-auto gap-5 mt-5">
            <div className="image4">
              <img src="/assets/carosel4.png" alt="carosel4" />
            </div>
            <div className="image5">
              <img src="/assets/carosel5.png" alt="carosel5" />
            </div>
            <div className="image6">
              <img src="/assets/carosel6.png" alt="carosel6" />
            </div>
          </div>
        </div>
        <div className=" h-[500px] bg-[url(/assets/aboutStudentReview.png)] bg-cover bg-center bg-no-repeat"></div>
      </div>
      <Footer></Footer>
    </>
  );
}
