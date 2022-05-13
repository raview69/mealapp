import React from 'react'
import Cart from '../cart/Cart'

const Header = (porps) => {
    return (
        <div className="flex top-0 left-0 w-full h-20 bg-[#8a2b06] text-white justify-between items-center px-10 shadow-lg z-10">
            <h1>ReactMeal</h1>
            <Cart number={porps.count} />
        </div>
    )
}

export default Header
