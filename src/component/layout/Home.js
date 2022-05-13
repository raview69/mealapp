import React, { useState } from 'react'
import Header from '../header/Header'
import AvalibeMeals from '../meals/AvalibeMeals'
import MealsSummary from '../meals/MealsSummary'
import meal from '../image/meal.jpeg'
import { DUMMY_MEALS } from '../../data.js'

const Home = () => {
    const [cart, setCart] = useState([])

    const handleClick = () => {
        setCart([...cart])
        console.log(cart)
    }

    const findDuplicates = (arr) =>
        arr.filter((item, index) => arr.indexOf(item) != index)

    console.log(findDuplicates(cart)) // find How many duplicates
    console.log([...new Set(findDuplicates(cart))]) // find duplicates

    return (
        <>
            <Header count={cart.length} />
            <div
                className="bg-cover bg-no-repeat w-full h-32 sm:h-60"
                style={{ backgroundImage: `url(${meal})` }}
            />
            <MealsSummary />
            <div onClick={handleClick}>
                <AvalibeMeals data={DUMMY_MEALS} cartAdd={cart} />
            </div>
        </>
    )
}

export default Home
