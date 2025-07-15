'use client'
import ChannelCarousel from "@/components/ChannelCarousel";
import ProgramCarousel from "@/components/ProgramCarousel";

export default function Home() {
  return (
    <main className="home-container" style={{ position: 'relative' }}>
      {/* 🔵 Dark blue background section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to CBM TV</h1>
          <p>Your one-stop platform for live and on-demand entertainment.</p>
          
        </div>
      </div>

      {/* Channel carousel below */}
      <a href="/channels" className="attention-link">EXPLORE ALL CHANNELS</a>
      <ChannelCarousel />

      <a href="/programs" className="attention-link">EXPLORE YOUR FAVORITE PROGRAMS</a>
      <ProgramCarousel />
    </main>
  );
}
