import React, { useState } from 'react'
import Header from '../header/Header'
import AvalibeMeals from '../meals/AvalibeMeals'
import MealsSummary from '../meals/MealsSummary'
import meal from '../image/meal.jpeg'
import { DUMMY_MEALS } from '../../data.js'

const Home = () => {
    const [count, setCount] = useState([])

    const handleClick = () => {
        setCount([...count])
        console.log(count)
    }
    return (
        <>
            <Header count={count.length} />
            <div
                className="bg-cover bg-no-repeat w-full h-32 sm:h-60"
                style={{ backgroundImage: `url(${meal})` }}
            />
            <MealsSummary />
            <div onClick={handleClick}>
                <AvalibeMeals data={DUMMY_MEALS} cartAdd={count} />
            </div>
        </>
    )
}

export default Home
