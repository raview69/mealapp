import React, { useState } from 'react'
import Header from '../header/Header'
import AvalibeMeals from '../meals/AvalibeMeals'
import MealsSummary from '../meals/MealsSummary'
import meal from '../image/meal.jpeg'
import { DUMMY_MEALS } from '../../data.js'
import { add } from '../util/utilPrice.js'

const Home = () => {
    const [cart, setCart] = useState([])
    const [cartshow, setCartshow] = useState(false)

    const handleClick = () => {
        setCart([...cart])
        console.log(cart)
    }

    const handleCartClick = () => {
        setCartshow(true)
    }

    const handleCartCloseClick = () => {
        setCartshow(false)
    }

    // const cartSort = [...new Set(cart)]

    // const findDuplicates = (arr) =>
    //     arr.filter((item, index) => arr.indexOf(item) != index)

    // console.log(findDuplicates(cart))
    // console.log([...new Set(findDuplicates(cart))])
    // const countItemDup = findDuplicates(cart) // find How many duplicates
    // const itemDup = [...new Set(findDuplicates(cart))] // find duplicates

    const totalPrice = cart.map((meallist) => meallist[1])
    const priceShow = totalPrice.reduce(add, 0).toFixed(2)

    const cartList = cart.map((meallist, index) => (
        <li key={index}>
            <div>
                {index + 1}.&nbsp;
                {meallist[0]}
            </div>
        </li>
    ))

    return (
        <>
            {cartshow ? (
                <div>
                    <div
                        className="flex top-0 left-0 w-full h-20 sticky"
                        onClick={handleCartClick}
                    >
                        <Header count={cart.length} />
                    </div>
                    <div
                        className="bg-cover bg-no-repeat w-full h-32 sm:h-60"
                        style={{ backgroundImage: `url(${meal})` }}
                    />
                    <div className="-mt-20 w-full">
                        <div className="text-white mx-2 rounded-lg shadow-lg p-5 bg-[#383838] sm:mx-20 lg:mx-52">
                            <div>
                                <ul>{cartList}</ul>
                            </div>
                            <div className="flex items-center justify-between py-3">
                                <div>Total:</div>
                                <div>${priceShow}</div>
                            </div>
                            <div className="flex items-center justify-end">
                                <button
                                    className="flex items-center justify-center rounded-sm bg-white text-[#383838] px-4 py-1 mr-2"
                                    onClick={handleCartCloseClick}
                                >
                                    Close
                                </button>
                                <button
                                    className="flex items-center justify-center rounded-sm bg-white text-[#383838] px-4 py-1"
                                    onClick={handleCartCloseClick}
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div
                        className="flex top-0 left-0 w-full h-20 sticky"
                        onClick={handleCartClick}
                    >
                        <Header count={cart.length} />
                    </div>
                    <div
                        className="bg-cover bg-no-repeat w-full h-32 sm:h-60"
                        style={{ backgroundImage: `url(${meal})` }}
                    />
                    <MealsSummary />
                    <div onClick={handleClick}>
                        <AvalibeMeals data={DUMMY_MEALS} cartItem={cart} />
                    </div>
                </>
            )}
        </>
    )
}

export default Home
