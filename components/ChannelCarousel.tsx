"use client";

import Image from "next/image";
import Link from "next/link";

const channels = [
  { src: "/images/channel1.png", slug: "channel1" },
  { src: "/images/channel2.png", slug: "channel2" },
  { src: "/images/channel3.png", slug: "channel3" },
  { src: "/images/channel4.png", slug: "channel4" },
  { src: "/images/channel5.png", slug: "channel5" },
  { src: "/images/channel6.png", slug: "channel6" },
  { src: "/images/channel7.png", slug: "channel7" },
  { src: "/images/channel8.png", slug: "channel8" },
  { src: "/images/channel9.png", slug: "channel9" },
  { src: "/images/channel10.png", slug: "channel10" },
];

export default function ChannelCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {[...channels, ...channels].map((channel, i) => (
          <div className="carousel-item" key={i}>
            <Link href={`/channels/${channel.slug}`}>
              <Image
                src={channel.src}
                alt={`Channel ${i + 1}`}
                width={400}
                height={400}
                style={{ borderRadius: "8px", cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 20px rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
