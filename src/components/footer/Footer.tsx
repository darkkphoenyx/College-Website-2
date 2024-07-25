import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="pt-5 h-full grid grid-cols-4 w-full bg-zinc-700 text-black py-3">
        <div className="logo ml-5 pt-2 mr-32 grid grid-flow-row grid-rows-2 gap-10 w-2/3">
          <div className="w-24 h-24 mx-auto">
            <Link to={"/"}>
              <img
                className="h-24 w-24"
                src="/assets/hat.png"
                alt="logo image"
              />
            </Link>
          </div>
          <div className="social mt-20 bg-blue-200 flex items-center justify-start gap-8">
            <a href="#">
              <i className="bx bxl-facebook">
                <img
                  className="hover:scale-150"
                  src="/assets/facebook.svg"
                  alt="facebook link"
                />
              </i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter">
                <img
                  className="hover:scale-150"
                  src="/assets/twitter.svg"
                  alt="twitter link"
                />
              </i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram">
                <img
                  className="hover:scale-150"
                  src="/assets/instagram.svg"
                  alt="instagram link"
                />
              </i>
            </a>
            <a href="#">
              <i className="bx bxl-youtube">
                <img
                  className="hover:scale-150"
                  src="/assets/youtube.svg"
                  alt="youtube link"
                />
              </i>
            </a>
          </div>
        </div>
        <div className="pages text-white w-full ml-10">
          <h1 className="font-semibold text-xl">Pages</h1>
          <Link
            to={"/"}
            className="flex w-full mt-2 hover:text-slate-500 text-gray-300 "
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="flex w-full mt-2 hover:text-slate-500 text-gray-300"
          >
            About
          </Link>
          <Link
            to={"/ourTeam"}
            className="flex  w-full mt-2 hover:text-slate-500 text-gray-300"
          >
            Our Team
          </Link>
          <Link
            to={"/contact"}
            className="flex w-full mt-2 hover:text-slate-500 text-gray-300"
          >
            Contact
          </Link>
        </div>
        <div className="legal text-white w-full ml-10">
          <h1 className="font-semibold text-xl">Legal</h1>
          <Link
            to={""}
            className="flex w-full mt-2 hover:text-slate-500 text-gray-300 "
          >
            Privacy
          </Link>
          <Link
            to={""}
            className="flex w-full mt-2 hover:text-slate-500 text-gray-300"
          >
            Refund Policy
          </Link>
          <Link
            to={""}
            className="flex  w-full mt-2 hover:text-slate-500 text-gray-300"
          >
            Cookie Policy
          </Link>
        </div>
        <div className="contact text-white w-full ml-10">
          <h1 className="font-semibold text-xl">Contact</h1>
          <p className="flex w-full mt-2 hover:text-slate-500 text-gray-300">
            Mitrapark, Chabahil
          </p>
          <p className="flex w-full mt-2 hover:text-slate-500 text-gray-300">
            Kathmandu, Nepal
          </p>
          <p className="flex w-full mt-2 hover:text-slate-500 text-gray-300">
            +977 01-4579017, 4590670
          </p>
        </div>
      </div>
      <div className="copyright bg-black text-white text-center py-2">
        <p>&#169; 2024 IT College All Right Reserved</p>
      </div>
    </>
  );
}
