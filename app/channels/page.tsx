"use client";
import Image from "next/image";
import Link from "next/link";

const channelData = [
  { name: "music", src: "/channels/music channel.png", slug: 'channels/music'},
  { name: "movies", src: "/channels/movie channel.png", slug: 'channels/movies'},
  { name: "voices", src: "/channels/voices channel.png", slug: 'channels/voices'},
  { name: "gospel", src: "/channels/gospel channel.png", slug: 'channels/gospel'}, // fixed typo here
  { name: "nature", src: "/channels/nature channel.png", slug: 'channels/nature'},
  { name: "discovery", src: "/channels/discovery channel.png", slug: 'channels/discovery'},
  { name: "fashion", src: "/channels/fashion channel.png", slug: 'channels/fashion'},
  { name: "sports", src: "/channels/sports channel.png", slug: 'channels/sports'},
  { name: "comic", src: "/channels/comic channel.png", slug: 'channels/comic'},
  { name: "entertainment", src: "/channels/ent channel.png", slug: 'channels/ent'},
  // Add more as needed
];

export default function ChannelsPage() {
  return (
    <div className="channel-grid">
      {channelData.map((channel, index) => (
        <Link href={`/${channel.slug}`} key={index}>
          <div className="channel-item">
            <Image
              src={channel.src}
              alt={channel.name}
              width={300}
              height={300}
              className="channel-image"
            />
            <div className="channel-overlay" />
            <div className="channel-text">{channel.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
