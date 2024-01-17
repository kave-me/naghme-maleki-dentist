import FooterImage from "../../../../public/image/Group6.png";
import Image from "next/image";
export function Footer() {
  return (
    <section className={"flex flex-col lg:flex-row  items-end rtl mt-32 max-w-5xl px-5 mx-auto"}>
      
      <div className="flex justify-center basis-1/3">
        <div>
          <h4 className='text-center md:text-right'><span className="text-[#0F2650] font-extrabold">NAGHME</span><span className="text-[#01CFC9] font-extrabold">MALEKI</span></h4>
          <p className="text-center md:text-right md:w-2/3 mt-2">
          پنج سال است که بهترین خودمان را برای لبخند زیبای شما گذاشته‌ایم.
          </p>
          <p className="text-center md:text-right mt-4 text-[#0F2650] ">
            <strong >
            تمام حقوق نزد نغمه مالکی محفوظ است.
            </strong>
          </p>
        </div>
      </div>
      
      <div className="flex justify-center basis-1/3">
      <Image
         width='220'
         height='220'
          src={FooterImage}
          alt={``}
        />
      </div>
      <div className="flex justify-center basis-1/3">
        <div className="text-right">
          <p className="mt-4 flex align-middle" dir="rtl">
          <span className="inline-block ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#01CFC9"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 stroke-[#0F2650]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </span>
            <span className='text-sm ltr'>
                021 852 2365
            </span>
          </p>
          <p className="mt-4 flex align-middle rtl" >
            <span className="inline-block ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#01CFC9"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 stroke-[#0F2650]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </span>
            <span  className='text-sm ltr'>
                0911 345 2121
            </span>
          </p>
          <p className="mt-4 flex align-middle rtl" >
            <span className="inline-block ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#01CFC9"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className='w-4 h-4 stroke-[#0F2650]'
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <span  className='text-sm ltr'>یکشنبه و چهارشنبه ۹ تا ۱۶</span>
          </p>
          <p className="mt-4 flex align-middle rtl" >
            <span className="inline-block ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#01CFC9"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 stroke-[#0F2650]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            <span  className='text-sm ltr'>خیرآباد - میدان امام خمینی جنب نواب صفوی- پلاک ۳۱</span>
          </p>
        </div>
      </div>
    
    </section>
  );
}
