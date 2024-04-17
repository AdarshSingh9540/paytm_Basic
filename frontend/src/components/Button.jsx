import React from 'react'

function Button({label}) {
  return (
    <div>
         <button className='w-full bg-black text-white p-2 my-4 rounded-md'>{label}</button>
    </div>
  )
}

export default Button