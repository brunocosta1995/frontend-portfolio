import useWindowResize from ".";

export default function WindowResize() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div>
      <h1>Utilizando o hook useWindowResize</h1>
        <p>largura/width atual da janela - {width}</p>
        <p>altura/height atual da janela - {height}</p>
    </div>
  );
}
