
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.png";

const HeroSection = () => {
  return (
    <div>
      <h1>We Build</h1>
      <h1>
        <span>Productive</span> App
      </h1>
      <p>
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div>
        <div>
          <Link to="#">Google Play</Link>
        </div>
        <div>
          <Link to="#">App Store</Link>
        </div>
      </div>
      <img src={heroImg} alt="Hero banner" />
    </div>
  );
};

export default HeroSection;
