import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="font-bold text-7xl pt-20">
        <h1>We Build</h1>
        <h1>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-bold">
            Productive
          </span>{" "}
          App
        </h1>
      </div>
      <div className="pt-10">
        <p>
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
        </p>
        <p>
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
      </div>
      <div className="pt-10">
        <div>
          <Link to="#" className="btn btn-ghost border-b-8">Google Play</Link>
          <Link to="#" className="btn btn-ghost border-b-8 ml-4">App Store</Link>
        </div>
      </div>
      <div className="mt-10">
        <img src={heroImg} alt="Hero banner" className="max-w-[1600px] mx-auto"/>
      </div>
      <section className="w-full bg-gradient-to-r from-violet-600 to-purple-500 text-white">
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
        Trusted By Millions, Built For You
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">

        <div className="px-6 py-8 text-center">
          <p className="text-sm/6 uppercase tracking-wider text-white/80">Total Downloads</p>
          <p className="mt-2 text-5xl font-extrabold">29.6M</p>
          <p className="mt-2 text-xs text-white/80">21% More Than Last Month</p>
        </div>

        <div className="px-6 py-8 text-center">
          <p className="text-sm/6 uppercase tracking-wider text-white/80">Total Reviews</p>
          <p className="mt-2 text-5xl font-extrabold">906K</p>
          <p className="mt-2 text-xs text-white/80">48% More Than Last Month</p>
        </div>

        <div className="px-6 py-8 text-center">
          <p className="text-sm/6 uppercase tracking-wider text-white/80">Active Apps</p>
          <p className="mt-2 text-5xl font-extrabold">132+</p>
          <p className="mt-2 text-xs text-white/80">31 More Will Launch</p>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
};

export default HeroSection;
