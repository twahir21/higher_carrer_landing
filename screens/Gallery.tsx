import GalleryGrid from "@/components/GalleryGrid";
import PageHero from "./Land";

export const metadata = {
  title: "Gallery | Higher Career Academy",
  description:
    "Browse photos of classrooms, campus life, events, and student activities at Higher Career Academy.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A glimpse into everyday life at Higher Career"
        text="Classrooms, campus, events, and activities — moments captured from across our school year."
      />
      <section className="section-pad">
        <div className="container-hc">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}