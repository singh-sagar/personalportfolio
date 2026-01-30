import Image from "next/image";
const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="w-full flex flex-col rounded-xl overflow-hidden border border-gray-300 bg-gray-100 ">
      <div className="h-8 bg-gray-100 flex items-center px-4 gap-2 border-b border-gray-400">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <div className="flex-1 h-3 bg-white rounded-xl"></div>
      </div>
      <div className="h-48 w-full bg-blue-500 relative">
        <Image src={imageSrc} fill className="object-cover" alt={title} />
      </div>
      <div className="p-4 bg-white flex flex-col gap-1 border-t border-gray-200">
        <h3 className="font-bold text-lg text-black">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};
export default Card;
