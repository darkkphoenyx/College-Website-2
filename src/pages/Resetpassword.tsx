import { Link } from "react-router-dom";

export default function Resetpassword() {
  return (
    <>
      <div className="h-screen w-full bg-slate-300 flex items-center justify-center">
        <form className="bg-blue-300 w-fit p-8 rounded-xl  shadow-2xl">
          <h1 className="text-4xl font-bold text-center">Reset Password</h1>
          <div className="mt-8">
            <h1 className="text-md text-left">New Password</h1>
            <input
              className="w-full rounded-md h-8 px-3 outline-none"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="">
            <h1 className="text-md text-left">Confirm Password</h1>
            <input
              className="w-full rounded-md h-8 px-3 outline-none"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <Link to={"/"}>
            <button className="bg-blue-600 mt-4 w-full py-1 rounded-md text-xl font-medium">
              Continue
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
