
import MediaSet from "@/components/MediaSet";
import React from "react";

function page() {
  return (
    <>
      <div className=" ml-16 mt-10 col-start-1 col-end-13 ">
        <h1 className="text-5xl font-bold">Welcome</h1>
        <h2 className=" text-xl text-slate-500 ">
          Cotzz is the place to learn and build a portfolio.
        </h2>
      </div>
        
      <div className=" ml-10 mt-5 col-start-1 col-end-13 ">
     <MediaSet />
     <MediaSet />
     <MediaSet />
     <MediaSet />
      </div>

    </>
  );
}

export default page;
