import { Nav } from "../components/Nav";
import { Intro } from "../components/Intro";
import { Features } from "../components/Features";
import type { Metadata } from "next";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

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
