import React from 'react'

const Button = () => {
  return (
   <div>
     <button class="flex  bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-xl font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        <img src="asset 2.png" alt="Google" />
        <span className='pl-3 text-0.5xl'>Continue with Google</span>
    </button>
   </div>
  )
}

export default Button