import Image from "next/image";

const TwitterPop = ({ text, imageSrc }) => {
  return (
    // 1. Main Container: Fixed width (w-72), but Height is automatic (h-auto)
    <div className="h-auto w-72 bg-[linear-gradient(175deg,#111827_30%,#0D1F6E_70%)] rounded-xl p-1 shadow-xl">
      {/* 2. Image Wrapper: Removed 'relative' and 'fill'. 
             Now it just hugs the image inside. 
      */}
      <div className="w-full rounded-xl overflow-hidden">
        <Image
          src={imageSrc}
          width={0}
          height={0}
          sizes="100vw"
          // 3. This is the magic line for Next.js:
          // "Be 100% wide, and calculate your own height automatically"
          style={{ width: "100%", height: "auto" }}
          alt={text}
        />
      </div>
    </div>
  );
};
export default TwitterPop;
