import React from "react";
import { IoMdContact } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { GoLink } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Page() {
    return (
        <div className="flex" style={{ backgroundColor: "#f4f4f4", margin: "0 40px" }}>
            <div className="ml-20 mr-20 mt-10 mb-10 w-[960px] col-start-1 col-end-13">
                <form className="register-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div>
                        <h3 className="text-xl text-slate-500 flex items-center justify-end">
                            already have an account? Login
                        </h3>
                        <h1 className="text-5xl font-bold flex items-center justify-center mt-10 mb-10">
                            Sign Up
                        </h1>
                    </div>
                    
                    <div className="mb-4 flex items-center"> 
                        <IoMdContact className="mr-5"/>
                        <input
                            className="py-2 px-3 border-none focus:outline-none"
                            id="company-name"
                            type="text"
                            placeholder="Enter your Company Name"
                            name="company_name"
                        />
                    </div>
                    <hr className="w-full mb-5 mt-[-12px] border-gray-400"/>
                    
                    <div className="mb-4 flex items-center"> 
                        <IoMdMail className="mr-5"/>
                        <input
                            className="py-2 px-3 border-none focus:outline-none"
                            id="company-email"
                            type="email"
                            placeholder="Enter your Company Email"
                            name="company_email"
                        />
                    </div>
                    <hr className="w-full mb-5 mt-[-12px] border-gray-400"/>
                    
                    <div className="mb-4 flex items-center"> 
                        <GoLink className="mr-5"/>
                        <input
                            className="py-2 px-3 border-none focus:outline-none"
                            id="company-website"
                            type="url"
                            placeholder="Enter your Company website link"
                            name="company_website"
                        />
                    </div>
                    <hr className="w-full mb-5 mt-[-12px] border-gray-400"/>
                    
                    <div className="mb-4 flex items-center"> 
                        <FaPhone className="mr-5"/>
                        <input
                            className="py-2 px-3 border-none focus:outline-none"
                            id="phone-number"
                            type="tel"
                            placeholder="Enter your phone number"
                            name="phone_number"
                        />
                    </div>
                    <hr className="w-full mb-5 mt-[-12px] border-gray-400"/>
                    
                    <div className="mb-4">
                        <h4 className="text-left mb-2">Provide More Details (Optional)</h4>
                        <textarea 
                            className=" w-full register-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-none focus:outline-none"
                            style={{ maxWidth: "100%" }}
                            placeholder="About your company"
                        />
                    </div>
                    
                    <div className="mb-4 flex items-center"> 
                        <RiLockPasswordFill className="mr-5"/>
                        <input
                            className="py-2 px-3 border-none focus:outline-none"
                            id="password"
                            type="password"
                            placeholder="Enter your Password"
                            name="password"
                        />
                    </div>
                    <hr className="w-full mb-5 mt-[-12px] border-gray-400"/>
                    
                    <div className="mb-4 flex items-center"> 
                        <RiLockPasswordFill className="mr-5"/>
                        <input 
                            className="py-2 px-3 border-none focus:outline-none"
                            id="confirm-password"
                            type="password"
                            placeholder="Confirm Password"
                            name="confirm_password"
                        />
                    </div>
                    <hr className="w-full mb-5 mt-[-12px] border-gray-400"/>
                    
                    <div className="flex items-center justify-center">   
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>

            <div className="ml-20 mr-20 mt-10 mb-10">
                <img src="/image/lab_signup.svg" alt="cotzz" width={500} height={600} className="border" style={{ borderStyle: "solid", borderWidth: "1px", borderColor: "black" }} />
            </div>
        </div>
    );
}
