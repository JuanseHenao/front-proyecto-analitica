export default function CourseComponent({ data }) {
  return (
    <div className="pt-4">
      <div className="flex flex-col w-[300px] p-2 relative">
        <div className="cursor-pointer hover:opacity-80">
          <div className="border-[4px] border-yellow-400 relative">
            <img
              width={200}
              height={200}
              src={"https:" + data.image_url}
              alt="Image"
              className="object-cover w-[320px] h-[150px]"
            />
          </div>

          <div className="p-1">
            <h3 className="text-[16px] font-bold">{data.title}</h3>
            <span className="text-gray-400 block text-[12px] font-normal">
              {data.author}
            </span>
            <span className="text-black">$ {data?.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
