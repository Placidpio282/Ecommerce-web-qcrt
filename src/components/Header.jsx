import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { useSelector } from 'react-redux';

function Header({onToggleCart, setSearchTerm}) {

  const selectTotalItems = (state)=>
      state.cart.items.reduce((total ,item) => total + item.quantity, 0)
   
  const totalItems = useSelector(selectTotalItems);

  return (
    <div className='bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50
        sticky top-0 z-40 py-2'>
       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

         <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3'>

           {/* Logo + Mobile Cart */}
           <div className='flex justify-between items-center'>
              <h1 className='text-2xl lg:text-4xl font-bold text-gray-900'>
                Quickcart
              </h1>

              {/* ✅ FIXED Mobile Cart */}
              <button
                className='lg:hidden relative p-2 bg-gray-300 text-gray-700 rounded-full'
                onClick={onToggleCart}
              >
                <ShoppingCart className='w-5 h-5'/>

                {totalItems > 0 && (
                  <span className='absolute -top-2 -right-2 bg-violet-500 text-white text-xs 
                  font-semibold rounded-full w-5 h-5 flex items-center justify-center'>
                    {totalItems}
                  </span>
                )}
              </button>
           </div>

           {/* Search */}
           <div className='w-full lg:w-auto'>
              <input 
                type="text"
                placeholder='Search Product'
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full lg:w-2xl bg-gray-300 p-3 rounded-md focus:outline-none focus:ring-2' 
              />
           </div>

           {/* Desktop Cart */}
           <button
            className='hidden lg:block relative p-2 bg-gray-300 text-gray-700 rounded-full hover:shadow-lg
            transform hover:scale-105 transition-all duration-200 cursor-pointer'
            onClick={onToggleCart}
            >
               <ShoppingCart className='w-6 h-6'/>
               {totalItems > 0 && (
                <span className='absolute -top-3 right-2 bg-violet-500 text-white text-xs 
               font-semibold rounded-full w-6 h-6 flex items-center justify-center'>
                 {totalItems}
               </span>
               )} 
           </button>

         </div>

       </div>
    </div>
  )
}
export default Header



























