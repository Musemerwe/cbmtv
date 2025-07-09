'use client'
import ChannelCarousel from "@/components/ChannelCarousel";
import ProgramCarousel from "@/components/ProgramCarousel";

export default function Home() {
  return (
    <main className="home-container" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background video */}
      
      {/* Your existing content */}
      <h1>Welcome to CBM TV</h1>
      <p>Your one-stop platform for live and on-demand entertainment.</p>
      <a href="/channels" className="attention-link">Explore Channels</a>
      {/* Channel carousel below */}
      <ChannelCarousel />

      <a href="/programs" className="attention-link">Explore Programs</a>
      <ProgramCarousel />
    </main>
  );
}
