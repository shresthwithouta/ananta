"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ScripturesHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, window.innerHeight - rect.top);
      setScrollY(progress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { rootMargin: "-10% 0px 0px 0px" }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const START = 600;
  const END = 1800;

  const t =
    scrollY < START
      ? 0
      : scrollY > END
      ? END - START
      : scrollY - START;

  const fade =
    scrollY < START
      ? 0
      : scrollY > START + 300
      ? 1
      : (scrollY - START) / 300;

      

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-[260vh] overflow-hidden bg-top bg-contain"
        style={{ backgroundImage: "url('/images/scripture-hero.webp')" }}
      >
        {/* PC TEXT */}

<div
  className="
    sticky hidden md:hidden lg:flex
    top-[30vh]
    z-30
    w-full
    justify-center
    px-12
  "
  style={{
    transform: `translateY(${-scrollY * 0.12}px)`,
  }}
>
  <div
    className={`
      text-center max-w-4xl
      transition-all duration-700 ease-out
      ${
        visible
          ? "opacity-100 translate-y-0 scale-100 blur-0"
          : "opacity-0 translate-y-8 scale-[0.96] blur-[3px]"
      }
    `}
  >

    <p className="text-[#e6c36a]/80 tracking-[0.45em] text-sm uppercase mb-6">
      Śruti & Smṛti
    </p>

    <h1 className="text-white font-normal leading-[1.15] text-[clamp(2.8rem,4.4vw,4.3rem)]">
      God&apos;s Own Language
      <br />
      <span className="block text-white/60 font-extrabold mt-2">
        Mantras Shaping Existence
      </span>
    </h1>

    <p className="mt-8 max-w-2xl mx-auto text-lg text-white/55 leading-relaxed">
      The foundations of dharma were not authored,
      but heard, carried through breath, memory, and silence,
      explore the scared texts which shaped Sanātana dharma,
    </p>

    {/* CTA */}
    <div className="mt-12 flex justify-center">
      <Link
        href="/scriptures"
        className="
          group relative overflow-hidden
          rounded-full
          border border-[#e6c36a]/40
          px-9 py-4
          text-base font-medium
          text-[#e6c36a]
          backdrop-blur-md
          transition-all duration-300
          hover:border-[#e6c36a]
          hover:bg-[#e6c36a]/10
          hover:shadow-[0_0_40px_rgba(230,195,106,0.25)]
          active:scale-95
        "
      >
        <span className="relative z-10 flex items-center gap-3">
          Explore the Scriptures
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>

        <span
          className="
            absolute inset-0
            opacity-0 group-hover:opacity-100
            bg-[radial-gradient(circle_at_center,rgba(230,195,106,0.25),transparent_70%)]
            transition-opacity duration-500
          "
        />
      </Link>
    </div>
  </div>
</div>

<div
  className="
    sticky lg:hidden sm:block md:hidden
    top-[30vh]
    z-30
    flex justify-center
    px-6
  "
  style={{
    transform: `translateY(${-scrollY * 0.12}px)`,
  }}
>
  <div
    className={`
      text-center max-w-[22rem]
      transition-all duration-700 ease-out
      ${
        visible
          ? "opacity-100 translate-y-0 scale-100 blur-0"
          : "opacity-0 translate-y-6 scale-[0.97] blur-[2px]"
      }
    `}
  >
    {/* Eyebrow */}
    <p className="text-[#e6c36a] tracking-[0.35em] text-xs font-semibold uppercase mb-4">
      Śruti & Smṛti
    </p>

    {/* Heading */}
    <h1 className="text-white leading-tight">
      <span className="block text-2xl font-semibold">
        Sounds of Heaven
      </span>
      <span className="block text-white/60 text-2xl font-bold mt-1">
        God’s Own Language
      </span>
    </h1>

    {/* Description */}
    <p className="mt-5 text-sm leading-normal text-white/45 px-2">
      The foundations of dharma were not authored,
      but heard, carried through breath, memory, and silence.
    </p>

    {/* CTA */}
    <div className="mt-9 flex justify-center">
      <Link
        href="/scriptures"
        className="
          group relative overflow-hidden
          rounded-full
          border border-[#e6c36a]/40
          px-6 py-3
          text-sm font-medium
          text-[#e6c36a]
          backdrop-blur-md
          transition-all duration-300
          hover:border-[#e6c36a]
          hover:bg-[#e6c36a]/10
          active:scale-95
        "
      >
        <span className="relative z-10 flex items-center gap-2">
          Explore the Scriptures
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>

        {/* subtle glow */}
        <span className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          bg-[radial-gradient(circle_at_center,rgba(230,195,106,0.25),transparent_70%)]
          transition-opacity duration-500
        " />
      </Link>
    </div>
  </div>
</div>


<div
  className="
    sticky hidden md:block lg:hidden
    top-[32vh]
    z-30
    w-full
    px-10
    text-center
  "
  style={{
    transform: `translateY(${-scrollY * 0.13}px)`,
  }}
>
  <div
    className={`
      max-w-3xl mx-auto
      transition-all duration-700 ease-out
      ${
        visible
          ? "opacity-100 translate-y-0 scale-100 blur-0"
          : "opacity-0 translate-y-6 scale-[0.97] blur-[2px]"
      }
    `}
  >
    {/* Eyebrow */}
    <p className="text-[#e6c36a]/80 tracking-[0.4em] text-xs uppercase mb-5">
      Śruti & Smṛti
    </p>

    {/* Heading */}
    <h1 className="text-white font-normal leading-tight text-[clamp(2.2rem,4vw,3.2rem)]">
      God’s Own Language
      <br />
      <span className="block text-white/60 font-bold mt-2">
        Mantras Shaping Existence
      </span>
    </h1>

    {/* Subtext */}
    <p className="mt-7 max-w-xl mx-auto text-base text-white/55 leading-relaxed">
      The foundations of dharma were not authored,
      but heard, carried through breath, memory, and silence.
      Explore the sacred texts that shaped Sanātana Dharma.
    </p>

    {/* CTA */}
    <div className="mt-10 flex justify-center">
      <Link
        href="/scriptures"
        className="
          group relative overflow-hidden
          rounded-full
          border border-[#e6c36a]/40
          px-8 py-3.5
          text-sm font-medium
          text-[#e6c36a]
          backdrop-blur-md
          transition-all duration-300
          hover:border-[#e6c36a]
          hover:bg-[#e6c36a]/10
          hover:shadow-[0_0_32px_rgba(230,195,106,0.22)]
          active:scale-95
        "
      >
        <span className="relative z-10 flex items-center gap-2">
          Explore the Scriptures
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>

        {/* glow */}
        <span
          className="
            absolute inset-0
            opacity-0 group-hover:opacity-100
            bg-[radial-gradient(circle_at_center,rgba(230,195,106,0.22),transparent_70%)]
            transition-opacity duration-500
          "
        />
      </Link>
    </div>
  </div>
</div>

<div className="hidden md:hidden lg:block">
        {/* VEDAS */}
        <Image
          src="/images/veda.png"
          alt=""
          width={300}
          height={300}
          className="
            absolute left-5 z-20 w-[120px] md:w-[200px] lg:w-[260px]
            transition-transform duration-700 ease-out
            will-change-transform transform-gpu
            hover:translate-x-1 hover:-translate-y-1 hover:rotate-1
          "
          style={{
            transform: `translateY(${250 - t * 0.5}px)`,
            opacity: fade,
          }}
        />
        <div
          className="
            absolute lg:w-70 lg:h-70 z-19 left-0 lg:-left-5 md:-left-5
            bg-amber-300/20 w-40 h-40 rounded-full blur-3xl animate-pulse sm:left-60
            transition-transform duration-1000 ease-out
            will-change-transform transform-gpu
          "
          style={{ transform: `translateY(${250 - t * 0.5}px)` }}
        />

        {/* GITA */}
        <Image
          src="/images/bhagwatgita.png"
          alt=""
          width={300}
          height={300}
          className="
            absolute left-5 z-20 w-[120px] md:w-[200px] lg:w-[260px]
            transition-transform duration-700 ease-out
            will-change-transform transform-gpu
            hover:translate-x-1 hover:-translate-y-1 hover:rotate-1
          "
          style={{
            transform: `translateY(${750 - t * 0.5}px)`,
            opacity: fade,
          }}
        />
        <div
          className="
            absolute lg:w-70 lg:h-70 z-19 left-0
            bg-amber-300/20 w-40 h-40 rounded-full blur-3xl animate-pulse
            transition-transform duration-1000 ease-out
            will-change-transform transform-gpu
          "
          style={{ transform: `translateY(${750 - t * 0.5}px)` }}
        />

        {/* RAMAYANA */}
        <Image
          src="/images/ramayan.png"
          alt=""
          width={300}
          height={300}
          className="
            absolute left-5 z-20 w-[120px] md:w-[200px] lg:w-[260px]
            transition-transform duration-700 ease-out
            will-change-transform transform-gpu
            hover:translate-x-1 hover:-translate-y-1 hover:rotate-1
          "
          style={{
            transform: `translateY(${1250 - t * 0.5}px)`,
            opacity: fade,
          }}
        />
        <div
          className="
            absolute lg:w-70 lg:h-70 z-19 left-0
            bg-amber-300/20 w-40 h-40 rounded-full blur-3xl animate-pulse
            transition-transform duration-1000 ease-out
            will-change-transform transform-gpu
          "
          style={{ transform: `translateY(${1250 - t * 0.5}px)` }}
        />

        {/* ================= RIGHT COLUMN ================= */}

        {/* PURANAS */}
        <Image
          src="/images/purana.png"
          alt=""
          width={300}
          height={300}
          className="
            absolute right-0 z-20 w-[120px] md:w-[200px] lg:w-[260px]
            transition-transform duration-700 ease-out
            will-change-transform transform-gpu
            hover:-translate-x-1 hover:-translate-y-1 hover:-rotate-1
          "
          style={{
            transform: `translateY(${525 - t * 0.5}px)`,
            opacity: fade,
          }}
        />
        <div
          className="
            absolute lg:w-75 lg:h-75 z-19 right-5 md:right-10
            bg-amber-300/20 w-40 h-40 rounded-full blur-3xl animate-pulse
            transition-transform duration-1000 ease-out
            will-change-transform transform-gpu
            hover:scale-110
          "
          style={{ transform: `translateY(${525 - t * 0.5}px)` }}
        />

        {/* UPANISHADS */}
        <Image
          src="/images/upanishad.png"
          alt=""
          width={300}
          height={300}
          className="
            absolute right-0 z-20 w-[120px] md:w-[200px] lg:w-[260px]
            transition-transform duration-700 ease-out
            will-change-transform transform-gpu
            hover:-translate-x-1 hover:-translate-y-1 hover:-rotate-1
          "
          style={{
            transform: `translateY(${1050 - t * 0.5}px)`,
            opacity: fade,
          }}
        />
        <div
          className="
            absolute lg:w-75 lg:h-75 z-19 right-5
            bg-amber-300/20 w-40 h-40 rounded-full blur-3xl animate-pulse
            transition-transform duration-1000 ease-out
            will-change-transform transform-gpu
            hover:scale-110
          "
          style={{ transform: `translateY(${1050 - t * 0.5}px)` }}
        />

<Image
  src="/images/templeHero.png"
  alt=""
  width={800}
  height={800}
  className="
    absolute lg:block sm:hidden md:hidden bg-blend-overlay brightness-90
    -bottom-120 right-0 z-9 w-screen
    transition-transform duration-700 ease-out
    will-change-transform transform-gpu
  "
  style={{
    transform: `
      translateY(${350 - t * 0.6}px)
      scale(${1 + t * 0.0005})
    `,
    opacity: 1,
  }}
/>

<div
  className="
    absolute lg:w-[180vw] lg:block sm:hidden md:hidden md:w-[120vw] lg:h-86 z-19 bottom-60
    rounded-full
    blur-3xl
    transition-transform duration-1000 ease-out
    will-change-transform transform-gpu
    opacity-60
  "
  style={{
    transform: `translateY(${350 - t * 0.5}px)
    scale(${1 + t * 0.0005})`,
    background: `
      radial-gradient(circle at 20% 40%, rgba(255,255,255,0.9) 0%, transparent 85%),
      radial-gradient(circle at 50% 60%, rgba(255,255,255,0.85) 0%, transparent 60%),
      radial-gradient(circle at 80% 45%, rgba(255,255,255,0.9) 0%, transparent 55%),
      radial-gradient(circle at 35% 80%, rgba(255,255,255,0.6) 0%, transparent 65%)
    `,
  }}
/>
<div
  className="
    absolute w-[120vw] h-96 z-20 right-[-10vw] bottom-20
    pointer-events-none
    opacity-[0.12]
    mix-blend-overlay
    animate-[cloudDrift_20s_linear_infinite]

  "
  style={{
    backgroundImage:
      "url('https://grainy-gradients.vercel.app/noise.svg')",
  }}
/>
</div>

<div className="md:hidden lg:hidden">
        {/* VEDAS */}
        <Image
          src="/images/veda.png"
          alt=""
          width={300}
          height={300}
          className="
            absolute left-5 z-20 w-[120px] md:w-[200px] lg:w-[260px]
            transition-transform duration-700 ease-out
            will-change-transform transform-gpu
            hover:translate-x-1 hover:-translate-y-1 hover:rotate-1
          "
          style={{
            transform: `translateY(${250 - t * 0.5}px)`,
            opacity: fade,
          }}
        />
        <div
          className="
            absolute lg:w-70 lg:h-70 z-19 left-0 lg:-left-5 md:-left-5
            bg-amber-300/20 w-40 h-40 rounded-full blur-3xl animate-pulse sm:left-60
            transition-transform duration-1000 ease-out
            will-change-transform transform-gpu
          "
          style={{ transform: `translateY(${250 - t * 0.5}px)` }}
        />

        {/* GITA */}
        <Image
          src="/images/bhagwatgita.png"
          alt=""
          width={300}
          height={300}
          className="
            absolute left-5 z-20 w-[120px] md:w-[200px] lg:w-[260px]
            transition-transform duration-700 ease-out
            will-change-transform transform-gpu
            hover:translate-x-1 hover:-translate-y-1 hover:rotate-1
          "
          style={{
            transform: `translateY(${570 - t * 0.5}px)`,
            opacity: fade,
          }}
        />
        <div
          className="
            absolute lg:w-70 lg:h-70 z-19 left-0
            bg-amber-300/20 w-40 h-40 rounded-full blur-3xl animate-pulse
            transition-transform duration-1000 ease-out
            will-change-transform transform-gpu
          "
          style={{ transform: `translateY(${570 - t * 0.5}px)` }}
        />

        {/* RAMAYANA */}
        <Image
          src="/images/ramayan.png"
          alt=""
          width={300}
          height={300}
          className="
            absolute left-5 z-20 w-[120px] md:w-[200px] lg:w-[260px]
            transition-transform duration-700 ease-out
            will-change-transform transform-gpu
            hover:translate-x-1 hover:-translate-y-1 hover:rotate-1
          "
          style={{
            transform: `translateY(${850 - t * 0.5}px)`,
            opacity: fade,
          }}
        />
        <div
          className="
            absolute lg:w-70 lg:h-70 z-19 left-0
            bg-amber-300/20 w-40 h-40 rounded-full blur-3xl animate-pulse
            transition-transform duration-1000 ease-out
            will-change-transform transform-gpu
          "
          style={{ transform: `translateY(${850 - t * 0.5}px)` }}
        />

        {/* ================= RIGHT COLUMN ================= */}

        {/* PURANAS */}
        <Image
          src="/images/purana.png"
          alt=""
          width={300}
          height={300}
          className="
            absolute right-0 z-20 w-[120px] md:w-[200px] lg:w-[260px]
            transition-transform duration-700 ease-out
            will-change-transform transform-gpu
            hover:-translate-x-1 hover:-translate-y-1 hover:-rotate-1
          "
          style={{
            transform: `translateY(${410 - t * 0.5}px)`,
            opacity: fade,
          }}
        />
        <div
          className="
            absolute lg:w-75 lg:h-75 z-19 right-5 md:right-10
            bg-amber-300/20 w-40 h-40 rounded-full blur-3xl animate-pulse
            transition-transform duration-1000 ease-out
            will-change-transform transform-gpu
            hover:scale-110
          "
          style={{ transform: `translateY(${410 - t * 0.5}px)` }}
        />

        {/* UPANISHADS */}
        <Image
          src="/images/upanishad.png"
          alt=""
          width={300}
          height={300}
          className="
            absolute right-0 z-20 w-[120px] md:w-[200px] lg:w-[260px]
            transition-transform duration-700 ease-out
            will-change-transform transform-gpu
            hover:-translate-x-1 hover:-translate-y-1 hover:-rotate-1
          "
          style={{
            transform: `translateY(${725 - t * 0.5}px)`,
            opacity: fade,
          }}
        />
        <div
          className="
            absolute lg:w-75 lg:h-75 z-19 right-5
            bg-amber-300/20 w-40 h-40 rounded-full blur-3xl animate-pulse
            transition-transform duration-1000 ease-out
            will-change-transform transform-gpu
            hover:scale-110
          "
          style={{ transform: `translateY(${725 - t * 0.5}px)` }}
        />

<Image
  src="/images/templeHero.png"
  alt=""
  width={1200}
  height={1200}
  className="
    absolute w-196 bg-blend-overlay brightness-90
    bottom-120 right-0 z-9
    transition-transform duration-1200 ease-out
    will-change-transform transform-gpu scale-200
  "
  style={{
    transform: `
      translateY(${850 - t * 0.6}px)
      scale(${1 + t * 0.0005})
    `,
    opacity: 1,
  }}
/>

<div
  className="
    absolute w-[120vw] h-46 z-19 bottom-40
    rounded
    translate-x-20
    blur-3xl
    transition-transform duration-1200 ease-out
    will-change-transform transform-gpu
    opacity-90
  "
  style={{
    transform: `translateY(${400 - t * 0.55}px)
    scale(${1 + t * 0.0005})`,
    background: `
      radial-gradient(circle at 20% 40%, rgba(255,255,255,0.9) 0%, transparent 85%),
      radial-gradient(circle at 50% 60%, rgba(255,255,255,0.85) 0%, transparent 60%),
      radial-gradient(circle at 80% 45%, rgba(255,255,255,0.9) 0%, transparent 55%),
      radial-gradient(circle at 35% 80%, rgba(255,255,255,0.6) 0%, transparent 65%)
    `,
  }}
/>
<div
  className="
    absolute w-[120vw] h-96 z-20 right-[-10vw] bottom-20
    pointer-events-none
    opacity-[0.12]
    mix-blend-overlay
    animate-[cloudDrift_20s_linear_infinite]

  "
  style={{
    backgroundImage:
      "url('https://grainy-gradients.vercel.app/noise.svg')",
  }}
/>
</div>

<div className="hidden md:block lg:hidden">
      
        <Image
          src="/images/veda.png"
          alt=""
          width={300}
          height={300}
          className="
            absolute left-5 z-20 w-[120px] md:w-[200px] lg:w-[260px]
            transition-transform duration-700 ease-out
            will-change-transform transform-gpu
            hover:translate-x-1 hover:-translate-y-1 hover:rotate-1
          "
          style={{
            transform: `translateY(${250 - t * 0.5}px)`,
            opacity: fade,
          }}
        />
        <div
          className="
            absolute lg:w-70 lg:h-70 z-19 left-0 lg:-left-5 md:-left-5
            bg-amber-300/20 w-40 h-40 rounded-full blur-3xl animate-pulse sm:left-60
            transition-transform duration-1000 ease-out
            will-change-transform transform-gpu
          "
          style={{ transform: `translateY(${250 - t * 0.5}px)` }}
        />

        {/* GITA */}
        <Image
          src="/images/bhagwatgita.png"
          alt=""
          width={300}
          height={300}
          className="
            absolute left-5 z-20 w-[120px] md:w-[200px] lg:w-[260px]
            transition-transform duration-700 ease-out
            will-change-transform transform-gpu
            hover:translate-x-1 hover:-translate-y-1 hover:rotate-1
          "
          style={{
            transform: `translateY(${750 - t * 0.5}px)`,
            opacity: fade,
          }}
        />
        <div
          className="
            absolute lg:w-70 lg:h-70 z-19 left-0
            bg-amber-300/20 w-40 h-40 rounded-full blur-3xl animate-pulse
            transition-transform duration-1000 ease-out
            will-change-transform transform-gpu
          "
          style={{ transform: `translateY(${750 - t * 0.5}px)` }}
        />

        {/* RAMAYANA */}
        <Image
          src="/images/ramayan.png"
          alt=""
          width={300}
          height={300}
          className="
            absolute left-5 z-20 w-[120px] md:w-[200px] lg:w-[260px]
            transition-transform duration-700 ease-out
            will-change-transform transform-gpu
            hover:translate-x-1 hover:-translate-y-1 hover:rotate-1
          "
          style={{
            transform: `translateY(${1250 - t * 0.5}px)`,
            opacity: fade,
          }}
        />
        <div
          className="
            absolute lg:w-70 lg:h-70 z-19 left-0
            bg-amber-300/20 w-40 h-40 rounded-full blur-3xl animate-pulse
            transition-transform duration-1000 ease-out
            will-change-transform transform-gpu
          "
          style={{ transform: `translateY(${1250 - t * 0.5}px)` }}
        />


        {/* PURANAS */}
        <Image
          src="/images/purana.png"
          alt=""
          width={300}
          height={300}
          className="
            absolute right-0 z-20 w-[120px] md:w-[200px] lg:w-[260px]
            transition-transform duration-700 ease-out
            will-change-transform transform-gpu
            hover:-translate-x-1 hover:-translate-y-1 hover:-rotate-1
          "
          style={{
            transform: `translateY(${525 - t * 0.5}px)`,
            opacity: fade,
          }}
        />
        <div
          className="
            absolute lg:w-75 lg:h-75 z-19 right-5 md:right-10
            bg-amber-300/20 w-40 h-40 rounded-full blur-3xl animate-pulse
            transition-transform duration-1000 ease-out
            will-change-transform transform-gpu
            hover:scale-110
          "
          style={{ transform: `translateY(${525 - t * 0.5}px)` }}
        />

        {/* UPANISHADS */}
        <Image
          src="/images/upanishad.png"
          alt=""
          width={300}
          height={300}
          className="
            absolute right-0 z-20 w-[120px] md:w-[200px] lg:w-[260px]
            transition-transform duration-700 ease-out
            will-change-transform transform-gpu
            hover:-translate-x-1 hover:-translate-y-1 hover:-rotate-1
          "
          style={{
            transform: `translateY(${1050 - t * 0.5}px)`,
            opacity: fade,
          }}
        />
        <div
          className="
            absolute lg:w-75 lg:h-75 z-19 right-5
            bg-amber-300/20 w-40 h-40 rounded-full blur-3xl animate-pulse
            transition-transform duration-1000 ease-out
            will-change-transform transform-gpu
            hover:scale-110
          "
          style={{ transform: `translateY(${1050 - t * 0.5}px)` }}
        />

<Image
  src="/images/templeHero.png"
  alt=""
  width={800}
  height={800}
  className="
    absolute bg-blend-overlay brightness-90
    -bottom-100 right-0 z-9 w-screen
    transition-transform duration-700 ease-out
    will-change-transform transform-gpu scale-150
  "
  style={{
    transform: `
      translateY(${350 - t * 0.6}px)
      scale(${1 + t * 0.0005})
    `,
    opacity: 1,
  }}
/>

<div
  className="
    absolute w-[120vw] h-86 z-19 bottom-60
    rounded-full
    blur-3xl
    transition-transform duration-1000 ease-out
    will-change-transform transform-gpu
    opacity-60
  "
  style={{
    transform: `translateY(${350 - t * 0.5}px)
    scale(${1 + t * 0.0005})`,
    background: `
      radial-gradient(circle at 20% 40%, rgba(255,255,255,0.9) 0%, transparent 85%),
      radial-gradient(circle at 50% 60%, rgba(255,255,255,0.85) 0%, transparent 60%),
      radial-gradient(circle at 80% 45%, rgba(255,255,255,0.9) 0%, transparent 55%),
      radial-gradient(circle at 35% 80%, rgba(255,255,255,0.6) 0%, transparent 65%)
    `,
  }}
/>
<div
  className="
    absolute w-[120vw] h-96 z-20 right-[-10vw] bottom-20
    pointer-events-none
    opacity-[0.12]
    mix-blend-overlay
    animate-[cloudDrift_20s_linear_infinite]

  "
  style={{
    backgroundImage:
      "url('https://grainy-gradients.vercel.app/noise.svg')",
  }}
/>
</div>


        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.95))] z-10" />
        <div className="absolute bottom-0 h-[30vh] w-full bg-gradient-to-t from-black z-40" />
      </section>

      <section className="h-screen bg-black flex items-center justify-center text-white">
        <h2 className="text-4xl opacity-40">Next Sacred Section</h2>
      </section>
    </>
  );
}
