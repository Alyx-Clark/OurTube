import React from 'react'

function Modal({closeModal}) {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => closeModal(false)}> X </button>
          </div>
          <div className="title">
              <h1>Coming Soon!</h1>
          </div>
          <div className="body">
              <p>This feature will be implemented in the near future. Thanks for your patience.</p>
          </div>
        </div>
    </div>
  )
}

export default Modal;