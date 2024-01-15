import { SectionHeader } from "@/app/components/SectionHeader";
import Image from "next/image";
import { staffData } from "@/app/data/people";
import "./staff.css";
export default function StaffSection() {
  return (
    <section className={"flex flex-col  items-center rtl pt-32"}>
      <SectionHeader name={"همکاران"} category={"با متخصصان ما آشنا شوید"} />
      <div className={"flex gap-4 mt-16 flex-wrap"}>
        {staffData.map((s) => (
          <div
            key={s.firstname}
            className={
              "size-44 flex flex-col items-center gap-2  bg-white  border-primary-light border rounded-3xl p-2 staff-holder-0"
            }
          >
            <div className="staff-image-holder">
              <Image width="100" height="100" src={s.profile_picture || ''} alt="" />
            </div>
            <h3 className={"text-xl font-bold text-secondary "}>
             { `${s.firstname}
              
              ${s.lastname}`}
            </h3>
            <p>{s.occupation}</p>
          </div>
        ))}
      </div>
      
    </section>
    
  );
}
