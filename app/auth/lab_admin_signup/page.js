import React from "react";
import { IoMdContact } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

export default function Page() {
    return (
        <div className="flex justify-center items-center h-screen ml-96">
            <div className="register-form bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
                <div>
                    <h1 className="text-5xl font-bold flex items-center justify-center mt-10 mb-10">
                        Sign Up
                    </h1>
                </div>
                
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div className="mb-4 flex items-center"> 
                            <IoMdContact className="mr-5"/>
                            <input
                                className="py-2 px-3 border-none focus:outline-none"
                                id="first-name"
                                type="text"
                                placeholder="Enter your First Name"
                                name="first_name"
                            />
                        </div>
                        <hr className="border-gray-400 mb-5 mt-[-12px]"/>
                    </div>
                    <div className="flex flex-col ml-7">
                        <div className="mb-4 flex items-center"> 
                            <IoMdContact className="mr-5"/>
                            <input
                                className="py-2 px-3 border-none focus:outline-none"
                                id="last-name"
                                type="text"
                                placeholder="Enter your Last Name"
                                name="last_name"
                            />
                        </div>
                        <hr className="border-gray-400 mb-5 mt-[-12px]"/>
                    </div>
                </div>
                
                <div className="mb-4 flex items-center"> 
                    <IoMdMail className="mr-5"/>
                    <input
                        className="py-2 px-3 border-none focus:outline-none"
                        id="company-name"
                        type="text"
                        placeholder="Enter your Company Name"
                        name="company_name"
                    />
                </div>
                <hr className="border-gray-400 mb-5 mt-[-12px]"/>
                
                <div className="flex items-center justify-center">   
                    <button
                        className="bg-white border border-red-500 text-red-500 font-bold py-1 px-4 rounded-full focus:outline-none focus:shadow-outline ml-2"
                        type="submit"
                    >
                        NEXT
                    </button>
                </div>
            </div>
        </div>
    );
}
