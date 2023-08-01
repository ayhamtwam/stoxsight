import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Landing } from "./pages";
// import { Header, Navbar, Sidebar } from "./components";

import "./index.css";

// const App = () => {
//   const paths = useLocation().pathname;
//   const location = paths.split("/")[2];

//   if (!location) {
//     window.location.replace("/dashboard/home");
//   }

//   return (
//     <div className="flex w-screen h-screen bg-slate-100">
//       <Sidebar />

//       <div className="flex flex-col w-full">
//         <Header />
//         <Navbar />
//         <div className="absolute flex items-center justify-center bg-white bottom-10 right-10 p-3 border border-[#CED3DC] drop-shadow-md rounded-full cursor-pointer">
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <path
//               d="M20.7837 15.8779C21.308 14.6919 21.5992 13.3799 21.5992 11.9999C21.5992 6.69797 17.3011 2.3999 11.9992 2.3999C6.69724 2.3999 2.39917 6.69797 2.39917 11.9999C2.39917 17.3018 6.69724 21.5999 11.9992 21.5999C13.7062 21.5999 15.3091 21.1544 16.6981 20.3733L21.601 21.599L20.7837 15.8779Z"
//               stroke="black"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//           </svg>
//         </div>

//         <Outlet />
//       </div>
//     </div>
//   );
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  // {
  //   path: "/home",
  //   element: <App />,
  //   children: [
  //     {
  //       path: "explore",
  //       element: <Home />,
  //     },
  //     {
  //       path: "following",
  //       element: <Following />,
  //     },
  //   ],
  // },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
