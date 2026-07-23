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
import GsapReveal from "@/components/Gsap";


export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <GsapReveal direction="up">
        <QuickInfo />
      </GsapReveal>

      <GsapReveal direction="left">
        <HeadTeacherWelcome />
      </GsapReveal>

      <GsapReveal direction="right">
        <AboutPreview />
      </GsapReveal>

      <GsapReveal direction="up">
        <WhyChooseUs />
      </GsapReveal>

      <GsapReveal direction="up">
        <ProgramsOverview />
      </GsapReveal>

      <GsapReveal direction="up">
        <Facilities />
      </GsapReveal>

      <GsapReveal direction="left">
        <StudentActivitiesPreview />
      </GsapReveal>

      <GsapReveal direction="right">
        <Testimonials />
      </GsapReveal>

      <GsapReveal direction="up">
        <NewsPreview />
      </GsapReveal>

      <GsapReveal direction="up">
        <AdmissionBanner />
      </GsapReveal>
    </main>
  );
}
