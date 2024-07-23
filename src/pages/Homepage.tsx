import Login from "./Login";

export default function Homepage() {
  return (
    <div className="bg-slate-300 w-full h-screen">
      <div className="grid grid-flow-col grid-cols-2">
        <div className="mt-28 p-10">
          <h1 className="text-center text-5xl font-bold ">Unique education system that pushes you to <span className="text-red-700">success</span> </h1>
          <p className="mt-5 text-center text-gray-600 mx-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis sed eveniet atque molestiae facilis blanditiis repudiandae minus consequatur, ratione nesciunt mollitia sint fuga culpa perferendis ut dicta dolorem porro.</p>
          <div className=" mt-5 px-56">
            <button className="border-2 border-black px-4 rounded-3xl py-1 mr-5">Login</button>
            <button className="border-2 border-black px-4 rounded-3xl py-1 ">Learn more</button>
          </div>
        </div>

        <div className="h-fit w-3/4 mt-28">
          <img className="w-full h-full drop-shadow-2xl" src="./public/assets/design1.jpg" alt="illustration" />
        </div>
      </div>
    </div>
  );
}
