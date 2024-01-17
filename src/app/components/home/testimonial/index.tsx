import { SectionHeader } from "@/app/components/SectionHeader";

import Image from "next/image";
import { comments } from "@/app/data/people";

export default function Testimonials() {
  return (
    <section className={"flex flex-col  items-center rtl pt-32 bg-[#0F2650] "}>
      <SectionHeader
        name={"نظرات شما"}
        category={"آنچه در مورد من گفتید"}
        darkmode
      />

      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12 items-center p-4">
        {comments.map((c) => (
          <div
            key={c.author.firstname}
            className="size-60 mb-12 md:mb-0 bg-white  border-primary-light border rounded-3xl p-2"
          >
            <div className="mb-0">
              <div className="">
                <Image
                  width="50"
                  height="50"
                  src={c.profile_picture || ""}
                  alt=""
                  className="mx-auto"
                />
              </div>
              <h5 className="mb-4 text-xl font-semibold text-[#0F2650] text-center justify-center">
                {c.author.firstname}
              </h5>

              <p className="mb-4 text-neutral-600 dark:text-neutral-300 overflow-y-auto">
                {c.comment}
              </p>

              <ul className="mb-0 flex items-center justify-center">
                {[1, 2, 3, 4, 5].map((index) => (
                  <li key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`stroke-[#0F2650] h-5 w-5 ${
                        index <= c.rate ? "text-[#01CFC9]" : "text-gray-400"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
