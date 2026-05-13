import { createPortal } from "react-dom";
import "./Modal.css";

export default function Modal({ open, close, children }) {
  if (!open) return null;

  return createPortal(
    <div className="modal-overlay" onClick={close}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close" onClick={close}>
          ✕
        </button>

        {children}

      </div>
    </div>,
    document.body
  );
}