import Image from "next/image";
import Card from "./components/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans ">
      <div className=" min-h-screen max-w-6xl w-full bg-red-100 pt-10 mx-auto flex flex-col gap-10">
        {/* First Div: About Section */}
        {/* need fixing */}
        <div className=" max-w-6xl w-full  flex  justify-between items-center px-20 bg-black">
          <div className="bg-red-100 text-black ">
            <p className="text-xl font-extrabold ">about</p>
            <div className="text-lg mt-3 flex flex-col lg:gap-y-2">
              <p className="font-bold">
                tldr; Data scientist and analyst, bridging the gap between
                business strategy and code.
              </p>
              <p>
                drawn to automation, cloud engineering, and building systems
                that scale.
              </p>
              <p>
                curious about machine learning, predictive analytics, and
                solving complex problems.
              </p>
            </div>
          </div>
        </div>
        {/* second div : holding the education sections,adding*/}
        <div className="w-full  px-20 bg-black">
          <div className="max-w-6xl w-full mx-auto flex flex-col gap-0">
            <p className="text-xl font-extrabold">education</p>
            {/* PARENT: 
        1. flex: aligns children in a row.
        2. p-10: padding from the outer edges.
        3. gap-10: space between the two black boxes. 
           (Note: p-10 and gap-10 use the same size unit for uniformity)
         */}
            <div className="bg-red-100 max-w-6xl w-full flex gap-10 p-0 ">
              {/* second div : holding the education sections,adding*/}
              <div className="bg-white flex-1 p-3 bg-gray-400 ">
                <Card
                  title="University of Oklahoma"
                  description="Masters in Data Science : 2023-2024"
                  imageSrc="/ouimage.jpg"
                />
              </div>
              <div className="bg-white flex-1 p-3 ">
                <Card
                  title="Lovely Professional University"
                  description="B.Tech. in Computer Science : 2018-2022"
                  imageSrc="/lpuimage.png"
                />
              </div>
            </div>
          </div>
        </div>
        {/* third div here for my socials */}
        <div className="w-full bg-black px-20">
          <div> here goes the social media stuff</div>
        </div>
      </div>
    </div>
  );
}
