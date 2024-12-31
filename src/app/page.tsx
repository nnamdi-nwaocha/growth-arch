import { Features } from "@/components/Features";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Arc - Learn and Teach Skills",
  description: "An interactive platform to learn and teach skills effectively.",
  icons: {
    icon: "/icons/favicon.png", // Path relative to the public folder
  },
};

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
    </>
  );
}
