import Image from "next/image";
const Popup = ({ text, imageSrc }) => {
  return (
    <div className="relative h-8 w-32 bg-gray-800 rounded-xl overflow-hidden shadow-xl ">
      <Image src={imageSrc} fill className="object-cover" alt={text} />
      <div className="absolute bottom-0 w-full bg-black/60 p-2">
        <p className="text-black font-bold text-center">{text}</p>
      </div>
    </div>
  );
};
export default Popup;
