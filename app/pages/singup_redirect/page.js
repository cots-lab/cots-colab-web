import { Box, Button } from "@mui/material";
import React from "react";
import { TbWorldSearch } from "react-icons/tb";
import { ImShare2 } from "react-icons/im";
import Image from 'next/image'


export default function page() {
  return (
    <div>
      <div className=" ml-20 mt-20 w-[1000px] col-start-1 col-end-13 ">
        <h1 className=" text-8xl font-bold">
          How do you want to <br /> Use COTZZ?
        </h1>
        <h2 className=" text-xl text-slate-500 ">
          Please provide us with information about your company and we’ll get in
          touch shortly.
        </h2>
      </div>
      <div>
        <div className=" absolute flex flex-row-reverse -mt-[18%] ml-[70%] h-[450px]">
            <Image src="/signup.png" alt="cotzz" width={500} height={600} className=" "  />
        </div>
        <Box
          sx={{
            color: "gray",
            p: 2,
            border: "1px solid grey",
            marginLeft: "90px",
            marginTop: "5%",
            borderRadius: "10px",
            height: "120px",
            boxShadow: "0px 0px 5px 0px #000000", cursor: "pointer",
          }}
        >
          <div className="flex flex-row">
            <TbWorldSearch className=" stroke-black size-8 ml-5" />
            <h1 className=" pl-10 text-black font-bold text-2xl">
              I want to collect Resources{" "}
            </h1>
          </div>
          <div className="flex flex-row">
            <h2 className=" ml-36 pt-8 text-m text-slate-500 ">
              You're looking to gather resources.
            </h2>
          </div>
        </Box>
        <Box
          sx={{
            color: "gray",
            p: 2,
            border: "1px solid grey",
            marginLeft: "90px",
            marginTop: "5%",
            borderRadius: "10px",
            height: "120px",
            boxShadow: "0px 0px 5px 0px #000000",cursor: "pointer"
          }}
        >
          <div className="flex flex-row">
            <ImShare2 className=" stroke-black size-8 ml-5" />
            <h1 className=" pl-10 text-black font-bold text-2xl">
              I want to collect Resources{" "}
            </h1>
          </div>
          <h2 className=" ml-36 pt-8 text-m text-slate-500 ">
            You're looking to share knowledge.{" "}
          </h2>
        </Box>
      </div>
      {/* <Button
        variant="outlined"
        sx={{
          width: "250px",
          marginLeft: "110%",
          marginTop: "-70px",
          borderRadius: "30px",
          backgroundColor: "#E35A5A",
        }}
      >
        Create Account
      </Button> */}
    </div>
  );
}
