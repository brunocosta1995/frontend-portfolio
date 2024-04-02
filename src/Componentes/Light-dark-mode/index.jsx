import useLocalStorage from "./useLocalStorage";
import './theme.css';

export default function LightDarkMode() {

    const [mode, setMode] = useLocalStorage('tema', 'light');

    function handleToggleMode() {
        setMode(mode === 'dark' ? 'light' : 'dark');
    }

  return (
    <div className="light-dark-mode" data-theme={mode}>
      <div className="light-dark-container">
        <p>Olá Mundo: {mode}</p>
        <button onClick={handleToggleMode}>Mudar de Tema</button>
      </div>
    </div>
  );
}
