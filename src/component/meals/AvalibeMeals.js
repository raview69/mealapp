import React from 'react'
import { DUMMY_MEALS } from '../../data.js'
import Card from '../ui/Card'

const AvalibeMeals = () => {
    const meallist = DUMMY_MEALS.map((meal) => (
        <li key={meal.id}>
            <p>{meal.name}</p>
        </li>
    ))
    return (
        <div className="flex justify-center py-5 text-black">
            <Card>
                <ul>{meallist}</ul>
            </Card>
        </div>
    )
}

export default AvalibeMeals
