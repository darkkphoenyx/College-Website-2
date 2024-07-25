import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="grid ">
        {/* bottom-0 left-0 right-0 position-fixed */}
        <div className=" bg-zinc-700 text-black w-full h-56 py-3">
          <div className="pt-5 h-full grid grid-cols-4">
            <div className="logo ml-5 pt-2">
              <div className="w-24 h-24">
                <Link to={"/"}>
                  <img
                    className="h-full w-full"
                    src="/assets/hat.png"
                    alt="logo image"
                  />
                </Link>
              </div>
              <div className="social">
                <a href="#">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="#">
                  <i className="bx bxl-youtube"></i>
                </a>
              </div>
            </div>
            <div className="page">
              <h1 className="text-2xl font-medium text-[#fff]">Page</h1>
              <Link to={"/"} className="flex w-full mt-2 ">
                <label className="hover:text-slate-500 font-semibold">
                  Home
                </label>
              </Link>
              <Link to={"/about"} className="flex w-full mt-2 ">
                <label className="hover:text-slate-500 font-semibold">
                  About Us
                </label>
              </Link>
              <Link to={"/ourTeam"} className="flex w-full mt-2 ">
                <label className="hover:text-slate-500 font-semibold">
                  Our Team
                </label>
              </Link>
              <Link to={"/contact"} className="flex w-full mt-2 ">
                <label className="hover:text-slate-500 font-semibold">
                  Contact
                </label>
              </Link>
            </div>
            <div className="legal">
              <h1 className="text-2xl font-medium text-[#fff]">Legal</h1>
              <a href="#" className="flex w-full mt-2">
                <label className="hover:text-slate-500 font-semibold">
                  Privacy
                </label>
              </a>
              <a href="#" className="flex w-full mt-2 ">
                <label className="hover:text-slate-500 font-semibold">
                  Refund Policy
                </label>
              </a>
              <a href="#" className="flex w-full mt-2 ">
                <label className="hover:text-slate-500 font-semibold">
                  Cookie Policy
                </label>
              </a>
            </div>
            <div className="contact">
              <h1 className="text-2xl font-medium text-[#fff]">Contact</h1>
              <p className="hover:text-slate-500 font-semibold">Nepal</p>
              <p className="hover:text-slate-500 font-semibold">
                Mitrapark, Kathmandu
              </p>
              <p className="hover:text-slate-500 font-semibold">
                +977 01-4579017, 4590670
              </p>
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className="copyright bg-black text-white text-center py-2">
          <p>&#169; 2024 IT College All Right Reserved</p>
        </div>
      </div>
    </>
  );
}
