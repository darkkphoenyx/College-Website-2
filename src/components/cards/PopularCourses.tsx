const data = [
  {
    id: 1,
    photoLink: "/assets/scienceStudents.png",
    course: "Science Faculty",
    teacher: "Henry H. Garrick, Teacher",
  },
  {
    id: 2,
    photoLink: "/assets/managementStudents.png",
    course: "Management Faculty",
    teacher: "Henry H. Garrick, Teacher",
  },
  {
    id: 3,
    photoLink: "/assets/lawStudents.png",
    course: "Law Faculty",
    teacher: "Henry H. Garrick, Teacher",
  },
];

export default function PopularCourses() {
  return (
    <>
      <div className="courses container mx-auto bg-[#F7F6F2] py-16">
        <h1 className="text-4xl mt-5 text-[#4F3F39] mb-5 font-serif text-center">
          Popular Courses
        </h1>
        <div>
          <ul role="list" className="grid grid-cols-3 container mx-auto mb-10">
            {data.map((card) => (
              <li key={card.id}>
                <div className="mx-auto text-xl mt-5 bg-white w-fit pb-5 shadow-2xl overflow-hidden rounded-2xl">
                  <img
                    className="w-72 h-48 mx-auto"
                    src={card.photoLink}
                    alt="science student photo"
                  />
                  <div className="pl-5 pt-5">
                    <a href={card.course} target="_blank">
                      <h1 className="text-[#4F3F39] font-serif hover:text-yellow-600">
                        {card.course}
                      </h1>
                    </a>
                    <p className="text-sm font-serif italic text-gray-400">
                      {card.teacher}
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
