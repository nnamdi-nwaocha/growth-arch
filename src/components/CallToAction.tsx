import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
          <div>
            <Image
              src="/pfp4.png"
              alt="Profile"
              width={64} // Width in pixels
              height={64} // Height in pixels
              className="object-cover rounded-full"
            />
            <blockquote>
              <p className="mt-6 text-xl leading-relaxed text-black">
                “Growth Arc helped me turn my passion into income. It's more
                than a platform—it's a movement.”
              </p>
            </blockquote>
            <p className="mt-6 text-base font-semibold text-black">
              Fatima Yusuf
            </p>
            <p className="mt-1 text-base text-gray-600">Frontend Developer</p>
          </div>

          <div>
            <div className="overflow-hidden bg-white">
              <div className="p-8 lg:px-12 lg:py-10">
                <h3 className="text-2xl font-semibold text-black">
                  Join Growth Arc Today
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Learn, teach, and grow with a thriving community of creators
                  and learners. Build skills and earn while teaching what you
                  know.
                </p>

                <a
                  href="#"
                  title="Sign Up Now"
                  className="flex items-center justify-center w-full px-4 py-4 mt-8 text-base font-semibold text-black transition-all duration-200 bg-[#FFB200] border-2 border-transparent rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white"
                  role="button"
                >
                  Sign Up Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
