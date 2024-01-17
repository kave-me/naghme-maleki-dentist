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
      <div className="grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 items-center ">
        <div className={"row-start-2 md:row-start-1 "}>
          <h1
            className={
              "text-[64px] font-semibold text-secondary scale-75 md:scale-100 text-right"
            }
          >
            <span className={"text-primary font-light"}>دندان زیبا</span> با ما،
            <span className={"text-primary font-light"}>
              <br />
              لبخندش
            </span>{" "}
            با شما.
          </h1>
          <h2 className={"text-black/75 text-2xl"}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه.
          </h2>
          <button
            className={
              "h-[65px] bg-gradient-to-r from-[#0F2650] to-[#0F2650]/70 text-teal-50 text-3xl px-4 rounded-xl min-w-[50%] text-center flex content-center items-center justify-center mx-auto mt-[58px] w-3/4 "
            }
          >
            رزرو نوبت
          </button>
        </div>
        <Image
          src={HeroImage}
          className={"row-start-1"}
          alt={`${ownerData.firstname} ${ownerData.lastname}`}
        />
      </div>

      {/*  contact icons */}
      <div className="flex  justify-center items-center mt-4 w-full flex-wrap">
        <ol
          className={
            "flex justify-start xs:justify-center items-center flex-wrap "
          }
        >
          {contact.map((c) => (
            <li key={c.name}>
              <Link
                className={"flex flex-nowrap gap-4 items-center m-4"}
                href={c.href}
                target={"_blank"}
              >
                <div className="size-12 bg-secondary rounded-xl p-1 flex justify-center items-center">
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
    icon: <FaPhone className="text-primary size-6" />,
    description: (
      <span>
        <a href="tel:+982156445706">021-56445706</a>
        <br />
        <a href="tel:+989376818808">0937-6818808</a>
      </span>
    ),
    href: "tel:+982156445706",
  },
  {
    name: "coordination",
    icon: <FaLocationPin className="text-primary size-6" />,
    description: (
      <span>
        نسیم شهر - خیرآباد
        <br />خ نواب صفوی - پلاک ۳۱
      </span>
    ),
    href: "https://maps.app.goo.gl/4cwh1NCRJbUSULbbA  ",
  },
  {
    name: "telegram",
    icon: <FaTelegram className="text-primary size-6" />,
    description: <span className={"after:content-['@']"}>dental_mm</span>,
    href: "https://t.me/Dental_mm",
  },
  {
    name: "eta",
    icon: (
      <Image src={EtaLogo} alt={"eta logo"} className="text-primary size-6" />
    ),
    description: <span className={"after:content-['@']"}>dental_mm</span>,
    href: "https://t.me/Dental_mm",
  },
];
