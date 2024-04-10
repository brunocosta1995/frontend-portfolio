import './style.css';


export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <span onClick={onClose} className="close-modal-icon">&times;</span>
          <h2>{header ? header : "Cabeçalho"}</h2>
        </div>
        <div className="modal-body">
          {body ? (
            body
          ) : (
            <div>
              <p>Este é o corpo do Modal</p>
            </div>
          )}
        </div>
        <div className="modal-footer">{footer ? footer : <h2>Rodapé Padrão</h2>}</div>
      </div>
    </div>
  );
}
