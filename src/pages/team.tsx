import { FC } from "react";
import styles from "../styles/Gallery.module.css";

const images = [
  { src: "/images/img-1.jpg", label: "Renji" },
  { src: "/images/img-2.jpg", label: "Sora" },
  { src: "/images/img-3.jpg", label: "Kaito" },
  { src: "/images/img-4.jpg", label: "Tsuki" },
  { src: "/images/img-5.jpg", label: "Mitsui" },
];

const Gallery: FC = () => {
  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <div
          key={index}
          className={styles.box}
          style={{ backgroundImage: `url(${image.src})` }}
          data-text={image.label}
        ></div>
      ))}
    </div>
  );
};

export default Gallery;
