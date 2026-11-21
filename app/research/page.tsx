import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import ResearchList from "@/components/sections/ResearchList";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Academic Research &amp; Publications"
        title={
          <>
            Peer-reviewed research in
            <br />
            applied AI &amp; signal processing.
          </>
        }
        description="Published in IEEE conferences, advancing remote photoplethysmography (rPPG), contactless physiological estimation, and computer vision algorithms."
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[1220px] px-6">
          <SectionHeading index="01" label="Publications" title="IEEE-published research." />
          <ResearchList />
        </div>
      </section>
    </>
  );
}
