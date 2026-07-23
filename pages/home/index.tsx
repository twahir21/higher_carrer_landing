import AboutPreview from "@/pages/home/components/About";
import AdmissionBanner from "@/pages/home/components/Admission";
import Facilities from "@/pages/home/components/Facilities";
import HeadTeacherWelcome from "@/pages/home/components/HeadTeacher";
import Hero from "@/pages/home/components/Hero";
import ProgramsOverview from "@/pages/home/components/Programs";
import QuickInfo from "@/pages/home/components/QuickInfo";
import StudentActivitiesPreview from "@/pages/home/components/Student";
import Testimonials from "@/pages/home/components/Testimonials";
import WhyChooseUs from "@/pages/home/components/WhyUs";
import NewsPreview from "./components/News";


export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickInfo />
      <HeadTeacherWelcome />
      <AboutPreview />
      <WhyChooseUs />
      <ProgramsOverview />
      <Facilities />
      <StudentActivitiesPreview />
      <Testimonials />
      <NewsPreview />
      <AdmissionBanner />
    </>
  );
}
