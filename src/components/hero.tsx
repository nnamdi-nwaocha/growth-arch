"use client";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect observer after triggering
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
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
      <div className="relative py-12 overflow-hidden bg-gray-100 sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col">
            <div className="max-w-md mx-auto text-center xl:max-w-lg lg:mx-0 lg:text-left">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:leading-tight xl:text-6xl">
                Growth Arc ✨ Your Knowledge Journey
              </h1>
              <p className="mt-5 text-lg font-medium text-gray-900 lg:mt-8">
                Fuel your hunger for knowledge and skills.
              </p>

              <div className="mt-8 lg:mt-10">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                  role="button"
                >
                  Start Your Journey
                </a>
              </div>

              <div className="mt-8 lg:mt-12">
                <svg
                  className="w-auto h-4 mx-auto text-gray-300 lg:mx-0"
                  viewBox="0 0 172 16"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
                  ></line>
                </svg>
              </div>

              <div
                ref={cardRef}
                className="inline-grid grid-cols-2 mt-8 gap-x-8"
              >
                <div>
                  <p className="text-4xl font-bold text-gray-900">
                    {isVisible ? (
                      <CountUp start={0} end={157} duration={3} />
                    ) : (
                      0
                    )}
                    +
                  </p>
                  <p className="mt-2 text-base font-medium text-gray-500">
                    Classes
                  </p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-gray-900">
                    {isVisible ? (
                      <CountUp start={0} end={1000} duration={3} />
                    ) : (
                      0
                    )}
                    +
                  </p>
                  <p className="mt-2 text-base font-medium text-gray-500">
                    Students
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-0 lg:absolute lg:-translate-y-1/2 lg:translate-x-1/2 lg:top-1/2">
              <div className="relative w-full overflow-auto">
                <div className="flex gap-8 flex-nowrap">
                  <div className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 whitespace-nowrap">
                    <div className="overflow-hidden bg-white rounded shadow-xl">
                      <div className="aspect-w-4 aspect-h-3">
                        <img
                          className="object-cover w-full h-full"
                          src="./frontend_banner.webp"
                          alt="Guide to Frontend Development"
                        />
                      </div>
                      <div className="p-8">
                        <p className="text-lg font-bold text-gray-900">
                          Guide to Frontend Development
                        </p>
                        <p className="mt-6 text-xs font-medium tracking-widest text-gray-500 uppercase">
                          Course Price
                        </p>
                        <div className="flex items-end mt-1">
                          <p className="text-lg font-bold text-gray-900">
                            $49.99
                          </p>
                        </div>
                        <div className="grid grid-cols-2 mt-7 gap-x-4">
                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                            role="button"
                          >
                            Enroll Now
                          </a>
                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-4 text-sm font-bold text-gray-900 transition-all duration-200 bg-transparent border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 whitespace-nowrap">
                    <div className="overflow-hidden bg-white rounded shadow-xl">
                      <div className="aspect-w-4 aspect-h-3">
                        <img
                          className="object-cover w-full h-full"
                          src="./technical_writing_banner.webp"
                          alt="Introduction to Technical Writing"
                        />
                      </div>
                      <div className="p-8">
                        <p className="text-lg font-bold text-gray-900">
                          Introduction to Technical Writing
                        </p>
                        <p className="mt-6 text-xs font-medium tracking-widest text-gray-500 uppercase">
                          Course Price
                        </p>
                        <div className="flex items-end mt-1">
                          <p className="text-lg font-bold text-gray-900">
                            $39.99
                          </p>
                        </div>
                        <div className="grid grid-cols-2 mt-7 gap-x-4">
                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                            role="button"
                          >
                            Enroll Now
                          </a>
                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-4 text-sm font-bold text-gray-900 transition-all duration-200 bg-transparent border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 whitespace-nowrap">
                    <div className="overflow-hidden bg-white rounded shadow-xl">
                      <div className="aspect-w-4 aspect-h-3">
                        <img
                          className="object-cover w-full h-full"
                          src="forex_banner.webp"
                          alt="Forex and Crypto Trading"
                        />
                      </div>
                      <div className="p-8">
                        <p className="text-lg font-bold text-gray-900">
                          Forex and Crypto Trading
                        </p>
                        <p className="mt-6 text-xs font-medium tracking-widest text-gray-500 uppercase">
                          Course Price
                        </p>
                        <div className="flex items-end mt-1">
                          <p className="text-lg font-bold text-gray-900">
                            $29.99
                          </p>
                        </div>
                        <div className="grid grid-cols-2 mt-7 gap-x-4">
                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                            role="button"
                          >
                            Enroll Now
                          </a>
                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-4 py-4 text-sm font-bold text-gray-900 transition-all duration-200 bg-transparent border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
