import React from 'react'

interface InputProps{
    label: string
    className: string
    type: string
    props: {}
}

function Input({label, className, type, props}: InputProps) {
  return (
    <div>
        {label && <label htmlFor=''>label</label>}
        <input
          type={type}
          className={`${className}`}
          {...props}
         />
    </div>
  )
}

export default Input
