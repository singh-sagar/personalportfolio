import Image from "next/image";
const Popup = ({ text, imageSrc }) => {
  return (
    <div className="flex items-center gap-2 h-18 w-64 bg-[linear-gradient(175deg,#111827_30%,#0D1F6E_70%)] rounded-full p-1 shadow-xl ">
      <div className="relative w-16 h-16  rounded-full overflow-hidden shrink-0">
        <Image src={imageSrc} fill className="object-cover" alt={text} />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-white font-bold text-sm whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
};
export default Popup;
