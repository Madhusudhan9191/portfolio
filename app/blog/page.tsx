import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import EditorialList from "@/components/sections/EditorialList";

export const metadata: Metadata = { title: "Notes", description: "Practical notes on AI systems, retrieval, and software engineering." };
export default function BlogPage() { return <><PageHero eyebrow="Notes" title={<>Thinking in public,<br /><span className="text-gradient">shipping in private.</span></>} description="Field notes on applied AI, production systems, and the engineering decisions behind reliable products." /><section className="pb-32"><div className="mx-auto max-w-[1220px] px-6"><EditorialList /></div></section></>; }
