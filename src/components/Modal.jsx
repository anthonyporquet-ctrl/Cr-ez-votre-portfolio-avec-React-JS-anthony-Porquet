import { createPortal } from "react-dom";
import "./Modal.css";

export default function Modal({ children, close }) {
  return createPortal(
    <div className="modal-overlay" onClick={close}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}