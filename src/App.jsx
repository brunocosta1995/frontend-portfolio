import React from "react";
import Accordion from "./Componentes/Accordion";
import RandomColor from "./Componentes/Random-color";
import StarRating from "./Componentes/Star-rating";
import ImageSlider from "./Componentes/Image-slider";

export default function App() {
  return (
    <div>
      {/* <Accordion />

      <RandomColor />

      <StarRating numStars={10}/> */}

      <ImageSlider url={'https://picsum.photos/v2/list?'} page={1} limit={10} />


    </div>
  );
}
