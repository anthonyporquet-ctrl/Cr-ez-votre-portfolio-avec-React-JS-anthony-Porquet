import { createPortal } from "react-dom";

export default function Modal({ open, close, children }) {
  if (!open) return null;

  return createPortal(
    <div
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          padding: 20,
          borderRadius: 10,
        }}
      >
        {children}

        <button onClick={close}>Fermer</button>
      </div>
    </div>,
    document.body
  );
}