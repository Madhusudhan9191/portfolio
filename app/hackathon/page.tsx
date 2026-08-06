import type { Metadata } from "next";
import ChakraHero from "@/components/sections/chakra/ChakraHero";
import ChakraBody from "@/components/sections/chakra/ChakraBody";
import ChakraBusiness from "@/components/sections/chakra/ChakraBusiness";
import ChakraDeepDive from "@/components/sections/chakra/ChakraDeepDive";
import ChakraWorkflow from "@/components/sections/chakra/ChakraWorkflow";

export const metadata: Metadata = { title: "Hackathon — CHAKRA" };

export default function HackathonPage() {
  return (
    <>
      <ChakraHero />
      <ChakraWorkflow />
      <ChakraBody />
      <ChakraBusiness />
      <ChakraDeepDive />
    </>
  );
}
