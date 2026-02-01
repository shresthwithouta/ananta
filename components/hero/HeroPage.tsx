"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const [snakeSwing, setSnakeSwing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSnakeSwing((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="h-screen w-full relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/herobg.webp')" }}
    >
      <div className="absolute inset-0 bg-black/80 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.95)_100%)] z-10" />
      <div className="pointer-events-none absolute inset-0 z-14 bg-[linear-gradient(0deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.6)_15%,transparent_40%)]" />



      <div className="absolute top-0 left-0 -mt-8 w-full z-11 px-6 pt-28 md:pt-36 text-center">
        <span className="ananta-font text-[#e6c36a] lg:hidden md:hidden text-[clamp(3.2rem,6.8vw,6rem)] drop-shadow-[0_0_22px_rgba(230,195,106,0.35)]">
            Ananta
          </span>
          <p className="mx-auto md:hidden -mt-6 lg:hidden max-w-2xl text-white/70 text-[clamp(1.05rem,2vw,1.25rem)] leading-relaxed">
          A modern space to explore culture
        </p>

        <h1 className="text-white -mt-4 font-semibold leading-[1.05] hidden sm:hidden lg:hidden md:block text-[clamp(2.6rem,5.8vw,4.8rem)]">
          Welcome to{" "}
          <span className="ananta-font text-[#e6c36a] text-[clamp(3.2rem,6.8vw,6rem)] drop-shadow-[0_0_22px_rgba(230,195,106,0.35)]">
            Ananta
          </span>
        </h1>
        <p className="-mt-3 mx-auto hidden lg:hidden md:block max-w-2xl text-white/70 text-[clamp(1.05rem,2vw,1.25rem)] leading-relaxed">
          A modern space to explore culture, designed for a generation that seeks depth
        </p>


        <h1 className="text-white font-semibold leading-[1.05] hidden lg:block text-[clamp(2.6rem,5.8vw,4.8rem)]">
          Welcome to{" "}
          <span className="ananta-font text-[#e6c36a] text-[clamp(3.2rem,6.8vw,6rem)] drop-shadow-[0_0_22px_rgba(230,195,106,0.35)]">
            Ananta
          </span>
        </h1>

        <p className="mt-1 mx-auto hidden lg:block max-w-2xl text-white/70 text-[clamp(1.05rem,2vw,1.25rem)] leading-relaxed">
          A modern space to explore culture, wisdom, and divinity
          designed for a generation that seeks depth, not noise.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex items-end justify-center pointer-events-none">
        <Image
          src="/images/snakeleft.png"
          alt="Left Snake"
          width={320}
          height={320}
          priority
          className={`absolute bottom-0 left-0 h-[40vh] md:h-[50vh] lg:h-[60vh] w-auto
            -translate-x-[70%] md:-translate-x-[10%] translate-y-[8%]
            scale-150 z-8 opacity-90 origin-bottom
            transition-transform duration-3000 ease-in-out
            ${snakeSwing ? "rotate-1" : "-rotate-10"}`}
        />

        <Image
          src="/images/snakeright.png"
          alt="Right Snake"
          width={320}
          height={320}
          priority
          className={`absolute bottom-0 right-0 translate-x-[46%] h-[50vh] md:h-[63vh] lg:h-[74vh] w-auto
            lg:translate-x-[10%] md:translate-x-[7%] translate-y-[20%]
            scale-150 z-8 opacity-90 origin-bottom
            transition-transform duration-3000 ease-in-out
            ${snakeSwing ? "-rotate-10" : "rotate-1"}`}
        />

        <Image
          src="/images/midsnakefinal.png"
          alt="Center Snake"
          width={420}
          height={420}
          priority
          className="relative z-13 h-[28vh] md:h-[30vh] w-auto brightness-20 translate-y-[10%]"
        />

        <Image
          src="/images/krishnagif.gif"
          alt="Krishna"
          width={400}
          height={200}
          priority
          className={`absolute brightness-10 h-[18vh] md:h-[18vh] drop-shadow-yellow-200 w-auto
            will-change-transform transition-all duration-2400 z-12
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              animate
                ? `
                  translate-y-[-44vh] brightness-90 scale-[3.7] opacity-100
                  drop-shadow-[0_0_30px_rgba(59,130,246,0.65)]
                  drop-shadow-[0_0_60px_rgba(250,204,21,0.45)]
                `
                : `
                  translate-y-[18vh] scale-[0.65] opacity-0
                `
            }`}
        />
      </div>
    </section>
  );
}
