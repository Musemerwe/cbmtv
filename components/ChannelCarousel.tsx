"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const channels = [
  { src: "/images/channel1.png", slug: "channels/music" },
  { src: "/images/channel2.png", slug: "channels/discovery" },
  { src: "/images/channel3.png", slug: "channels/fashion" },
  { src: "/images/channel4.png", slug: "channels/voices" },
  { src: "/images/channel5.png", slug: "channels/nature" },
  { src: "/images/channel6.png", slug: "channels/gospel" },
  { src: "/images/channel7.png", slug: "channels/ent" },
  { src: "/images/channel8.png", slug: "channels/movies" },
  { src: "/images/channel9.png", slug: "channels/comic" },
  { src: "/images/channel10.png", slug: "channels/sports" },
];

export default function ChannelCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    const updateButtons = () => {
      setCanScrollPrev(embla.canScrollPrev());
      setCanScrollNext(embla.canScrollNext());
    };
    embla.on("select", updateButtons);
    updateButtons();
  }, [embla]);

  return (
    <div className="carousel-container">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {channels.map((channel, i) => (
            <div className="embla__slide" key={i}>
              <Link href={`/${channel.slug}`}>
                <Image
                  src={channel.src}
                  alt={`Channel ${i + 1}`}
                  width={270}
                  height={270}
                  style={{
                    borderRadius: "8px",
                    cursor: "pointer",
                    marginRight: "10px",
                    transition: "transform 0.3s ease, border: 3px solid transparent; 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "scale(1.05)";
                    (e.currentTarget as HTMLElement).style.border =
                      '3px solid yellow';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "scale(1)";
                    (e.currentTarget as HTMLElement).style.border = "none";
                  }}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <button
        className={`previous ${!canScrollPrev ? "disabled" : ""}`}
        onClick={scrollPrev}
      >
        &#8249;
      </button>

      <button
        className={`next ${!canScrollNext ? "disabled" : ""}`}
        onClick={scrollNext}
      >
        &#8250;
      </button>
    </div>
  );
}
