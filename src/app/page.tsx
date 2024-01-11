import AboutMeSection from "@/app/components/home/about-me";
import HeroSection from "@/app/components/home/hero";
import ServicesSection from "@/app/components/home/services";
import StaffSection from "@/app/components/home/staff";
import FaqSection from "@/app/components/faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-start flex-nowrap items-stretch max-w-5xl px-5 mx-auto ">
      <HeroSection />
      <ServicesSection />
      <AboutMeSection />
      <StaffSection />
      <FaqSection />
    </main>
  );
}
