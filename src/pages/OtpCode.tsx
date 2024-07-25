import { Link } from "react-router-dom";

export default function OtpCode() {
  return (
    <>
      <div className="h-screen w-full bg-slate-300 pt-40 pl-[40%]">
        <form className="bg-blue-300 w-fit p-8 rounded-xl  shadow-2xl">
          <h1 className="text-4xl font-bold text-center">Enter 4 digit pin</h1>
          <div className="mt-8">
            <h1 className="text-md text-left">OTP code</h1>
            <input
              className="w-full rounded-md h-8 px-3 outline-none"
              type="password"
              placeholder="4-digit pin"
              required
            />
          </div>
          <Link to={"/resetPassword"}>
            <button className="bg-blue-600 mt-4 w-full py-1 rounded-md text-xl font-medium">
              Continue
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
