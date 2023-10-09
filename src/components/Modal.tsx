import React from 'react'
import '../components/Modal.css';


function Modal({open, onClose}) {
    if(!open) return null
  return (
    <div className='modalContainer'>
    
    <div className="overlay_container">
    <p onClick={onClose} className="closeBtn">X</p>
     <div className="content">
        <p>WE HELP YOU TO GET IN CHARGE OF THE ENVIRONMENT! </p>
        
     
     
    </div>
    </div>
    { }
    </div>
  )
}

export default Modal