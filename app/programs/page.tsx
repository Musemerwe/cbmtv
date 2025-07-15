"use client";
import Image from "next/image";

const programs = [
  {src: "/programs/movie1.png" },
  {src: "/programs/movie2.png" },
  {src: "/programs/movie3.png" },
  {src: "/programs/movie4.png" },
  {src: "/programs/movie5.png" },
  {src: "/programs/movie6.png" },
  {src: "/programs/music.png" },
  {src: "/programs/sports1.png" },
  {src: "/programs/amooti.jpg" },
  {src: "/programs/afrobeat1.jpg" },
  {src: "/programs/pop.jpg" },
  {src: "/programs/dr.hillary.jpg" },
  {src: "/programs/kansiime.jpg" },
  {src: "/programs/sportmovie8.jpg" },
  {src: "/programs/musicmovie.jpg" },
  {src: "/programs/fun factory.jpg" },
  {src: "/programs/basketmouth.jpg" },
  {src: "/programs/sportmovie1.jpg" },
  {src: "/programs/pablo.jpg" },
  {src: "/programs/trap.jpg" },
  {src: "/programs/rnb.jpg" },
  {src: "/programs/sportmovie6.jpg" },
  {src: "/programs/musicmovie.jpg" },
  {src: "/programs/rnb2.jpg" },
  {src: "/programs/trevor noah.jpg" },
  {src: "/programs/event8.jpg" },
  {src: "/programs/sportdoc1.jpg" },
  {src: "/programs/volley.jpg" },
  {src: "/programs/upl.png" },
  {src: "/programs/movie6.png" },
  {src: "/programs/musicdoc1.jpg" },
  {src: "/programs/europa league.png" },
  {src: "/programs/comedymovie3.jpg" },
  {src: "/programs/champions league.jpg" },
  {src: "/programs/comedy store.jpg" },
  {src: "/programs/epl.jpg" },
  {src: "/programs/katt williams.jpg" },
  {src: "/programs/fa.png" },
  {src: "/programs/event5.jpg" },
  {src: "/programs/fuba.jpg" },
  {src: "/programs/wildn'out.jpg" },
  {src: "/programs/sportdoc3.jpg" },
  {src: "/programs/event4.jpg" },
  {src: "/programs/serie a.jpg" },
  {src: "/programs/event1.jpg" },
  {src: "/programs/sportmovie3.jpg" },
  {src: "/programs/boxing ug.jpg" },
  {src: "/programs/event1.jpg" },
  // Add more as needed
];

export default function ProgramsGrid() {
  return (
    <div className="program-grid">
      {programs.map((program, index) => (
        <div key={index} className="program-item">
          <Image
            src={program.src}
            alt='' //{program.name=''}
            width={300}
            height={300}
            className="program-image"
          />
          
        {/*<div className="program-text">{program.name}</div>*/}
        </div>
      ))}
    </div>
  );
}
