import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

type Urls = { small: string; regular: string };

type Images = {
  id: string;
  alt_description: string;
  urls: Urls;
};

type Props = {
  images: Images[];
  onClick: (regular: string) => void;
};

export default function ImageGallery({ images, onClick }: Props) {
  return (
    <ul className={css.imageGalleryList}>
      {images.map((img: Images) => (
        <li key={img.id}>
          <ImageCard img={img} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
