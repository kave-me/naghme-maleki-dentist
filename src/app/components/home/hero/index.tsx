import Image from "next/image";
import HeroImage from "../../../../../public/image/hero.png";
import EtaLogo from "../../../../../public/image/eta-logo.png";
import { ownerData } from "@/app/data/people";
import { spans } from "next/dist/build/webpack/plugins/profiling-plugin";
import Link from "next/link";
import { FaBeer, FaPhone, FaTelegram } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className={"flex flex-col  items-center rtl pt-12"}>
      <div className="flex">
        <div className={"max-w-[60%]"}>
          <h1 className={"text-[64px] font-semibold text-secondary"}>
            <span className={"text-primary font-light"}>دندان زیبا</span> با ما،
            <span className={"text-primary font-light"}>
              <br />
              لبخندش
            </span>{" "}
            با شما.
          </h1>
          <h2>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه.
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
      </div>

      {/*  contact icons */}
      <div className="flex mt-4 justify-start  w-full flex-wrap">
        <ol className={"flex justify-around "}>
          {contact.map((c) => (
            <li key={c.name}>
              <Link
                className={"flex flex-nowrap gap-4 items-center m-4"}
                href={c.href}
              >
                <div className="size-12 bg-gray-900 rounded-xl p-1 flex justify-center items-center">
                  {c.icon}
                </div>
                <p className={"text-secondary font-medium text-[16px]"}>
                  {c.description}
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const contact = [
  {
    name: "phone",
    icon: <FaPhone className="text-white size-8" />,
    description: (
      <span>
        021-56445706
        <br />
        0937-6818808
      </span>
    ),
    href: "https://somewhere.com",
  },
  {
    name: "coordination",
    icon: <FaLocationPin className="text-white size-8" />,
    description: (
      <span>
        نسیم شهر - خیرآباد
        <br />خ نواب صفوی - پلاک ۳۱
      </span>
    ),
    href: "https://somewhere.com",
  },
  {
    name: "telegram",
    icon: <FaTelegram className="text-white size-8" />,
    description: <span className={"after:content-['@']"}>naghme_maleki</span>,
    href: "https://somewhere.com",
  },
  {
    name: "eta",
    icon: (
      <Image
        src={EtaLogo}
        alt={"eta logo"}
        className="text-white filter saturate-0 size-8"
      />
    ),

    description: <span className={"after:content-['@']"}>naghme_maleki</span>,
    href: "https://somewhere.com",
  },
];
