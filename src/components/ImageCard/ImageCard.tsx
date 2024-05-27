import { Images } from "../../types";
import css from "./ImageCard.module.css";

import React, { FC } from "react";

type ImageCardProps = {
  img: Images;
  onClick: (regular: string) => void;
};

export const ImageCard: FC<ImageCardProps> = ({
  img: {
    alt_description,
    urls: { small, regular },
  },
  onClick,
}) => {
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
};
