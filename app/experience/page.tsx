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
            Two years, three roles,
            <br />
            one company that kept betting on me.
          </>
        }
        description="Click any role to expand responsibilities, technologies, and scope."
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[1220px] px-6">
          <ExperienceTimeline />
        </div>
      </section>
    </>
  );
}
