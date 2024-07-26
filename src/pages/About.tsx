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
              <h1 className="uppercase pl-2 text-black font-semibold text-xl">
                best college in nepal
              </h1>
              <div className="pl-2 mt-2 font-semibold text-yellow-500 hover:text-amber-900 transition-all font-serif text-sm">
                <Link to="#">View More</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mx-5">
            <img className="h-14 w-16 " src="./assets/bell.png" alt="bell" />
            <div>
              <h1 className="uppercase pl-2 text-black font-semibold text-xl">
                learn courses online
              </h1>
              <div className="pl-2 mt-2 font-semibold text-yellow-500 hover:text-amber-900 transition-all font-serif text-sm">
                <Link to="#">View More</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mx-5">
            <img
              className="h-14 w-16"
              src="./assets/bookStand.png"
              alt="book stand"
            />
            <div>
              <h1 className="uppercase pl-3 text-black font-semibold text-xl">
                book library & store
              </h1>
              <div className="pl-3 mt-2 font-semibold text-yellow-500 hover:text-amber-900 transition-all font-serif text-sm">
                <Link to="#">View More</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white">
          <div className="w-full container mx-auto bg-white grid grid-flow-col grid-cols-2 py-20 gap-20 ">
            <div className="w-full ml-20 px-20">
              <h1 className="text-4xl mt-5 text-[#4F3F39] font-serif">
                A Few Words About the College
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
        <div className="w-full bg-[#F7F6F2]">
          <PopularCourses></PopularCourses>
        </div>
        <div className="container mx-auto bg-white text-center my-20">
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
        <div className="backgroundImage text-center my-auto bg-[url(/assets/aboutBackground2.png)] h-96 bg-cover bg-center bg-no-repeat">
          <p className="text-white italic text-xl font-serif mt-24">
            Change your life today!
          </p>
          <h1 className="mt-6 text-4xl text-white font-serif ">
            Get Unlimited Access to Premium Courses
          </h1>
          <div className="mt-5">
            <Link to="/contact">
              <button className="bg-[#FEB856] text-white px-10 py-4 shadow-2xl rounded-xl border-2 border-[#FEB856] font-serif text-lg hover:bg-white hover:text-yellow-500">
                Start With Us
              </button>
            </Link>
          </div>
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
        <div className=" h-[550px] bg-[url(/assets/aboutStudentReview.png)] bg-cover bg-center bg-no-repeat">
          <div className="container mx-auto text-center mt-16">
            <h1 className="text-5xl text-white font-serif ">Testimonials</h1>
            <p className="text-white italic text-xl font-serif">
              See what people say about our wonderful college
            </p>
            <div className=" mt-7 mx-auto px-10 w-3/5 grid grid-flow-col ">
              <div className=" mr-10">
                <span className="text-7xl font-serif inline-block text-white mx-auto">
                  "
                </span>
              </div>
              <div className="pr-20">
                <p className="mx-auto float-start  text-white text-2xl italic font-serif text-start">
                  When you work full-time while studying, you need to sacrifice
                  personal time, which meant that I took my studies seriously.
                  My ambition was not only to complete my degree successfully
                  but to make the best out of the time spent studying.
                </p>
              </div>
            </div>
            <h1 className="text-2xl mt-8 text-white font-serif ">
              Hari Bahadur Thapa
            </h1>
            <p className="text-white/80 italic">
              Diploma for Graduates in Management, Nepal
            </p>
          </div>
        </div>
        <div className="teacherCarosel container mx-auto w-full text-center py-20">
          <h1 className="text-[#4F3F39] text-4xl font-serif">Our Teachers</h1>
          <p className="text-[#4F3F39]/60 text-lg italic font-serif">
            Best Mentors of Our College
          </p>
          <div className="teachersList grid grid-cols-4 mx-auto">
            <div className="teacher1 card">
              <img src="/assets/teacher1.png" alt="teacher 1" />
              <a href="#">
                <h1 className="mt-3 text-2xl text-[#4F3F39] font-serif hover:text-yellow-500">
                  Dr. Ram Shrestha
                </h1>
              </a>
              <p className="mt-1 font-serif italic text-[#4F3F39]/80">
                Phd in Botany
              </p>
            </div>
            <div className="teacher2 card">
              <img src="/assets/teacher2.png" alt="teacher 2" />
              <a href="#">
                <h1 className="mt-3 text-2xl text-[#4F3F39] font-serif hover:text-yellow-500">
                  Lawra Richards
                </h1>
              </a>
              <p className="mt-1 font-serif italic text-[#4F3F39]/80">
                Molecular Physics
              </p>
            </div>
            <div className="teacher3 card">
              <img src="/assets/teacher3.png" alt="teacher 3" />
              <a href="#">
                <h1 className="mt-3 text-2xl text-[#4F3F39] font-serif hover:text-yellow-500">
                  Genelia D'soza
                </h1>
              </a>
              <p className="mt-1 font-serif italic text-[#4F3F39]/80">
                English Literature
              </p>
            </div>
            <div className="teacher4 card">
              <img src="/assets/teacher4.png" alt="teacher 4" />
              <a href="##">
                <h1 className="mt-3 text-2xl text-[#4F3F39] font-serif hover:text-yellow-500">
                  Victoria Stones
                </h1>
              </a>
              <p className="mt-1 font-serif italic text-[#4F3F39]/80">
                Micro-Finance and Marketing Head
              </p>
            </div>
          </div>
        </div>
        <div className="event w-full bg-[#F7F6F2] py-24">
          <div className="container mx-auto text-center">
            <h1 className="text-[#4F3F39] text-4xl font-serif">Our Events</h1>
            <p className="text-[#4F3F39]/60 text-lg italic font-serif">
              Upcoming Education Events to feed your brain.
            </p>
          </div>
          <div className="eventCarosel mt-5 container w-fit gap-5 mx-auto grid grid-cols-3">
            <div className="event1 w-fit text-center bg-white pb-10 rounded-2xl shadow-2xl">
              <img
                className="rounded-t-2xl"
                src="/assets/event1.png"
                alt="event 1"
              />
              <h1 className="mt-5 text-2xl text-[#4F3F39] font-serif hover:text-yellow-500">
                Global Trigonometry Seminar
              </h1>
              <p className="mt-2 text-sm font-serif italic text-gray-400">
                November 10, 2023
              </p>
              <div className="mt-2">
                <button className="border border-[#504A42]/30 px-8 py-3 mt-4 rounded-lg hover:bg-[#504A42] font-serif text-[#504A42] hover:text-white">
                  Read More
                </button>
              </div>
            </div>
            <div className="event2 w-fit text-center bg-white pb-10 rounded-2xl shadow-2xl ">
              <img
                className="rounded-t-2xl"
                src="/assets/event2.png"
                alt="event 2"
              />
              <h1 className="mt-5 text-2xl text-[#4F3F39] font-serif hover:text-yellow-500">
                New Students! Welcome!
              </h1>
              <p className="mt-2 text-sm font-serif italic text-gray-400">
                November 16, 2023
              </p>
              <div className="mt-2">
                <button className="border border-[#504A42]/30 px-8 py-3 mt-4 rounded-lg hover:bg-[#504A42] font-serif text-[#504A42] hover:text-white">
                  Read More
                </button>
              </div>
            </div>
            <div className="event3 w-fit text-center bg-white pb-10 rounded-2xl shadow-2xl ">
              <img
                className="rounded-t-2xl"
                src="/assets/event3.png"
                alt="event 3"
              />
              <h1 className="mt-5 text-2xl text-[#4F3F39] font-serif hover:text-yellow-500">
                Graduation Ceremony
              </h1>
              <p className="mt-2 text-sm font-serif italic text-gray-400">
                November 24, 2023
              </p>
              <div className="mt-2">
                <button className="border border-[#504A42]/30 px-8 py-3 mt-4 rounded-lg hover:bg-[#504A42] font-serif text-[#504A42] hover:text-white">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="collegeMap">
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.158525231676!2d85.3420219109075!3d27.712391325169932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1970a9ff7041%3A0xfcaa45db29104458!2sTexas%20International%20College!5e0!3m2!1sen!2snp!4v1721697097685!5m2!1sen!2snp"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
