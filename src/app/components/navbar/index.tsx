import React from "react";
import { ownerData } from "@/app/data/people";
import { routesData } from "@/app/data/routes";
import Link from "next/link";

export const Navbar = () => {
  //   TODO: add hamburger button to navbar as nav list toggle
  return (
    <nav className="h-[49px]  flex flex-row-reverse justify-start max-w-5xl mx-auto px-1 md:px-4 my-3 items-center">
      <div className={"font-black text-[30px]"}>
        <Link href={"/"}>
          <span>{ownerData.firstname}</span>{" "}
          <span className={"text-primary"}>{ownerData.lastname}</span>
        </Link>
      </div>
      <ol className=" md:flex flex-row-reverse gap-8 text-[18px] mr-4 hidden text-black/70">
        {routesData.map((r) => (
          <li key={r.name}>
            <Link href={r.path}>{r.name_fa}</Link>
          </li>
        ))}
      </ol>
      <button
        className={
          "h-12 w-32 rounded-xl bg-gradient-to-r from-[#0F2650] to-[#0F2650]/70   text-[18px] text-teal-400 mr-auto"
        }
      >
        تماس
      </button>
    </nav>
  );
};
