import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";

export default function About() {
  return (
    <>
      <div className=" w-full h-full grid grid-flow-row bg-[url(/assets/background.png)] bg-cover bg-center bg-no-repeat">
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
        <div className="bg-[#FFFDD0] h-36 w-full flex items-center justify-center gap-16">
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
      </div>
      <Footer></Footer>
    </>
  );
}
