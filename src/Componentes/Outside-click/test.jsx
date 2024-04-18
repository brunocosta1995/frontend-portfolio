import { useRef, useState } from "react";
import useOutsideClick from ".";
import './style.css'

export default function OutsideClick() {
  const [showContent, setShowContent] = useState(false);

  const ref = useRef();
  useOutsideClick(ref, handleContentClick);

  function handleContentClick() {
    setShowContent(!showContent);
  }

  return (
    <div className="outside-click-container">
      {showContent ? (
        <div  className="outside-click-content" ref={ref}>
          <h1>Título do Conteúdo</h1>
          <p>Clique fora desse conteúdo para fechar essa janela</p>
        </div>
      ) : (
        <button onClick={handleContentClick}>Mostrar Conteúdo</button>
      )}
    </div>
  );
}
