import Image from "next/image";
import Card from "./components/card";
import SocialButton from "./components/socialmedia";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans ">
      <div className=" min-h-screen max-w-6xl w-full bg-white-100 pt-10 mx-auto flex flex-col gap-10">
        {/* First Div: About Section */}
        {/* need fixing */}
        <div className=" max-w-6xl w-full  flex  justify-between items-center px-20 bg-white">
          <div className="bg-white text-black ">
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
        <div className="w-full  px-20 ">
          <div className="max-w-6xl w-full mx-auto flex flex-col gap-0">
            <p className="text-xl font-extrabold text-black">education</p>
            {/* PARENT: 
        1. flex: aligns children in a row.
        2. p-10: padding from the outer edges.
        3. gap-10: space between the two black boxes. 
           (Note: p-10 and gap-10 use the same size unit for uniformity)
         */}
            <div className="bg-white max-w-6xl w-full flex gap-10 p-0 ">
              {/* second div : holding the education sections,adding*/}
              <div className="bg-white flex-1   ">
                <Card
                  title="University of Oklahoma"
                  description="Masters in Data Science : 2023-2024"
                  imageSrc="/ouimage.jpg"
                />
              </div>
              <div className="bg-white flex-1 ">
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
        <div className=" w-full mx-auto">
          <div className="w-full bg-white px-20 flex flex-col gap-3">
            <p className="text-xl font-extrabold text-black">socials</p>
            {/* The Button Container */}
            <div className="w-full bg-white flex gap-5">
              {/* X (Twitter) */}
              <SocialButton
                link="https://x.com/SagarSi68776567"
                path="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
              />
              {/* LinkedIn */}
              <SocialButton
                link="https://www.linkedin.com/in/sagar-singh-ou/"
                path="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"
              />
              {/* GitHub */}
              <SocialButton
                link="https://github.com/singh-sagar"
                path="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
              {/* Gmail */}
              <SocialButton
                link="mailto:sagarlm07@gmail.com"
                path="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
              />
              {/* Discord */}
              <SocialButton
                link="https://discord.com"
                path="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"
              />
            </div>
          </div>
        </div>
        {/* fourth div here containing my projects */}
        <div className="w-full px-20">
          <div className="flex flex-col bg-white w-full mx-auto gap-10">
            <p className="text-xl font-extrabold text-black">projects</p>
            <div className="bg-white max-w-6xl w-full flex gap-10 p-0">
              <div className="bg-white flex-1   ">
                <Card
                  title="Cuisine Predictor"
                  description="A KNN classifier : recipe cuisine predciter using ingredient similarity.
                  Uses TF-IDF vectorization trained on a labeled recipe dataset."
                  imageSrc="/cuisine.png"
                />
              </div>
              <div className="bg-white flex-1   ">
                <Card
                  title="Text Redactor"
                  description="Automated privacy tool built with Python and spaCy that utilizes 
                  NLP to detect and sanitize PII from text documents."
                  imageSrc="/textredactor.png"
                />
              </div>
            </div>
            <div className="b-red-100 max-w-6xl w-full flex gap-10 p-0">
              <div className="bg-white flex-1   ">
                <Card
                  title="Cuisine Predictor"
                  description="A KNN classifier : recipe cuisine predciter using ingredient similarity.
                  Uses TF-IDF vectorization trained on a labeled recipe dataset."
                  imageSrc="/cuisine.png"
                />
              </div>
              <div className="bg-white flex-1   ">
                <Card
                  title="Text Redactor"
                  description="A KNN classifier : recipe cuisine predciter using ingredient similarity.
                  Uses TF-IDF vectorization trained on a labeled recipe dataset."
                  imageSrc="/ouimage.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        {/* footer notes foorter notes */}
        <div className="h-100 bg-black"></div>
      </div>
    </div>
  );
}
