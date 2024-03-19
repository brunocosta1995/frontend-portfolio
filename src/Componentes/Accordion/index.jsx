import React, { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiple, setEnableMultiple] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  function handleSingleSelection(getId) {
    setSelected((prevState) => (prevState === getId ? null : getId));
  }

  function handleEnableMultiple() {
    setEnableMultiple(!enableMultiple);
  }

  function handleMultipleSelected(getId) {
    const copyMultiple = [...multipleSelected];
    const equalId = copyMultiple.find((el) => el === getId);
    if (getId === equalId) {
        const ind = copyMultiple.indexOf(equalId);
        if (ind !== -1) copyMultiple.splice(ind, 1);
    } else {
      copyMultiple.push(getId);
      console.log(multipleSelected);
    }
    setMultipleSelected(copyMultiple);
  }

  console.log(multipleSelected, selected);

  return (
    <div className="wrapper">
      <button onClick={handleEnableMultiple}>Habilitar Seleção Múltipla</button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiple
                    ? () => handleMultipleSelected(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.pergunta}</h3>
                <span>+</span>
              </div>
              {enableMultiple
                ? multipleSelected.find((el) => el === dataItem.id) && (
                    <div className="content">{dataItem.resposta}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.resposta}</div>
                  )}
            </div>
          ))
        ) : (
          <div>Nenhum dado encontrado!</div>
        )}
      </div>
    </div>
  );
}
