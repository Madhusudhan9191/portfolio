import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/sections/ProjectDetail";
import { PROJECTS } from "@/constants/content";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: `${project.name} — Engineering case study`, description: project.tagline, type: "article", url: `/projects/${project.slug}` },
    twitter: { card: "summary_large_image", title: project.name, description: project.tagline },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();
  const schema = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: project.name, description: project.tagline, applicationCategory: "DeveloperApplication", operatingSystem: "Web" };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><ProjectDetail project={project} /></>;
}
