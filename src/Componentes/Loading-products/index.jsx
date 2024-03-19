import { useEffect } from "react";
import { useState } from "react";
import "./style.css";

export default function LoadingProducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevState) => [...prevState, ...result.products]);
        setLoading(false);
      }
      console.log(result);
      console.log(products);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (products.length === 100) {
      setDisableButton(true);
    }
  }, [products]);

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Carregando os Produtos Aguarde!</div>;
  }

  function handleCount() {
    setCount((prevState) => prevState + 1);
  }

  return (
    <div className="loading-products-container">
      <div className="product-container">
        {products && products.length
          ? products.map((productsItem) => {
              return (
                <div key={productsItem.id} className="product">
                  <img
                    src={productsItem.thumbnail}
                    alt={productsItem.description}
                  />
                  <p>{productsItem.title}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={handleCount}>
          Carregar Mais Produtos
        </button>
        {
            disableButton ? <p>Você Atingiu o Máximo de Produtos Carregados</p> : null
        }
      </div>
    </div>
  )
}
