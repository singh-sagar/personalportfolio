// components/GithubGraph.js
"use client";
import dynamic from "next/dynamic";

// 1. Use 'dynamic' to import the component
// 2. { ssr: false } tells Next.js "Skip this on the server"
const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

const GithubGraph = () => {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-4 items-center justify-center">
      <h2 className="text-xl font-extrabold text-black self-start">
        github stats
      </h2>

      <GitHubCalendar
        username="singh-sagar"
        blockSize={12}
        blockMargin={5}
        fontSize={16}
        colorScheme="light"
      />

      <p className="text-gray-500 text-sm self-start mt-2">
        Powered by actual GitHub data
      </p>
    </div>
  );
};

export default GithubGraph;
