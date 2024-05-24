import css from "./ImageCard.module.css";

type Urls = {
  small: string;
  regular: string;
};

type Images = {
  alt_description: string;
  urls: Urls;
};

type Props = {
  img: Images;
  onClick: (regular: string) => void;
};

export default function ImageCard({
  img: {
    alt_description,
    urls: { small, regular },
  },
  onClick,
}: Props) {
  return (
    <div>
      <img
        onClick={() => onClick(regular)}
        className={css.galleriImg}
        src={small}
        alt={alt_description}
      />
    </div>
  );
}
