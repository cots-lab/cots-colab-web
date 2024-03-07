"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { BsArrowLeftShort } from "react-icons/bs";
import { useState } from "react";
import MenuBar from "@/components/MenuBar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const RootLayout = ({ children }) => {
  // const isUserLoggedIn = true;

  const [open, setOpen] = useState(false);
  return (
    <html lang="en">
      <body>
        <main className="layout-with-sidebar layout relative z-0">
          <header className="">
            <Header />
          </header>
          <aside
            className={`bg-white h-[100%] p-3 pt-8 ${
              open ? "w-[250px]" : "w-[100%] min-w-[80px]"
            } duration-300 absolute`}
          >
            <BsArrowLeftShort
              className={`text-3xl absolute -right-3 top-9 border rounded-full border-[#8198c0] bg-[#DCE8FF] ${
                !open && "rotate-180"
              }`}
              onClick={() => {
                setOpen(!open);
              }}
            />
            <MenuBar open={open} />
          </aside>

          <section>{children}</section>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
