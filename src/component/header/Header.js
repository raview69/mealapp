import React from 'react'
import HeaderCart from './HeaderCart'

const Header = () => {
    return (
        <div className="flex top-0 left-0 w-full h-20 bg-[#8a2b06] text-white justify-between items-center px-10 shadow-lg z-10">
            <h1>ReactMeal</h1>
            <HeaderCart />
        </div>
    )
}

export default Header
