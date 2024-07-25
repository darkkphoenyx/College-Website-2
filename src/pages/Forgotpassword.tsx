import { Link } from "react-router-dom";

export default function Forgotpassword() {
  return (
    <>
      <div className="h-screen w-full bg-slate-300 pt-40 pl-[40%]">
        <form className="bg-blue-300 w-fit p-8 rounded-xl  shadow-2xl">
          <h1 className="text-4xl font-bold text-center">Forgot password?</h1>
          <h1 className="text-md text-center">
            Enter your register email for verification
          </h1>
          <input
            className="w-full mt-8 rounded-md h-8 px-3 outline-none"
            type="email"
            placeholder="abcd@gmail.com"
            required
          />
          <Link to={"/otpcode"}>
            <button className="bg-blue-600 mt-4 w-full py-1 rounded-md text-xl font-medium">
              Continue
            </button>
          </Link>
          <div>
            <p className="text-center mt-2 text-base">
              or create{" "}
              <span className="uppercase text-xs text-white underline font-semibold">
                <Link to={"/register"}>New Account</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
