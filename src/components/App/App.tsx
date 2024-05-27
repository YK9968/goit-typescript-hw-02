import { useState, useEffect } from "react";
import { fetchImgGallery } from "../../render-api";

import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import { ImageModal } from "../ImageModal/ImageModal";

import Modal from "react-modal";
import { Images } from "../../types";

Modal.setAppElement("#root");

type Status = true | false;

export default function App() {
  const [img, setImg] = useState<Images[]>([]);
  const [loading, setLoading] = useState<Status>(false);
  const [error, setError] = useState<Status>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [imgUrl, setImgUlr] = useState<string>("");
  const [modal, setModal] = useState<Status>(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const data = async () => {
      try {
        setLoading(true);
        const newImages = await fetchImgGallery(query, page);
        setImg((prevImages): Images[] => {
          return [...prevImages, ...newImages];
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    data();
  }, [query, page]);

  const handleSubmit = (query: string): void => {
    setQuery(query);
    setImg([]);
    setPage(1);
    setError(false);
    setLoading(false);
    setImgUlr("");
  };

  const addMoreImg = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const showModal = (url: string): void => {
    setImgUlr(url);
    setModal(true);
  };

  const closeModal = (): void => {
    setModal(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {img.length > 0 && <ImageGallery images={img} onClick={showModal} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {img.length > 0 && <LoadMoreBtn addPage={addMoreImg} />}
      <ImageModal image={imgUrl} state={modal} close={closeModal} />
    </div>
  );
}
