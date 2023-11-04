import CourseComponent from "./CourseComponent";

export default function Courses() {
  const courses = [
    { id: 1, title: "Curso 1", author: "Juan", price: 100, image_url: "" },
  ];
  return (
    <div className="flex flex-col mb-5 bg-red">
      <div className="pt-10 pl-10 font-serif text-3xl">Empieza a aprender</div>
      <div className="pl-10 text-xl -pt-5">
        {courses?.length + " cursos disponibles"}
      </div>
      <div className="flex flex-wrap justify-center w-full h-full px-8 text-black bg-white lg:justify-start">
        {courses?.map((item, key) => (
          <CourseComponent key={key} data={item} />
        ))}
      </div>
    </div>
  );
}
