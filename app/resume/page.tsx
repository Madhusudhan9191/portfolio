import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ResumeCard from "@/components/sections/ResumeCard";

export const metadata: Metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <>
      <PageHero eyebrow="Resume" title={<>The short version,<br />on paper.</>} />
      <section className="pb-32">
        <div className="mx-auto max-w-[1220px] px-6">
          <ResumeCard />
        </div>
      </section>
    </>
  );
}
