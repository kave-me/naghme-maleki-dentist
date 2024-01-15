import AboutMeSection from "@/app/components/home/about-me";
import HeroSection from "@/app/components/home/hero";
import ServicesSection from "@/app/components/home/services";
import StaffSection from "@/app/components/home/staff";
import FaqSection from "@/app/components/faq";
import Testimonials from "./components/home/testimonial";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-start flex-nowrap items-stretch max-w-[1920px] px-5 mx-auto ">
      <HeroSection />
      <ServicesSection />
      <AboutMeSection />
      <StaffSection />
      <FaqSection />
      <Testimonials />
    </main>
  );
}
