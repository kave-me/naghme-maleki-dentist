import { SectionHeader } from "@/app/components/SectionHeader";
import { FaBeer } from "react-icons/fa";
import AboutMeImage from "../../../../../public/image/about-me.png";
import Image from "next/image";
import { ownerData } from "@/app/data/people";

export default function AboutMeSection() {
  return (
    <section className={"flex flex-col  items-center rtl py-16 bg-secondary  "}>
      <h4 className={"text-primary text-[32px] font-extrabold"}>درباره من</h4>
      <article className={"flex"}>
        <div>
          <h2 className={"text-2xl font-semibold"}>من کی هستم؟</h2>
          <p>{description}</p>
        </div>
        <Image
          className={"max-w-[40%] min-w-[20%]"}
          src={AboutMeImage}
          alt={`${ownerData.firstname} ${ownerData.lastname}`}
        />
      </article>
    </section>
  );
}
const description = `
نغمه مالکی هستم فوق تخصص جراحی فک و لثه، دارای بورد تخصصی، فلوشیپ لیزرهای دندانی از دانشگاه آخن. درمان بیماری های لثه به کمک لیزر، جراحی های افزایش طول تاج در نواحی زیبایی، جراحی ایمپلنت های دندانی، پیوند استخوان و جراحی سینوس.
`;
