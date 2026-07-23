import AboutPreview from "@/pages/About";
import AdmissionBanner from "@/pages/Admission";
import Facilities from "@/pages/Facilities";
import HeadTeacherWelcome from "@/pages/HeadTeacher";
import Hero from "@/pages/Hero";
import NewsPreview from "@/pages/News";
import ProgramsOverview from "@/pages/Programs";
import QuickInfo from "@/pages/QuickInfo";
import StudentActivitiesPreview from "@/pages/Student";
import Testimonials from "@/pages/Testimonials";
import WhyChooseUs from "@/pages/WhyUs";


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
