"use client";

import { useEffect, useRef, useState } from "react";
import HeroContent from "./HeroContent";
import CourseCards from "./CourseCards";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section>
      <div className="relative py-12 overflow-hidden bg-gray-100 sm:py-16 lg:pb-20 pt-15 xl:py-14">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col">
            <HeroContent isVisible={isVisible} cardRef={cardRef} />
            <CourseCards />
          </div>
        </div>
      </div>
    </section>
  );
}
