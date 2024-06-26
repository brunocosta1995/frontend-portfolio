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
import GithubFinder from "./Componentes/Github-finder";
import SearchAutocomplete from "./Componentes/Search-autocomplete";
import TicTacToe from "./Componentes/Tic-tac-toe";
import FeatureFlagGlobalSate from "./Componentes/Feature-flag/context";
import FeatureFlags from "./Componentes/Feature-flag";
import CustomFetchHook from "./Componentes/Use-fetch/test";
import OutsideClick from "./Componentes/Outside-click/test";
import WindowResize from "./Componentes/Windows-resize/test";
import ScrollTopBottom from "./Componentes/Scroll-top-bottom";
import ScrollSection from "./Componentes/Scroll-top-bottom/scroll-section";

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
      {/* <ModalTest/> */}

      {/* Buscar usuário no GitHub */}
      {/* <GithubFinder/> */}

      {/* Caixa de busca com preenchimento automático */}
      {/* <SearchAutocomplete /> */}

      {/* Componente de Jogo da velha */}
      {/* <TicTacToe/> */}

      {/* Implementação do FeatureFlags com Context */}
      {/* <FeatureFlagGlobalSate>
        <FeatureFlags/>
      </FeatureFlagGlobalSate> */}

      {/* Custom Hook com Fetch e UseEffect */}
      {/* <CustomFetchHook/> */}

      {/* Componente de Clicar Fora Outside Click */}
      {/* <OutsideClick/> */}

      {/* Componente Window Resize */}
      {/* <WindowResize/> */}

      {/* Rolar para baixo e cima da página */}
      {/* <ScrollTopBottom/> */}

      {/* Rolar para seção específica da página */}
      <ScrollSection/>


    </div>
  );
}
