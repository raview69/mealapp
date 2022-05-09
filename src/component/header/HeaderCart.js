import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const HeaderCart = () => {
    return (
        <button className="flex bg-[#4d1601] items-center rounded-lg py-2 px-3">
            <AiOutlineShoppingCart className="w-7 h-7" />
            <span className="px-2">Your Cart</span>
            <span className="bg-[#b94517] py-1 px-3 rounded-full">3</span>
        </button>
    )
}

export default HeaderCart
