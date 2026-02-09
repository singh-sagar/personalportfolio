// // components/GithubGraph.js
// "use client";
// import dynamic from "next/dynamic";

// const GitHubCalendar = dynamic(
//   () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
//   { ssr: false }
// );

// const GithubGraph = () => {
//   // CORRECTED THEME:
//   // Level 0 (Empty) needs to be slightly darker than white to be visible (e.g., #ebedf0)
//   // The scale should graduate smoothly from light gray to black.
//   const customTheme = {
//     light: [
//       "#EDEBEB", // Level 0: Light gray (Empty) - Visible on white bg
//       "#878A8A", // Level 1: Light Green (or use light gray #d6e2f0)
//       "#545353", // Level 2: Medium Green
//       "#292828", // Level 3: Dark Green
//       "#000000", // Level 4: Darkest Green
//     ],
//     // If you strictly want Grayscale/Black, use this instead:
//     // light: ["#ebedf0", "#ced4da", "#6c757d", "#495057", "#212529"],
//   };

//   return (
//     <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-sm overflow-x-auto">
//       <div className="min-w-fit text-gray-900">
//         <GitHubCalendar
//           username="singh-sagar"
//           blockSize={12}
//           blockMargin={4}
//           fontSize={16}
//           colorScheme="light"
//           // It is better to use the explicit 'theme' object structure if the library version supports it,
//           // otherwise, newer versions often prefer specific color props.
//           // Assuming the library version accepts 'theme':
//           theme={customTheme}
//         />
//       </div>
//     </div>
//   );
// };

// export default GithubGraph;
"use client";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

const GithubGraph = () => {
  const customTheme = {
    light: ["#EDEBEB", "#878A8A", "#545353", "#292828", "#000000"],
  };

  return (
    // CHANGE 1: Increased padding to 'p-5' to stop the bottom cut-off
    // CHANGE 2: Added 'flex justify-center items-center' to fix the gap on the right
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm overflow-x-auto flex justify-center items-center">
      <div className="min-w-fit text-gray-900">
        <GitHubCalendar
          username="singh-sagar"
          blockSize={12}
          blockMargin={4}
          fontSize={16}
          colorScheme="light"
          theme={customTheme}
        />
      </div>
    </div>
  );
};

export default GithubGraph;
