import { useRef } from "react";
import useFetch from "../Use-fetch";

export default function ScrollTopBottom() {
  const { data, loading, error } = useFetch(`https://dummyjson.com/products?limit=100`);

  const bottomRef = useRef(null);

    if(error) {
        <h1>Erro ocorrido: {error}</h1>
    }

  if (loading) {
    return <h1>Carregando dados aguarde</h1>
  }

  function handleScrollTop() {
    window.scrollTo({
        top: 0, left: 0, behavior: 'smooth'
    })
  }


  function handleScrollBottom() {
    bottomRef.current.scrollIntoView({behavior: 'smooth'});

  }

  return (
    <div>
      <h1>Componente de ir para cima e para baixo da página</h1>
      <h3>Parte de cima da página</h3>
      <button onClick={handleScrollBottom}>Ir para baixo</button>
      <ul style={{listStyle: 'none'}}>
        {data && data.products && data.products.length
          ? data.products.map((productItem) => (
              <li key={productItem.id}>{productItem.title}</li>
            ))
          : null}
      </ul>
      <button onClick={handleScrollTop}>Ir para cima</button>
      <div ref={bottomRef}></div>
      <h3>Parte de baixo da página</h3>
    </div>
  );
}
