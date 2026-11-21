import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title={
          <>
            Three years of engineering impact across
            <br />
            Data Science, AI Systems & Production Software.
          </>
        }
        description="A progression from foundational backend systems to enterprise microservices, applied machine learning, and generative AI platforms. Click any role to expand responsibilities and impact."
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[1220px] px-6">
          <ExperienceTimeline />
        </div>
      </section>
    </>
  );
}
