import { useState } from "react";
import useFetch from ".";

export default function CustomFetchHook() {
  const { data, loading, error } = useFetch(`https://dummyjson.com/products`);
  const [dataFetch, setDataFetch] = useState([]);

  console.log(data, loading, error);

  function handleClick() {
    if (data && data.products && data.products.length) {
        setDataFetch(data.products);
    }
  }

  return (
    <div>
      <h1>Custom Hook com Fetch e useEffect</h1>
      <button onClick={handleClick}>Fetch Dados</button>
      {loading ? <h2>Carregando dados aguarde</h2> : null}
      {error ? <h2>{error}</h2> : null}
      {dataFetch && dataFetch.length
        ? dataFetch.map((item) => <p key={item.id}>{item.title}</p>)
        : null}
    </div>
  );
}
