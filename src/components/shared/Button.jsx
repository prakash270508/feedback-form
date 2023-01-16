import React from 'react'

export default function Button({children, type, version, isDisabled}) {
  return (
    <div>
      <button type={type} disabled={isDisabled} className={`btn btn-${version}` }>
        {children}
      </button>
    </div>
  )
}

Button.defaultProps = {
    version : 'primary',
    type : "button",
    isDisabled: false
}
