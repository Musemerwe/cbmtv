'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'


const genres = [
  { src: "/images/channel1.png", url: 'https://youtube.com/watch?v=genre1' },
  { src: "/images/channel2.png", url: 'https://youtube.com/watch?v=genre2' },
  { src: "/images/channel3.png", url: 'https://youtube.com/watch?v=genre3' },
  { src: "/images/channel4.png", url: 'https://youtube.com/watch?v=genre4' },
  { src: "/images/channel5.png", url: 'https://youtube.com/watch?v=genre5' },
  { src: "/images/channel6.png", url: 'https://youtube.com/watch?v=genre6' },
  { src: "/images/channel7.png", url: 'https://youtube.com/watch?v=genre7' },
  { src: "/images/channel8.png", url: 'https://youtube.com/watch?v=genre8' },
]

const movies = [
  { src: "/images/program1.png", url: 'https://youtube.com/watch?v=movie1' },
  { src: "/images/program2.png", url: 'https://youtube.com/watch?v=movie2' },
  { src: "/images/program3.png", url: 'https://youtube.com/watch?v=movie3' },
  { src: "/images/program4.png", url: 'https://youtube.com/watch?v=movie4' },
  { src: "/images/program5.png", url: 'https://youtube.com/watch?v=movie5' },
  { src: "/images/program6.png", url: 'https://youtube.com/watch?v=movie6' },
  { src: "/images/program7.png", url: 'https://youtube.com/watch?v=movie7' },
  { src: "/images/program8.png", url: 'https://youtube.com/watch?v=movie8' },
]

const events = [
  { src: "/images/channel1.png", url: 'https://youtube.com/watch?v=event1' },
  { src: "/images/channel2.png", url: 'https://youtube.com/watch?v=event2' },
  { src: "/images/channel3.png", url: 'https://youtube.com/watch?v=event3' },
  { src: "/images/channel4.png", url: 'https://youtube.com/watch?v=event4' },
  { src: "/images/channel5.png", url: 'https://youtube.com/watch?v=event5' },
  { src: "/images/channel6.png", url: 'https://youtube.com/watch?v=event6' },
  { src: "/images/channel7.png", url: 'https://youtube.com/watch?v=event7' },
  { src: "/images/channel8.png", url: 'https://youtube.com/watch?v=event8' },
]

function CarouselSection({ title, items }: { title: string; items: { src: string; url: string }[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: 'start', slidesToScroll: 'auto' },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }

    onSelect(); // run initially
    emblaApi.on('select', onSelect); // update on scroll
  }, [emblaApi])

  return (
    <section className="mb-10 relative">
      <h2 className="text-white text-2xl font-semibold mb-4">{title}</h2>

      <div className="flex items-center gap-2">
        {/* Left Button */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={`text-white text-4xl px-2 select-none ${
            !canScrollPrev ? 'opacity-30 cursor-default' : 'hover:text-yellow-400'
          }`}
          style={{ background: 'none', border: 'none' }}
        >
          &lt;
        </button>

        {/* Embla Carousel */}
        <div className="embla w-full" ref={emblaRef}>
          <div className="embla__container">
            {items.map((item, index) => (
              <div className="embla__slide" key={index}>
                <Link href={item.url} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                  <Image
                    src={item.src}
                    alt={`${title} ${index + 1}`}
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

        {/* Right Button */}
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={`text-white text-4xl px-2 select-none ${
            !canScrollNext ? 'opacity-30 cursor-default' : 'hover:text-yellow-400'
          }`}
          style={{ background: 'none', border: 'none' }}
        >
          &gt;
        </button>
      </div>
    </section>
  )
}

export default function MusicChannelPage() {
  return (
    <main className="bg-black min-h-screen p-4">
      <CarouselSection title="Music" items={genres} />
      <CarouselSection title="Movies" items={movies} />
      <CarouselSection title="Sports" items={events} />
      <CarouselSection title="Kids" items={genres} />
      <CarouselSection title="Gospel" items={movies} />
      <CarouselSection title="Documentaries" items={events} />
      <CarouselSection title="comic" items={genres} />
      <CarouselSection title="lifestyle" items={movies} />
      <CarouselSection title="ent" items={events} />
    </main>
  )
}
