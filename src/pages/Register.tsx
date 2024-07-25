import axios from "axios";
import { useState } from "react";
import { basePath } from "../API/Path";
export default function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [temAddress, setTemAddress] = useState("");
  const [perAddress, setPerAddress] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    const data = {
      fullName: fullname,
      email: email,
      phoneNumber: phone,
      birthDate: dob,
      gender: gender,
      permanentAddress: perAddress,
      temporaryAddress: temAddress,
    };

    axios
      .post(basePath + studentRegistration, data)
      .then(function (response) {
        // handle success
        console.log(response.data.message);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        alert("Data posted");
      });
  };

  return (
    <>
      <div>
        <div className=" h-max container mx-auto  ">
          <div className="mx-6 grid h-full grid-cols-2 gap-2">
            <div className="bg-[#C4DFF2] text-black rounded-2xl p-8 mt-10 h-fit bg-gradient-to-br from-[#C4DFEF] to-[#ffffff] shadow-2xl">
              <h1 className="text-center text-[#6A2DE9]  font-bold text-4xl">
                Registration
              </h1>
              <form
                className="form text-md"
                onSubmit={(e) => formSubmit(e)}
                method="post"
              >
                <div className="input-box mt-6">
                  <label className="flex w-full text-md font-semibold">
                    Full Name
                  </label>
                  <input
                    className="w-full text-black outline-none pl-2 py-1 rounded-md"
                    type="text"
                    placeholder="Enter your full name"
                    onChange={(e) => setFullname(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="w-full column flex mt-4">
                  <div className="input-box w-full mr-3">
                    <label className="font-semibold">Phone Number</label>
                    <input
                      className="text-black w-full outline-none pl-3 py-1 rounded-md"
                      type="number"
                      placeholder="Enter phone number"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="input-box w-full ml-3">
                    <label className="flex w-full font-semibold">
                      Birth Date
                    </label>
                    <input
                      className="text-gray-400 w-full outline-none pl-3 py-1 rounded-md"
                      type="date"
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                </div>
                {/* gender  */}
                <div className="gender-box mt-4 font-semibold">
                  <h3>Gender</h3>
                  <div className="gender-option flex gap-5">
                    <div className="gender ">
                      <input
                        type="radio"
                        id="check"
                        name="gender"
                        onChange={() => setGender("Male")}
                      />
                      <label
                        className="ml-1 font-normal text-sm"
                        htmlFor="check-male"
                      >
                        Male
                      </label>
                    </div>
                    <div className="gender ">
                      <input
                        type="radio"
                        id="check"
                        name="gender"
                        onChange={() => setGender("Female")}
                      />
                      <label
                        className="ml-1 font-normal text-sm"
                        htmlFor="check-female"
                      >
                        Female
                      </label>
                    </div>
                    <div className="gender">
                      <input
                        type="radio"
                        id="check"
                        name="gender"
                        onChange={() => setGender("Other")}
                      />
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
                        onChange={(e) => setPerAddress(e.target.value)}
                      />
                    </div>
                    <div className="input-box w-full ">
                      <label className="font-normal text-sm">Temporary</label>
                      <input
                        className="w-full text-black font-normal outline-none pl-3 py-1 rounded-md"
                        type="text"
                        placeholder="Enter temporary address"
                        required
                        onChange={(e) => setTemAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="bg-[#6D2DF6] p-4 text-2xl w-full mt-8 rounded-lg font-semibold text-white"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
            <div className="my-auto mx-auto">
              <img
                className="rounded-3xl pl-10"
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
import { studentRegistration } from "../API/Path";
