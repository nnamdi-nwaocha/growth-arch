"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSwipe } from "@/app/hooks/useSwipe";

export default function CourseCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe({
    onSwipedLeft: () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 300; // Adjust scroll distance as needed
      }
    },
    onSwipedRight: () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft -= 300; // Adjust scroll distance as needed
      }
    },
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative mt-12 lg:mt-0 lg:absolute lg:-translate-y-1/2 lg:translate-x-1/2 lg:top-1/2 w-full max-w-6xl">
      <div
        ref={scrollRef}
        className="relative overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing"
        style={{ scrollBehavior: "smooth" }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex gap-8 pb-4">
          <CourseCard
            title="Guide to Frontend Development"
            image="/frontend_banner.webp"
            teacherName="John Doe"
            sessionTimes="Mon & Wed, 6 PM - 8 PM"
          />
          <CourseCard
            title="Introduction to Technical Writing"
            image="/technical_writing_banner.webp"
            teacherName="Jane Smith"
            sessionTimes="Tue & Thu, 4 PM - 6 PM"
          />
          <CourseCard
            title="Forex and Crypto Trading"
            image="/forex_banner.webp"
            teacherName="Alex Johnson"
            sessionTimes="Fri, 5 PM - 7 PM"
          />
        </div>
      </div>
    </div>
  );
}

interface CourseCardProps {
  title: string;
  image: string;
  teacherName: string;
  sessionTimes: string;
}

function CourseCard({
  title,
  image,
  teacherName,
  sessionTimes,
}: CourseCardProps) {
  return (
    <div className="flex-none w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] whitespace-normal">
      <div className="overflow-hidden bg-white rounded shadow-xl h-full flex flex-col">
        <div className="relative h-48">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <p className="text-lg font-bold text-gray-900">{title}</p>
          <div className="flex items-center mt-4 space-x-4">
            <Image
              src="/icons/user-icon-placeholder.svg"
              alt={teacherName}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <p className="text-sm font-medium text-gray-700">{teacherName}</p>
          </div>
          <p className="mt-6 text-xs font-medium tracking-widest text-gray-500 uppercase">
            Session Times
          </p>
          <div className="flex items-end mt-1">
            <p className="text-lg font-bold text-gray-900">{sessionTimes}</p>
          </div>
          <div className="flex justify-between mt-auto pt-7 gap-x-4">
            <Link
              href="#"
              className="flex-1 inline-flex items-center justify-center px-4 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
            >
              Enroll Now
            </Link>
            <Link
              href="#"
              className="flex-1 inline-flex items-center justify-center px-4 py-4 text-sm font-bold text-gray-900 transition-all duration-200 bg-transparent border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
