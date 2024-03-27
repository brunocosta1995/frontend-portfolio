import React from "react";
import Accordion from "./Componentes/Accordion";
import RandomColor from "./Componentes/Random-color";
import StarRating from "./Componentes/Star-rating";
import ImageSlider from "./Componentes/Image-slider";
import LoadingProducts from "./Componentes/Loading-products";
import TreeView from "./Componentes/Tree-view";
import menuData from "./Componentes/Tree-view/data";
import QRCodeGenerator from "./Componentes/Qr-code-generator";

export default function App() {
  return (
    <div>

      {/* Accordian componente */}

      <Accordion />

      {/* Cores Aleatórias componente */}

      <RandomColor />

      {/* Rating em estrelas componente */}

      <StarRating numStars={10}/>

      {/*slider de Imagens componente */}

      <ImageSlider url={'https://picsum.photos/v2/list?'} page={1} limit={10} />

      {/* Carregar mais produtos componente */}

      <LoadingProducts />

      {/* Tree view componente/menu UI componente / menu recursivo com navegação */}

      <TreeView menu={menuData}/>

      {/* Gerador de QR Code */}

      <QRCodeGenerator/>


    </div>
  );
}
