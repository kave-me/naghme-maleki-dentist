import LetterImage from "../../../public/image/contactpage/letter_send1.png";
import Image from "next/image";
export default function Contact() {
  
  return (
    <>
      <section className="contactUs rtl pt-32">
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="basis-full md:basis-1/3">
            <div className="bg-contact-pattern bg-no-repeat bg-center bg-cover lg:bg-contain">
              <div className="flex flex-col p-16">
                <div>
                  <h1 className="text-white text-3xl">فرم تماس با ما</h1>
                  <p className="text-[#C9C9C9] mt-4">با ما در تماس باشید</p>
                </div>
                <div className="mt-24 ps-10">
                  <div className="flex align-middle ">
                    <span className="inline-block ml-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z"
                          fill="white"
                        />
                        <path
                          d="M13 8C15.103 8 16 8.897 16 11H18C18 7.775 16.225 6 13 6V8ZM16.422 13.443C16.2298 13.2684 15.9773 13.1752 15.7178 13.1832C15.4583 13.1913 15.212 13.2998 15.031 13.486L12.638 15.947C12.062 15.837 10.904 15.476 9.712 14.287C8.52 13.094 8.159 11.933 8.052 11.361L10.511 8.967C10.6974 8.78613 10.8061 8.53982 10.8142 8.28021C10.8222 8.02059 10.7289 7.76804 10.554 7.576L6.859 3.513C6.68404 3.32036 6.44088 3.20351 6.18115 3.18726C5.92143 3.17102 5.6656 3.25666 5.468 3.426L3.298 5.287C3.12511 5.46052 3.02192 5.69145 3.008 5.936C2.993 6.186 2.707 12.108 7.299 16.702C11.305 20.707 16.323 21 17.705 21C17.907 21 18.031 20.994 18.064 20.992C18.3085 20.9783 18.5393 20.8747 18.712 20.701L20.572 18.53C20.7415 18.3325 20.8273 18.0768 20.8112 17.8171C20.7952 17.5573 20.6785 17.3141 20.486 17.139L16.422 13.443Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span className="ltr text-[#C9C9C9]">+1012 3456 789</span>
                  </div>
                  <div className="flex align-middle mt-10">
                    <span className="inline-block ml-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span className="ltr text-[#C9C9C9]">contact@info.com</span>
                  </div>
                  <div className="flex align-middle mt-10">
                    <span className="inline-block ml-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16922 3.91922C4.6226 5.46584 3.75258 7.56276 3.75 9.75C3.74738 11.5374 4.33124 13.2763 5.412 14.7C5.412 14.7 5.637 14.9963 5.67375 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1872 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83994 11.9148 9.45543 11.4462 9.22836 10.8981C9.0013 10.3499 8.94189 9.74667 9.05765 9.16473C9.1734 8.58279 9.45912 8.04824 9.87868 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7953 12.749 12 12.75Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span className=" text-[#C9C9C9]">
                      خیرآباد - میدان امام خمینی جنب نواب صفوی- پلاک ۳۱
                    </span>
                  </div>
                </div>
                <div className="mt-24">
                  <div className="flex  ps-10">
                    <span className="mx-2 w-6 h-6 rounded-full text-center bg-white hover:bg-black flex items-center place-content-center">
                      1
                    </span>
                    <span className="mx-2 w-6 h-6 rounded-full text-center bg-white hover:bg-black">
                      2
                    </span>
                    <span className="mx-2 w-6 h-6 rounded-full text-center bg-white hover:bg-black">
                      3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-full md:basis-1/2">
            <div className="bg-white p-12 rounded-xl">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                تماس با ما
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                سوالی دارید؟ با ما در میان بگذارید.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    نام
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    نام خانوادگی
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    شماره تماس
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    پست الکترونیک
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <fieldset className="mt-6">
          <legend className="text-sm font-semibold leading-6 text-gray-900 ">انتخاب موضوع</legend>
         
          <div className="flex flex-row mt-6">
            <div className="flex items-center gap-x-3 sm:col-span-3  ms-5">
              <input id="push-everything" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">عمومی</label>
            </div>
            <div className="flex items-center gap-x-3 sm:col-span-3  ms-5">
              <input id="push-email" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900"> جراحی لثه</label>
            </div>
            <div className="flex items-center gap-x-3 sm:col-span-3  ms-5">
              <input id="push-nothing" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">ارتودنسی</label>
            </div>
          </div>
        </fieldset>
        <div className="col-span-full mt-5">
          <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">متن پیام</label>
          <div className="mt-2">
            <textarea id="about" name="about"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">سوال خود را مطرح کنید.</p>
        </div>
       <div className="flex justify-end">
       <button
        className={
          "h-10 w-36 rounded-xl bg-gradient-to-r from-[#0F2650] to-[#0F2650]/70   text-[16px] text-teal-400 "
        }
      >
        ارسال پیام
      </button>
       </div>
       <div className="flex justify-end ">
       
       <Image
         width='100'
         height='50'
          src={LetterImage}
          alt={``}
          className=" "
        />
      
       </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
