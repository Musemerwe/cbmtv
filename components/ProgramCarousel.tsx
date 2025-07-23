'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ImageGrid.module.css";

interface ImageItem {
  src: string;
  alt: string;
  width: number;
  height: number;
  slug: string; // <-- add this
}

const images: ImageItem[] = [
  { src: '/images/program4.png', alt: 'Image 1', width: 400, height: 400, slug: 'program1' },
  { src: '/images/program6.png', alt: 'Image 2', width: 400, height: 400, slug: 'program2' },
  { src: '/images/program7.png', alt: 'Image 3', width: 400, height: 400, slug: 'program3' },
  { src: '/images/program4.png', alt: 'Image 4', width: 400, height: 400, slug: 'program4' },
  { src: '/images/program5.png', alt: 'Image 5', width: 400, height: 400, slug: 'program5' },
  { src: '/images/program6.png', alt: 'Image 6', width: 400, height: 400, slug: 'program6' },
  { src: '/images/program7.png', alt: 'Image 7', width: 400, height: 400, slug: 'program7' },
  { src: '/images/program8.png', alt: 'Image 8', width: 400, height: 400, slug: 'program8' },
];

const ImageGrid = () => {
  return (
    <div className={styles.grid}>
      {images.map((image, index) => (
        <div className={styles.imageWrapper} key={index}>
          <Link href={`/programs/${image.slug}`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              style={{ objectFit: 'cover' }}
              className={styles.image}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
