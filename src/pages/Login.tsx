// import { useForm, SubmitHandler } from "react-hook-form";
// import { Link } from "react-router-dom";

// type Inputs = {
//   email: string;
//   password: string;
// };

// export default function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const onSubmit: SubmitHandler<Inputs> = () => {
//     // api call
//     alert("Login functionality");
//   };

//   return (
//     <div className=" h-screen container">
//       <div className="ml-40 grid h-full ">
//         <div className="ml-10 w-fit bg-zinc-400 text-black rounded-2xl border-black py-12 px-10 border-none mt-28 h-fit drop-shadow-lg">
//             <h1 className="text-center text-5xl font-semibold text-black">
//               Login
//               </h1>
//               <div className="text-sm text-center mt-2 text-gray-700">
//                 Login to access your personal account
//               </div>
//               <form method="post" onSubmit={handleSubmit(onSubmit)}>
//                 <div className="mt-4">
//                   <label className="flex w-full text-md">
//                     Email / Username
//                   </label>
//                   <input
//                     type="email"
//                     {...register("email", {
//                       required: "Email field is required",
//                     })}
//                     className="w-full border-black border-2 bg-white h-9 rounded-xl px-3 outline-none mt-1"
//                   />
//                   <div className="custom-error text-red-500 text-xs place-content-start w-full grid mt-0.5">
//                     {errors.email && errors.email.message}
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <label className="flex w-full text-md">Password</label>
//                   <input
//                     type="password"
//                     {...register("password", {
//                       required: "Password field is required",
//                       min: 3,
//                     })}
//                     className="w-full border-2 border-black bg-white h-9 rounded-xl px-3 outline-none mt-1"
//                   />
//                   <div className="custom-error text-red-500 text-xs place-content-start w-full grid mt-0.5">
//                     {errors.password && errors.password.message}
//                   </div>
//                 </div>
//                 <div className="remeber-me mt-2">
//                   <label htmlFor="remberMe" className="font-normal">
//                     <input type="checkbox" />
//                       Remember me
//                   </label>
//                   <Link
//                     to={"forget-passsword"}
//                     className="ml-24 place-content-end font-medium"
//                   >
//                     Forget Password ?
//                   </Link>
//                 </div>
//                 <div>
//                   <button
//                     type="submit"
//                     className="mt-5 w-full text-xl font-semibold rounded-xl h-9 hover:bg-blue-500 transition-all bg-blue-600"
//                   >
//                     Login
//                   </button>
//                 </div>
//                 <div className="ml-16 mt-1">
//                   <p>Don't have account?{" "}<a className="font-medium" href="#">Register</a></p>
//                 </div>
//               </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import LoginComponent from "../components/input/LoginComponent";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="h-screen w-screen bg-slate-300">
      <div className="flex grid-flow-row h-full bg-[url(./assets/loginBackground.png)] bg-no-repeat bg-cover pl-36 bg-center ">
        <div className=" w-96 pt-10 pb-16 bg-slate-400 border border-gray-800 rounded-xl p-8 mt-24 ml-20 h-fit drop-shadow-xl ">
          <h1 className="text-center text-5xl font-bold mb-12 text-black">
            Login
          </h1>
          <LoginComponent placeholder="Username"></LoginComponent>
          <LoginComponent
            placeholder="Password"
            type="password"
          ></LoginComponent>
          <div className="grid grid-flow-col mt-1">
            <input className="bg-white ml-1 " type="checkbox" />
            <label className="pr-5  text-black" htmlFor="#">
              Remember Me
            </label>
            <a className="pl-5 pr-1 underline text-black" href="#">
              Forget Password?
            </a>
          </div>
          <div className="mt-5 flex items-center justify-center border border-[#D14F2B]/5 text-white hover:bg-[#7f5ccb] rounded-3xl bg-[#6D2DF6]/90 mx-1">
            <button className=" font-semibold hover:font-semibold text-xl p-2 px-10 rounded-xl ">
              Login
            </button>
          </div>
          <div className="flex items-center justify-center mt-6 font-normal">
            <span>Don't have an account?</span>
            <Link className="ml-2 underline text-black font-semibold" to="/register">
              Register
            </Link>
          </div>
        </div>
        <div className=" h-3/5 w-2/4 ml-32 mt-24 px-10">
          <img className="w-full h-full rounded-3xl drop-shadow-2xl"  src="/assets/designlogin.png" alt="" />
        </div>
      </div>
    </div>
  );
}