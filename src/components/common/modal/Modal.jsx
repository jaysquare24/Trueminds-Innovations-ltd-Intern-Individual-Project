import { useEffect } from "react";

export const Modal = ({children, onClose, open}) =>{
  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [open]);

  return (
  <>
    <div className="modal">
      <button className="close-modal" type="button" onClick={onClose}>X</button>
      { children}
    </div>
  </>
  )
}