import { useState } from "react";
import QRCode from "react-qr-code";
import './style.css';

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleInput(event) {
    const newValue = event.target.value;
    setInput(newValue);
    console.log(newValue);
  }

  function handleQRCode() {
    setQrCode(input);
  }

  return (
    <div className="qrcode-container">
      <h1>Gerador de QR Code</h1>
      <div className="input-qrcode">
        <input
          onChange={handleInput}
          value={input}
          type="text"
          name="qr-code"
          placeholder="Entre com o valor a ser gerado"
        />
        <button disabled={input && input.trim() !== '' ? false : true} onClick={handleQRCode}>Gerar QR Code</button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff"/>
      </div>
    </div>
  );
}
