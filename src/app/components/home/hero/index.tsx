import Image from "next/image";
import HeroImage from "../../../../../public/image/hero.png";
import { ownerData } from "@/app/data/people";

export default function HeroSection() {
  return (
    <section className={"flex  items-center rtl pt-12"}>
      <div className={"max-w-[60%]"}>
        <h1 className={"text-[64px] font-black text-secondary"}>
          <span className={"text-primary font-light"}>دندان زیبا</span> با ما،
          <span className={"text-primary font-light"}>
            <br />
            لبخندش
          </span>{" "}
          با شما.
        </h1>
        <h2>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه.
        </h2>
        <button
          className={
            "h-12 bg-gradient-to-r from-[#0F2650] to-[#0F2650]/70 text-teal-50 text-3xl px-4 rounded-xl min-w-[50%] text-center flex content-center items-center justify-center mx-auto mt-8 "
          }
        >
          رزرو نوبت
        </button>
      </div>
      <Image
        src={HeroImage}
        className={"max-w-[50%] min-w-[20%]"}
        alt={`${ownerData.firstname} ${ownerData.lastname}`}
      />
    </section>
  );
}
