import React from "react";
import Accordion from "./Componentes/Accordion";
import RandomColor from "./Componentes/Random-color";
import StarRating from "./Componentes/Star-rating";
import ImageSlider from "./Componentes/Image-slider";
import LoadingProducts from "./Componentes/Loading-products";
import TreeView from "./Componentes/Tree-view";
import menuData from "./Componentes/Tree-view/data";
import QRCodeGenerator from "./Componentes/Qr-code-generator";
import LightDarkMode from "./Componentes/Light-dark-mode";
import ScrollIndicator from "./Componentes/Scroll-indicator";
import TabsTest from "./Componentes/Custom-tabs/tabs-test";
import ModalTest from "./Componentes/Custom-modal/modal-test";

export default function App() {
  return (
    <div>

      {/* Accordian componente */}

      {/* <Accordion /> */}

      {/* Cores Aleatórias componente */}

      {/* <RandomColor /> */}

      {/* Rating em estrelas componente */}

      {/* <StarRating numStars={10}/> */}

      {/*slider de Imagens componente */}

      {/* <ImageSlider url={'https://picsum.photos/v2/list?'} page={1} limit={10} /> */}

      {/* Carregar mais produtos componente */}

      {/* <LoadingProducts /> */}

      {/* Tree view componente/menu UI componente / menu recursivo com navegação */}

      {/* <TreeView menu={menuData}/> */}

      {/* Gerador de QR Code */}

      {/* <QRCodeGenerator/> */}

      {/* Modificador(toggle) de Light/Dark Tema */}
      {/* <LightDarkMode/> */}

      {/* Indicador do Scroll em Andamento */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products'}/> */}

      {/* Guias Dinâmicas Personalizadas */}
      {/* <TabsTest/> */}

      {/* Janela Modal Pop Up Customizada */}
      <ModalTest/>

    </div>
  );
}
