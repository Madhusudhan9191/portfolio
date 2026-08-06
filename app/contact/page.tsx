import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactCards from "@/components/sections/ContactCards";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s build something<br />worth shipping.</>}
        description="Open to AI engineering, generative AI, and backend-heavy roles. Reach out directly, or use the form."
      />
      <section className="pb-32">
        <div className="mx-auto grid max-w-[1220px] gap-14 px-6 md:grid-cols-2">
          <ContactCards />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
