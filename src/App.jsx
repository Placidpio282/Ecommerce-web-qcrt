import React, { useState } from 'react'
import Header from './components/Header'
import ProductGrid from './components/ProductGrid'
import CartSidebar from './components/CartSidebar'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")   // ✅ NEW

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <Provider store={store}>
      <Header 
        onToggleCart={toggleCart} 
        setSearchTerm={setSearchTerm}   // ✅ NEW
      />
      <ProductGrid searchTerm={searchTerm} />   {/* ✅ NEW */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </Provider>
  )
}

export default App