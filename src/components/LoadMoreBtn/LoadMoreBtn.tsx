import css from "./LoadMoreBtn.module.css";

type AddPage = {
  addPage: () => void;
};

export default function LoadMoreBtn({ addPage }: AddPage) {
  return (
    <div className={css.loadMoreBtnContainer}>
      <button onClick={addPage} type="button" className={css.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
}
