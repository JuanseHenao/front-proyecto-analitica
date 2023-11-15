export default function CourseComponent({ data }) {
  return (
    <div className="pt-4">
      <div className="relative flex p-2">
        <div className="cursor-pointer hover:opacity-80">
          <div className="border-[4px] border-yellow-400 relative">
            <img
              width={200}
              height={200}
              src={data.image_url}
              alt="Image"
              className="object-cover w-[320px] h-[150px]"
            />
          </div>
        </div>
        <div className="p-1 w-60">
          <h3 className="ml-5 text-xl font-semibold">{data.title}</h3>
        </div>
      </div>
    </div>
  );
}
