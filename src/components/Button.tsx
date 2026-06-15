import React from 'react'

interface ButtonProp{
    children: React.ReactNode
    bgColor: string
    textColor: string
    className: string
    props: {}
}

function Button({children, bgColor, textColor, className, props}: ButtonProp) {
  return (
    <button
      className={`$${bgColor} ${textColor} ${className}`}
      {...props}
    >
        {children}
    </button>
  )
}

export default Button
