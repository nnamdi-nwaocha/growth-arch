import { Nav } from "../components/Nav";
import { Intro } from "../components/Intro";
import { Features } from "../components/Features";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <>
      <Nav />
      <Intro />
      <Features />
      <CallToAction />
    </>
  );
}
