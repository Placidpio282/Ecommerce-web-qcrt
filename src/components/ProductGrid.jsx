import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../../data/products'
import { motion } from "framer-motion";   // ✅ ADD THIS

function ProductGrid({ searchTerm }) {

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
         <div className='text-center mb-12'>
           <h2 className='text-4xl font-black text-gray-900 mb-4'>
            Features Products
            </h2>
            <p className='text-lg text-gray-600'>
              Discover our exclusive range of products designed to enchance your 
              lifestyle.
            </p>
         </div>

         {/* ✅ GRID ANIMATION START */}
         <motion.div 
           className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
           initial="hidden"
           animate="visible"
           variants={{
             hidden: {},
             visible: {
               transition: {
                 staggerChildren: 0.2   // 🔥 one by one animation
               }
             }
           }}
         >
           {filteredProducts.map((product) => (
             
             <motion.div
               key={product.id}
               variants={{
                 hidden: { opacity: 0, y: 40 },
                 visible: { opacity: 1, y: 0 }
               }}
               transition={{ duration: 0.5 }}
             >
               <ProductCard product={product} />
             </motion.div>

           ))}
         </motion.div>
         {/* ✅ GRID ANIMATION END */}

        </div>
    </div>
  )
}

export default ProductGrid
