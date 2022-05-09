import React from 'react'
import AvalibeMeals from './AvalibeMeals'
import MealsSummary from './MealsSummary'
import meal from '../image/meal.jpeg'

const Meals = () => {
    return (
        <div>
            <div
                className="bg-cover bg-no-repeat w-full h-32 sm:h-60"
                style={{ backgroundImage: `url(${meal})` }}
            />
            <MealsSummary />
            <AvalibeMeals />
        </div>
    )
}

export default Meals
