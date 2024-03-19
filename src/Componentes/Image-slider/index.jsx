import { useEffect } from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, page, limit }) {
  const [images, setImages] = useState([]);
  const [slide, setSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      // https://picsum.photos/v2/list?page=1&limit=100 /*API PICSUM*/
      const response = await fetch(`${getUrl}page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setSlide((prevState) => {
      if (prevState === 0) return images.length - 1;
      else return prevState - 1;
    });
    // setSlide(slide === 0 ? images.length - 1 : slide - 1)
  }

  function handleNext() {
    setSlide((prevState) => {
      if (prevState === images.length - 1) return 0;
      else return prevState + 1;
    });

    // setSlide(slide === images.length - 1 ? 0 : slide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
    console.log(images);
  }, [url]);

  if (loading) {
    return <div>Carregando Dados Por Favor Aguarde!</div>;
  }

  if (errorMsg !== null) {
    return <div>Erro Ocorrido em Carregar as Imagens!</div>;
  }

  return (
    <div class="imgSlider-container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => {
            return (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={
                  slide === index
                    ? "current-image"
                    : "current-image hidden-current-image"
                }
              />
            );
          })
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                onClick={() => setSlide(index)}
                className={
                  slide === index
                    ? "current-indicator"
                    : "current-indicator alternative-indicator"
                }
                key={index}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
