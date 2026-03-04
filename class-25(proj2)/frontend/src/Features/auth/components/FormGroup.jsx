import React from 'react'

const FormGroup = ({label , placeholder , value , onChange }) => {
  return (
    <div className='form-group'>
        <label htmlFor=""  >{label}</label>
        <input
         value={value}
          onChange={(e)=>{
            onChange(e.target.value)
          }}
        type="text" placeholder = {placeholder} />

    </div>
  )
}

export default FormGroup