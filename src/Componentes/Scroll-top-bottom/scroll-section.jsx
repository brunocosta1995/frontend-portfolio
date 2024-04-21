import { useRef } from "react";

export default function ScrollSection() {
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "gray",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "yellow",
      },
    },
  ];

  const ref = useRef(null);

  function handleScrollSection() {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <h1>Rolar para uma seção em específico</h1>
      <button onClick={handleScrollSection}>Clique para ir para seção</button>
      {data.map((item, index) => (
        <div ref={index === 3 ? ref : null} style={item.style}>
          <h3>{item.label}</h3>
        </div>
      ))}
    </div>
  );
}
