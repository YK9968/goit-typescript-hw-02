import { FC } from "react";
import { Images } from "../../types";
import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

type PropsImageGallery = {
  images: Images[];
  onClick: (regular: string) => void;
};

export const ImageGallery: FC<PropsImageGallery> = ({ images, onClick }) => {
  return (
    <ul className={css.imageGalleryList}>
      {images.map((img: Images) => (
        <li key={img.id}>
          <ImageCard img={img} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};
