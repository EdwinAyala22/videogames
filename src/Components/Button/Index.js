import React from 'react';
import './button.css';


const ButtonCard = ({type, style='btn text-white m-2 buttonCard', name}) => {
  return (
    <div>
        <button type={type} className={style}>
            {name}
        </button>
    </div>
  )
}

export default ButtonCard