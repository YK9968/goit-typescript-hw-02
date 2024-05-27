import toast, { Toaster } from "react-hot-toast";
import { IoSearch } from "react-icons/io5";
import css from "./SearchBar.module.css";
import { FC, FormEvent } from "react";

type SearchBarProps = {
  onSubmit: (data: string) => void;
};

export const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const onSubmitBar = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const data = form.elements.namedItem("search") as HTMLInputElement;

    if (data.value.trim() === "") {
      toast.error("Sorry, input is emty. Please try again!");
      return;
    }
    onSubmit(data.value.trim());

    form.reset();
  };

  return (
    <header className={css.headerContainer}>
      <form className={css.formContainer} onSubmit={onSubmitBar}>
        <input
          className={css.headerInput}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.headerBtn} type="submit">
          <IoSearch size={15} />
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
};
