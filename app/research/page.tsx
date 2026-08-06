import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/sections/SectionHeading";
import ResearchList from "@/components/sections/ResearchList";
import CertificationsList from "@/components/sections/CertificationsList";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <>
      <PageHero eyebrow="Research" title={<>Published research,<br />peer-reviewed.</>} />
      <section className="pb-28">
        <div className="mx-auto max-w-[1220px] px-6">
          <SectionHeading index="01" label="Publications" title="IEEE-published research." />
          <ResearchList />
        </div>
      </section>
      <section className="pb-32">
        <div className="mx-auto max-w-[1220px] px-6">
          <SectionHeading index="02" label="Certifications" title="Continued learning, documented." />
          <CertificationsList />
        </div>
      </section>
    </>
  );
}
