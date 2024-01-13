import { SectionHeader } from "@/app/components/SectionHeader";
import { FaBeer } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className={"flex flex-col  items-center rtl pt-32 pb-16"}>
      <SectionHeader name={"خدمات"} category={"خدمات تخصصی دندانپزشکی"} />
      <ul className={"flex gap-4 mt-16 flex-wrap"}>
        {services.map((s) => (
          <li
            key={s.name}
            className={
              "size-48 flex flex-col gap-2 items-center bg-amber-100 content-center p-4 border-primary-light border rounded-3xl"
            }
          >
            {s.icon}
            <h3 className={"text-xl font-bold text-secondary"}>{s.name}</h3>
            <p>{s.description}</p>
          </li>
        ))}
      </ul>
      <button
        className={
          "h-10 bg-gradient-to-r from-[#0F2650] to-[#0F2650]/70 text-teal-50 text-2xl px-4 rounded-xl min-w-[50%] text-center flex content-center items-center justify-center mx-auto mt-8 "
        }
      >
        رزرو نوبت
      </button>
    </section>
  );
}

const services = [
  {
    name: "پروتزهای دندانی",
    description: "خدمات تخصصی دندانپزشکی",
    icon: <FaBeer className={"size-24"} />,
  },
  {
    name: "اندودنتیکس",
    description:
      "درمان ریشه روشی است که پالپ آسیب‌دیده یا عفونی دندان را با پرکردن جایگزین می‌کند.",
    icon: <FaBeer className={"size-24"} />,
  },
  {
    name: "جراحی دهان و دندان",
    description:
      "در مواقعی که رواشهای دیگر کارآمدی ندارند جراحی پیشنهاد می‌شوند.",
    icon: <FaBeer className={"size-24"} />,
  },
  {
    name: "دندانپزشکی کودکان",
    description: "درمان های دندانپزشکی مختص کودکان و خردسالان",
    icon: <FaBeer className={"size-24"} />,
  },
];
