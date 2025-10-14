import React from "react";
const Navbar = () => {
  return <div className="">Navbar</div>;
};

export default Navbar;
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation();

//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/" className="text-2xl font-bold text-gray-800">
//               Portfolio
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <Link
//                 to="/"
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
//                   isActive("/")
//                     ? "bg-blue-600 text-white"
//                     : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                 }`}
//               >
//                 Home
//               </Link>

//               <Link
//                 to="/projects"
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
//                   isActive("/projects")
//                     ? "bg-blue-600 text-white"
//                     : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                 }`}
//               >
//                 Projects
//               </Link>

//               <Link
//                 to="/contact"
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
//                   isActive("/contact")
//                     ? "bg-blue-600 text-white"
//                     : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                 }`}
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               type="button"
//               className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="block h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className="md:hidden" id="mobile-menu">
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
//           <Link
//             to="/"
//             className={`block px-3 py-2 rounded-md text-base font-medium ${
//               isActive("/")
//                 ? "bg-blue-600 text-white"
//                 : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//             }`}
//           >
//             Home
//           </Link>

//           <Link
//             to="/projects"
//             className={`block px-3 py-2 rounded-md text-base font-medium ${
//               isActive("/projects")
//                 ? "bg-blue-600 text-white"
//                 : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//             }`}
//           >
//             Projects
//           </Link>

//           <Link
//             to="/contact"
//             className={`block px-3 py-2 rounded-md text-base font-medium ${
//               isActive("/contact")
//                 ? "bg-blue-600 text-white"
//                 : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//             }`}
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
