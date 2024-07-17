// pages/page.tsx
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TShirt from "@/components/TShirt";
import { Check, Star } from "lucide-react";
import Scroll from "@/components/scroll"; // Import the new component

export default function Home() {
  return (
    <div className="bg-slate-50 overflow-x-hidden">
      <section className="-mb-10">
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 lg:w-32 lg:left-[-.8rem] lg:top-[-4.2rem] transform lg:scale-150 hidden lg:block">
                <img src="/logoB.png" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-4xl md:text-6xl lg:text-7xl">
                Your Ideas on{" "}
                <span className="bg-red-900 px-2 text-white">Custom</span>{" "}
                apparel
              </h1>
              <p className="mt-8 text-[13px] max-w-prose text-center lg:text-lg lg:text-left lg:pr-10">
                Highlight your brand, group, or event with{" "}
                <span className="font-semibold">one-of-one</span> custom
                apparel. Bucky's Threads brings your ideas to life with
                personalized wear!
              </p>
              <ul className="mt-8 space-y-1.5 text-[13px] text-left font-medium flex flex-col items-center md:space-y-2 md:text-base md:items-start lg:space-y-2 lg:text-base lg:items-start">
                <div className="space-y-1.5 md:space-y-2 lg:space-y-2">
                  <li className="flex gap-1 items-center text-left md:gap-1.5 lg:gap-1.5">
                    <Check className="h-4 w-4 shrink-0 text-red-500 md:h-5 md:w-5 lg:h-5 lg:w-5" />
                    High Quality, Premium Fabrics
                  </li>
                  <li className="flex gap-1 items-center text-left md:gap-1.5 lg:gap-1.5">
                    <Check className="h-4 w-4 shrink-0 text-red-500 md:h-5 md:w-5 lg:h-5 lg:w-5" />
                    One-on-one design consultations with quick turnarounds
                  </li>
                  <li className="flex gap-1 items-center text-left md:gap-1.5 lg:gap-1.5">
                    <Check className="h-4 w-4 shrink-0 text-red-500 md:h-5 md:w-5 lg:h-5 lg:w-5" />
                    Hand drawn designs from UW-Madison Students
                  </li>
                  <li className="flex gap-1 items-center text-left md:gap-1.5 lg:gap-1.5">
                    <Check className="h-4 w-4 shrink-0 text-red-500 md:h-5 md:w-5 lg:h-5 lg:w-5" />
                    Unbeatable prices for top-notch custom apparel
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user image"
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="user image"
                  />
                </div>

                <div className="flex flex-col justify-between items-center md:items-start lg:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>

                  <p className="text-[13px] md:text-base lg:text-base">
                    <span className="font-semibold">150+</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                className="absolute w-32 left-72 transform -translate-x-1/2 -top-8 select-none block lg:w-52 lg:left-[30rem] lg:-top-16"
              />
              <img
                src="/line.png"
                className="absolute w-14 left-16 bottom-10 md:w-16 md:left-20 md:bottom-12 lg:w-24 lg:left-24 lg:bottom-12 select-none"
              />
              <TShirt
                className="w-[24rem] sm:w-[28rem] md:w-[28rem] lg:w-[30rem] xl:w-[37rem]"
                imgSrc="/default_design.png"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value proposition section */}
      <section className="bg-red-50 grainy-dark py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5 lg:gap-6">
            <h2 className="order-1 -mt-8 tracking-tight text-center text-balance !leading-tight font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 md:mt-2 lg:mt-2">
              What our{" "}
              <span className="relative px-1.5 md:px-2">
                customers
                <span className="md:block pointer-events-none absolute inset-x-0">
                  <span className="block w-11/12 h-1.5 bg-red-900 ml-2.5 mt-10 mb-0.5 lg:w-11/12 lg:h-2 lg:ml-4 lg:-mt-2 lg:mb-1"></span>
                  <span className="block w-11/12 h-1.5 bg-red-900 ml-2.5 lg:w-11/12 lg:h-2 lg:ml-4"></span>
                </span>
              </span>
              <span className="hidden md:inline"> </span>
              say
            </h2>
          </div>

          <div className="mx-auto grid max-w-xl grid-cols-1 px-2 md:max-w-2xl lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-12 md:gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 -mb-2 md:mb-2 lg:mb-2">
                <Star className="h-4 w-4 text-green-600 fill-green-600" />
                <Star className="h-4 w-4 text-green-600 fill-green-600" />
                <Star className="h-4 w-4 text-green-600 fill-green-600" />
                <Star className="h-4 w-4 text-green-600 fill-green-600" />
                <Star className="h-4 w-4 text-green-600 fill-green-600" />
              </div>
              <div className="text-[13px] md:text-lg leading-7 md:leading-8 lg:text-lg lg:leading-8">
                <p>
                  "We love our crewnecks, so soft and comfy its hard to not wear
                  it everyday. And the whole{" "}
                  <span className="p-0.5 bg-red-900 text-white">
                    design process was so easy!!
                  </span>
                </p>
              </div>
              <div className="flex gap-4 -mt-2 md:mt-2 lg:mt-2">
                <img
                  className="rounded-full h-10 w-10 md:h-12 md:w-12 lg:h-12 lg:w-12 object-cover"
                  src="/users/akpsi.png"
                  alt="user"
                />
                <div className="flex flex-col -ml-2 md:ml lg:ml">
                  <p className="font-semibold text-[13px] md:text-base lg:text-base">
                    Badger AKPsi
                  </p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-xs md:text-sm lg:text-sm">
                      Verified Purchase
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* second user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 -mb-2 md:mb-2 lg:mb-2">
                <Star className="h-4 w-4 text-green-600 fill-green-600" />
                <Star className="h-4 w-4 text-green-600 fill-green-600" />
                <Star className="h-4 w-4 text-green-600 fill-green-600" />
                <Star className="h-4 w-4 text-green-600 fill-green-600" />
                <Star className="h-4 w-4 text-green-600 fill-green-600" />
              </div>
              <div className="text-[13px] md:text-lg leading-7 md:leading-8 lg:text-lg lg:leading-8">
                <p>
                  "Absolutely killed it with the design. Went,{" "}
                  <span className="p-0.5 bg-red-900 text-white">
                    above and beyond our expectations.
                  </span>{" "}
                  Couldn't have asked for better sweatshirts for our Spring
                  Formal!
                </p>
              </div>
              <div className="flex gap-4 -mt-2 md:mt-2 lg:mt-2">
                <img
                  className="rounded-full h-10 w-10 md:h-12 md:w-12 object-cover"
                  src="/users/pike.png"
                  alt="user"
                />
                <div className="flex flex-col -ml-2 md:ml lg:ml">
                  <p className="font-semibold text-[13px] md:text-base lg:text-base">
                    Wisconsin Pike
                  </p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-xs md:text-sm lg:text-sm">
                      Verified Purchase
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="mt-32">
          <img
            className="absolute w-32 left-2 transform -translate-x-1/2 -mt-2 md:w-52 md:left-1/4 md:-mt-4 select-none block"
            style={{ transform: "rotate(25deg)" }}
            src="/what-people-are-buying.png"
            alt="user"
          />
        </div>
        <div className="flex justify-center items-center mt-64 md:mt-80 mb-12">
          <Scroll />
        </div>
      </section>
    </div>
  );
}
