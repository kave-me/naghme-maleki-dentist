"use client";
import { SectionHeader } from "../SectionHeader";

import { useState  } from "react";
import { FaPlus, FaMinus } from 'react-icons/fa';
export default function Contact() {
  const [activeIndex, setActiveIndex] = useState(-1)

 
  function toggleAccordion(index:number) {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index))
  
    
  }
  return (
    <section className={"flex flex-col  items-center rtl pt-32"}>
      <SectionHeader name={"سوالات متداول"} category={"سوالات شما"} />
      {
        faqs.map((f , index) =>(
          <div
          key={f.id}
          className="flex flex-col w-full mb-4 rtl border-primary-light border rounded-3xl px-4 bg-white">
        <button
          className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
          onClick={() => toggleAccordion(index)}
        >
        
          <p className="inline-block text-[#0F2650] font-bold">
         {f.title}
          </p>
          {activeIndex === index ? <FaMinus className="text-[#01CFC9] bg-[#0F2650] border rounded-3xl p-1" /> : <FaPlus className="text-[#01CFC9] bg-[#0F2650] border rounded-3xl p-1"/>}
        </button>
        <div
          style={{
            maxHeight: activeIndex === index ? '1000px' : '0px',
            overflow: 'hidden',
            transition: 'max-height 0.5s ease-in-out',
          }}
          className="overflow-auto"
        >
          <div className="pb-10 text-slate-500">
            {f.content}
          </div>
        </div>
      </div>
        ))
        }
    </section>
  );
}

const faqs = [
  {
    id:1,
    title: "ایمپلنت دندانی بهتر است یا بریج؟پروتزهای دندانی",
    content: "در گذشته باتوجه به آنکه تکنیک ایمپلنت وجود نداشت، با از دست دادن دندان، تکنیک بریج انجام میگرفت، دندان های  دوطرف آن دندان از دست رفته تراشیده و روکش قرارداده میشد، اما امروزه باتوجه به ظهورتکنیکهای ایمپلنت دندانی، جایگزینی راحتتر برای دندان از دست رفته بدون آسیب دیدگی دندان های مجاور انجام می شود.",
    
  },
  {
    id:2,
    title: "علت بوی بد دهان چیست؟",
    content:
      "درمان ریشه روشی است که پالپ آسیب‌دیده یا عفونی دندان را با پرکردن جایگزین می‌کند.",

  },
  {
    id:3,
    title: "آیا پس از ایمپلنت می توان مسواک زد؟",
    content:
      "در مواقعی که رواشهای دیگر کارآمدی ندارند جراحی پیشنهاد می‌شوند.",
   
  },
  {
    id:4,
    title: "آیا جرمگیری برای دندان ضرر دارد؟",
    content: "درمان های دندانپزشکی مختص کودکان و خردسالان",
    
  },
];