import React from "react";
import { IoMdContact } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { GoLink } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";

export default function page() {
    return (
<div>
  
 <form className=" register-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                <div>
                    <h3 className=" text-xl text-slate-500 flex items-center justify-end">
                    already have an account? Login
                    </h3>
                    <h1 className=" text-5xl font-bold flex items-center justify-center">
                        Sign Up
                    </h1>
                </div>
                
                <div className="mb-4 flex items-center justify-center"> 
                    
                    <IoMdContact className="mr-5"/>
                    <input
                        className="py-2 px-3 "
                        id="name"
                        type="text"
                        placeholder="Enter your Company Name"
                        name="name"
                        
                    />
                </div>
                <div className="mb-4 flex items-center justify-center"> 
                    <IoMdMail className="mr-5"/>
                    <input
                        className=" py-2 px-3"
                        id="email"
                        type="text"
                        placeholder="Enter your Company Email"
                        name="email"
                    />
                </div>
                <div className="mb-4 flex items-center justify-center"> 
                    <GoLink className="mr-5"/>
                    <input
                        className=" py-2 px-3"
                        id="web-url"
                        type="text"
                        placeholder="Enter your Company website link"
                        name="web_url"
                    />
                </div>
                <div className="mb-4 flex items-center justify-center"> 
                    <FaPhone className="mr-5"/>
                    <input
                        className=" py-2 px-3"
                        id="phone-number"
                        type="text"
                        placeholder="Enter your phone number"
                        name="phone_number"
                    />
                </div>
                <div className=" mb-4 text-center">
                    <h4>Provide More Details(ptional)</h4>
                    <textarea className=" register-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" placeholder="About your company">
                    
                    </textarea>
   
                </div>
                

                <div className="mb-4 flex items-center justify-center"> 
                   <RiLockPasswordFill className="mr-5"/>
                    <input
                        className=" py-2 px-3"
                        id="password"
                        type="text"
                        placeholder="Enter your Password"
                        name="password"
                    />

                    <RiLockPasswordFill className="mr-5"/>
                    <input
                        className=" py-2 px-3"
                        id="comfortran-password"
                        type="text"
                        placeholder="Comfort Password"
                        name="comfort_password"
                    />
                </div>

                <div className=" flex items-center justify-center">   
                     <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
              
            </form>
           
{/* 
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
        </Box> */}
        </div>

    

    )
}