import Link from "next/link";
import StatsCounter from "./StatsCounter";
import Divider from "./Divider";

interface HeroContentProps {
  isVisible: boolean;
  cardRef: React.RefObject<HTMLDivElement | null>;
}

export default function HeroContent({ isVisible, cardRef }: HeroContentProps) {
  return (
    <div className="max-w-md mx-auto text-center xl:max-w-lg lg:mx-0 lg:text-left">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:leading-tight xl:text-6xl">
        Growth Arc ✨ Your Knowledge Journey
      </h1>
      <p className="mt-5 text-lg font-medium text-gray-900 lg:mt-8">
        Fuel your hunger for knowledge and skills.
      </p>

      <div className="mt-8 lg:mt-10">
        <Link
          href="#"
          className="inline-flex items-center justify-center px-8 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
        >
          Start Your Journey
        </Link>
      </div>

      <Divider />

      <StatsCounter isVisible={isVisible} cardRef={cardRef} />
    </div>
  );
}
