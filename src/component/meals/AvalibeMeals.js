/* eslint-disable react/prop-types */
import React from 'react'
import Card from '../ui/Card'

const AvalibeMeals = ({ data, cartAdd }) => {
    const meallist = data.map((meal) => (
        <li
            key={meal.id}
            className="flex justify-between border-b border-zinc-800 py-2"
        >
            <div>
                <p className="text-sm font-bold ">{meal.name}</p>
                <p className="italic text-xs font-light py-1">
                    {meal.description}
                </p>
                <p className="text-[#8a2b06]">${meal.price}</p>
                <button onClick={() => cartAdd.push(meal.name)}>+</button>
                <p></p>
                <button onClick={() => cartAdd.pop(meal.name)}>-</button>
                <p></p>
            </div>
        </li>
    ))
    return (
        <div className="flex justify-center py-5 text-black">
            <Card>
                <ul className="w-full">{meallist}</ul>
            </Card>
        </div>
    )
}

export default AvalibeMeals
