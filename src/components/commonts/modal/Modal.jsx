import React from 'react'
import './modal.css'

const ModalData = (props) => {
    const{name, lasName}=props
  return (
    <div className='modal'>
        <h5>{name}</h5>
        <h5>{lasName}</h5>
    </div>
  )
}

export default ModalData