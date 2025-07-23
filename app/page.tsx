'use client'
import ChannelCarousel from "@/components/ChannelCarousel";
import ProgramCarousel from "@/components/ProgramCarousel";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/prog9.jpeg",
    title: "Winning Proposal",
    description: "A story of rivalry, support, and success as Emily and Sarah compete for a promotion with Alex's unwavering help.",
  },
  {
    image: "/images/program2.png",
    title: "",
    description: ".",
  },
  {
    image: "/images/program3.png",
    title: "",
    description: ".",
  },
  {
    image: "/images/program4.png",
    title: "",
    description: "",
  },
  {
    image: "/images/program5.png",
    title: "Music",
    description: "A dynamic music streaming experience with diverse genres, live shows, and exclusive content.",
  },
  {
    image: "/images/program6.png",
    title: "Sports",
    description: "Stream live sports games and shows with nonstop action and expert insights.",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000); // 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home-container" style={{ position: 'relative' }}>
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentIndex ? "active" : ""}`}
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <a href="/programs" className="watch-button">Watch Trailer</a>
            </div>
          </div>
        ))}

        {/* ✅ DOTS ARE NOW INSIDE THE SLIDESHOW CONTAINER */}
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active-dot" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <a href="/channels" className="attention-link">EXPLORE ALL CHANNELS</a>
      <ChannelCarousel />
      <div className="horizontal-menu">
        <a href="/programs" className="attention-link2">
        EXPLORE YOUR FAVORITE PROGRAMS
        </a>
        <span>TV Shows</span>
        <span>Movies</span>
        <span>Documentaries</span>
        <span>Music Videos</span>
      </div>
     
      <ProgramCarousel />
    </main>
  );
}
