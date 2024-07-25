const people = [
  {
    name: "Rohan Shrestha",
    role: "Full-stack Developer",
    imageUrl: "/assets/rohan.png",
    link: "https://www.linkedin.com/in/rohan-shrestha07/",
  },
  {
    name: "Deepesh Sunuwar",
    role: "Full-stack Developer & DBA",
    imageUrl: "/assets/deepesh.png",
    link: "https://www.linkedin.com/in/deepeshsunuwar/",
  },
  {
    name: "Nishan Dhakal",
    role: "Backend Developer",
    imageUrl: "/assets/nishan.png",
    link: "https://www.linkedin.com/in/nishandhakal023/",
  },
  {
    name: "Amit Niraula",
    role: "Backend Developer",
    imageUrl: "/assets/amit.png",
    link: "https://www.linkedin.com/in/theamitniraula/",
  },
  {
    name: "Subodh Nepal",
    role: "Frontend Developer",
    imageUrl: "/assets/subodh.png",
    link: "",
  },
  {
    name: "Kushal Kharel",
    role: "Frontend Developer",
    imageUrl: "/assets/kushal.jpg",
    link: "",
  },
  {
    name: "Srizma Poudel",
    role: "Frontend Developer",
    imageUrl: "/assets/srizma.png",
    link: "https://www.linkedin.com/in/srizma-paudel/",
  },
  {
    name: "Tulsi Sharma",
    role: "Frontend Developer",
    imageUrl: "",
    link: "",
  },
  {
    name: "Sushmita Ghimire",
    role: "Frontend Developer",
    imageUrl: "",
    link: "",
  },
];

export default function TeamList() {
  return (
    <>
      <div className="bg-white h-full ">
        <img
          className="h-96 w-96 mx-auto"
          src="./assets/teamwork.png"
          alt="Team work photo"
        />
        <div className="grid grid-flow-row mx-5">
          <div className="flex items-center justify-center text-center">
            <div>
              <h1 className="text-5xl text-black font-bold tracking-tight uppercase">
                Meet our <span className=" text-red-600">Team</span>
              </h1>
              <p className="mt-6 text-lg px-20 leading-8 italic text-gray-600">
                Our team is composed of a diverse group of skilled developers
                dedicated to creating innovative and efficient solutions. We
                bring together expertise in fullstack development, backend,
                frontend, and database management, allowing us to handle a wide
                range of projects with proficiency and precision.
              </p>
            </div>
          </div>
          <ul
            role="list"
            className="grid gap-20 mx-auto mb-10 gap-y-12 grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6 mx-10 mt-8 w-full">
                  <img
                    className="h-20 w-20 rounded-full object-fill"
                    alt="Team Member Name"
                    src={person.imageUrl}
                  />
                  <div>
                    <a target="_blank" href={person.link}>
                      <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                    </a>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
