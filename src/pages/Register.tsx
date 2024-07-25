export default function Register() {
  return (
    <>
      <div>
        <div className=" h-max container mx-auto ">
          <div className="mx-6 grid h-full grid-cols-2 gap-2">
            <div className="bg-[#C4DFF2] text-black rounded-2xl border-gray-500 p-8 border mt-10 h-fit">
              <h1 className="text-center  font-bold text-4xl">Registration</h1>
              <form className="form text-md" >
                <div className="input-box mt-6">
                  <label className="flex w-full text-md font-semibold">
                    Full Name
                  </label>
                  <input
                    className="w-full text-black outline-none pl-2 py-1 rounded-md"
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="input-box mt-4">
                  <label className="flex w-full text-md font-semibold">
                    Email Address
                  </label>
                  <input
                    className="w-full text-black outline-none pl-2 py-1 rounded-md"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="w-full column flex mt-4">
                  <div className="input-box w-full mr-3">
                    <label className="font-semibold">Phone Number</label>
                    <input
                      className="text-black w-full outline-none pl-3 py-1 rounded-md"
                      type="number"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div className="input-box w-full ml-3">
                    <label className="flex w-full font-semibold">
                      Birth Date
                    </label>
                    <input
                      className="text-gray-400 w-full outline-none pl-3 py-1 rounded-md"
                      type="date"
                    />
                  </div>
                </div>
                {/* gender  */}
                <div className="gender-box mt-4 font-semibold">
                  <h3>Gender</h3>
                  <div className="gender-option flex gap-5">
                    <div className="gender ">
                      <input type="radio" id="check" name="gender" />
                      <label
                        className="ml-1 font-normal text-sm"
                        htmlFor="check-male"
                      >
                        Male
                      </label>
                    </div>
                    <div className="gender ">
                      <input type="radio" id="check" name="gender" />
                      <label
                        className="ml-1 font-normal text-sm"
                        htmlFor="check-female"
                      >
                        Female
                      </label>
                    </div>
                    <div className="gender ">
                      <input type="radio" id="check" name="gender" />
                      <label
                        className="ml-1 font-normal text-sm"
                        htmlFor="check-other"
                      >
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                {/* address  */}
                <div className="address mt-4 w-full font-semibold">
                  <label>Address</label>
                  <div className="column flex gap-5 w-full">
                    <div className="input-box w-full mr-1">
                      <label className="font-normal text-sm">Permanent</label>
                      <input
                        className="w-full text-black font-normal outline-none pl-3 py-1 rounded-md"
                        type="text"
                        placeholder="Enter permanent address"
                        required
                      />
                    </div>
                    <div className="input-box w-full ">
                      <label className="font-normal text-sm">Temporary</label>
                      <input
                        className="w-full text-black font-normal outline-none pl-3 py-1 rounded-md"
                        type="text"
                        placeholder="Enter temporary address"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                    <button className="bg-[#6D2DF6] p-4 text-2xl w-full mt-8 rounded-lg font-semibold text-white">
                      SUBMIT
                    </button>
                </div>
              </form>
            </div>
            <div className="my-auto mx-auto">
              <img
                src="./assets/registration-illustration.png"
                alt="registration image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
