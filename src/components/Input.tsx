import React from 'react'

interface InputProps{
    label?: string
    className?: string
    type?: string
    props?: React.InputHTMLAttributes<HTMLInputElement>
}

function Input({label, className, type, props}: InputProps) {
  return (
    <div>
        {label && <label htmlFor=''>{label}</label>}
        <input
          type={type}
          className={`${className} outline-none border border-gray-300 px-4 py-1.5`}
          {...props}
         />
    </div>
  )
}

export default Input
