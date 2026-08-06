import "./Modal.css";

export default function Modal({

open,

title,

children,

footer,

onClose,

}){

if(!open) return null;

return(

<div className="modal-overlay" onClick={onClose}>

<div
className="modal"
onClick={(e)=>e.stopPropagation()}
>

<div className="modal-header">

<h3 className="modal-title">

{title}

</h3>

<button
className="modal-close"
type="button"
onClick={onClose}
>

✕

</button>

</div>

<div className="modal-body">

{children}

</div>

{footer && (

<div className="modal-footer">

{footer}

</div>

)}

</div>

</div>

);

}
