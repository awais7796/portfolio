import React from "react";
const Footer = () => {
  return (
    <>
      <footer className="flex   justify-center h-10 items-center bg-blue-500">
        <div className="flex justify-center items-center gap-1 text-white  ">
          <p>Made with 💖 by </p>
          <a className="font-semibold" href="https://x.com/awaizz49">
            Awais
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// const Footer = () => {
// return (
//   <footer className="bg-gray-800 text-white py-6 mt-auto">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="text-center">
//         <p className="text-sm">
//           Made with <span className="text-red-500">♥</span> by{' '}
//           <span className="font-semibold">Awais</span>
//         </p>
//       </div>
//     </div>
//   </footer>
//   );
// };

// export default Footer;
