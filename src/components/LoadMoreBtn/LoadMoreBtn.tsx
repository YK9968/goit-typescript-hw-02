import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  addPage: () => void;
};

export const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ addPage }) => {
  return (
    <div className={css.loadMoreBtnContainer}>
      <button onClick={addPage} type="button" className={css.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
};
