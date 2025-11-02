import React from "react";
import { Link } from "react-router-dom";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Contact from "./Contact";
import Projects from "./Projects";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <div className=" h-screen  pt-5 flex flex-col justify-center items-center  gap-5">
        <img
          src="/dp.jpeg"
          alt="dp"
          className="w-32 h-32 rounded-full object-cover"
        />

        <div className="">
          <p className="whitespace-pre-line text-lg leading-relaxed text-center ">
            {`21, I move fast, break things, and make things happen.Knee-deep in code and computer science; I chase anything that pushes boundaries.History, curiosity, badminton,
            and great books built my coreStill on the grind for mastery.
            If you’re working on something real, let’s talk.`}
          </p>
        </div>

        <div className="flex justify-center items-center gap-5">
          <Link to="/#projects">
            <ShimmerButton>Book a meet </ShimmerButton>
          </Link>
          <Link to="/#contact">
            <ShimmerButton>get in touch </ShimmerButton>
          </Link>
        </div>
      </div>

      <Projects />
      <Contact />
    </>
  );
};

export default Home;
