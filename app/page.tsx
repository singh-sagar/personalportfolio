import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans ">
      
   
      <div className=" min-h-screen max-w-6xl w-full bg-red-100 pt-20 mx-auto flex flex-col gap-20">
           {/* First Div: About Section */}
        {/* need fixing */}
       <div className=" max-w-6xl w-full  flex  justify-between items-center px-20 bg-black"> 
          <div className="bg-red-100 text-black ">
              <p className="text-xl font-extrabold ">about</p>
              <div className="text-lg mt-3 flex flex-col lg:gap-y-2">
                <p className="font-bold">tldr; Data scientist and analyst, bridging the gap between business strategy and code.</p>
                <p>drawn to automation, cloud engineering, and building systems that scale.</p>
                <p>curious about machine learning, predictive analytics, and solving complex problems.</p>
              </div>
          </div>
       </div>
       {/* second div : holding the education sections,adding*/}
       <div className="max-w-6xl w-full flex justify-between items-center px-20 bg-black">
         <div className="bg-red-100 max-w-6xl w-full p-20 ">
           <div className="">

           </div>
            
         </div>
       </div>
      </div>


     
     
    // </div>
  );
}
