import React from "react";
import { ownerData } from "@/app/data/people";
import { routesData } from "@/app/data/routes";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="h-[49px]  flex flex-row-reverse justify-between max-w-5xl mx-auto px-4 items-center">
      <div className={"font-black text-[30px]"}>
        <Link href={"/"}>
          <span>{ownerData.firstname}</span>{" "}
          <span className={"text-primary"}>{ownerData.lastname}</span>
        </Link>
      </div>
      <ol className=" flex flex-row-reverse gap-2 text-[18px]">
        {routesData.map((r) => (
          <li key={r.name}>
            <Link href={r.path}>{r.name_fa}</Link>
          </li>
        ))}
      </ol>
      <button
        className={
          "h-12 w-32 rounded-xl bg-gradient-to-r from-[#0F2650] to-[#0F2650]/70   text-[18px] text-teal-400"
        }
      >
        تماس
      </button>
    </nav>
  );
};
