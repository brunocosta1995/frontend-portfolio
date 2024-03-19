import { useState } from "react";
import "./style.css";

export default function RandomColor() {
  const [typeColor, setTypeColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleHexColor() {
    setTypeColor("hex");
    const arrColor = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      let indColor = Math.floor(Math.random() * arrColor.length);
      newColor += arrColor[indColor];
    }
    setColor(newColor);
  }

  function handleRgbColor() {
    setTypeColor("rgb");
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let newColor = `rgb(${r}, ${g}, ${b})`;
    setColor(newColor);
  }

  return (
    <div className="container-Color">
      <div>
        <h1>Tipo de Cor: {typeColor.toUpperCase()}</h1>
        <h2>Cor de Fundo: {color}</h2>
      </div>
      <div
        className="button-Color"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: color,
        }}
      >
        <button onClick={handleHexColor}>
          Gerar Cor Aleatória no Padrão HEX
        </button>
        <button onClick={handleRgbColor}>
          Gerar Cor Aleatória no Padrão RGB
        </button>
        <button onClick={typeColor === 'hex' ? handleHexColor : handleRgbColor}>Gerar Cor Aleatória</button>
        <div></div>
      </div>
    </div>
  );
}
