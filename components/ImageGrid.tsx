import Image from 'next/image';
import styles from '../styles/ImageGrid.module.css'; // Create this CSS module

interface ImageItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ImageGridProps {
  images: ImageItem[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className={styles.gridContainer}>
      {images.map((image, index) => (
        <div key={index} className={styles.gridItem}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            // Optional: Add layout="responsive" for responsive behavior
            // layout="responsive"
            // Optional: object-fit for controlling how the image fits within its container
            // style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;