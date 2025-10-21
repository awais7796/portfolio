import React from "react";
import { Link } from "react-router-dom";
import { ShimmerButton } from "@/components/ui/shimmer-button";
const Home = () => {
  return (
    <div className="  h-screen pt-5 flex flex-col justify-center items-center  gap-5">
      <div>
        <a href="d">leek here </a>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        animi deserunt explicabo facilis nemo, voluptatem consequatur
        dignissimos est similique tenetur dolorum officiis. Aspernatur minima
        quisquam repellat architecto dolores vitae adipisci.
      </div>
      <div className="flex justify-center items-center gap-5">
        <Link to="/projects">
          <ShimmerButton>Book a meet </ShimmerButton>
        </Link>
        <Link to="/contact">
          <ShimmerButton>get in touch </ShimmerButton>
        </Link>
      </div>
    </div>
  );
};

export default Home;
