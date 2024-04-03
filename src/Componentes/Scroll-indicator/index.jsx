import { useEffect } from "react";
import { useState } from "react";
import './style.css';

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const result = await response.json();
      if (result && result.products && result.products.length > 0) {
        setLoading(false);
        setData(result.products);
      }
    } catch (error) {
      setLoading(true);
      console.log(error);
      setErrorMessage(error.message);
    }
  }

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const quantScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((quantScrolled / height) * 100);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.document.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.document.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(scrollPercentage);

  if (errorMessage) {
    return <div>Erro! {errorMessage}</div>
  }

  if (loading) {
    return <div>Carregando dados da API! Aguarde</div>
  }

  return (
    <div className="scroll-container">
      <div className="scroll-top-container">
        <h1>Indicador do Scroll</h1>
        <div className="scroll-progress">
          <div
            className="current-progress"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
