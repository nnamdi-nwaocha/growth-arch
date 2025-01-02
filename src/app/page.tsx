import { Nav } from "../components/Nav";
import { Intro } from "../components/Intro";
import { Features } from "../components/Features";
import type { Metadata } from "next";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

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
      <Nav />
      <Intro />
      <Features />
      <CallToAction />
      <Footer />
    </>
  );
}
