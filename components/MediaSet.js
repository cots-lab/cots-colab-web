import React from "react";
import MediaCard from "./MediaCard";

function MediaSet() {
  return (
    <div>
      <div className=" pt-5 col-start-1 col-end-13">
        <div className=" ml-10 pt-10 w-[1000px]">
          <h1 className="text-2xl font-bold">Most View</h1>
          <h2 className="  text-slate-500 ">
            Explore, analyze, and share quality data. Learn more about data
            types, creating, and collaborating.
          </h2>
        </div>

        <div className=" mt-5 col-start-1 col-end-13 ml-10 flex">
          <div className="ml-1 flex gap-6 flex-wrap">
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaSet;
