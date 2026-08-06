import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ARCHITECTURES } from "@/constants/architectures";
import ArchitectureCaseStudy from "@/components/sections/ArchitectureCaseStudy";
export function generateStaticParams(){return ARCHITECTURES.map(item=>({slug:item.slug}));}
export function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{return params.then(({slug})=>{const item=ARCHITECTURES.find(x=>x.slug===slug);return {title:item?`${item.name} Architecture`:"Architecture"};});}
export default async function ArchitecturePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=ARCHITECTURES.find(x=>x.slug===slug);if(!item)notFound();return <ArchitectureCaseStudy item={item}/>;}
