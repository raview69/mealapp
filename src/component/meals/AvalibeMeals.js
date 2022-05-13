/* eslint-disable react/prop-types */
import React from 'react'
import Card from '../ui/Card'

const AvalibeMeals = ({ data, cartAdd }) => {
    const meallist = data.map((meal) => (
        <li
            key={meal.id}
            className="flex justify-between border-b border-zinc-800 py-2"
        >
            <div className="flex top-0 left-0 w-full justify-between items-center">
                <div>
                    <p className="text-sm font-bold ">{meal.name}</p>
                    <p className="italic text-xs font-light py-1">
                        {meal.description}
                    </p>
                    <p className="text-[#8a2b06]">${meal.price}</p>
                </div>
                <div className="text-xl">
                    <button
                        className="font-light"
                        onClick={() => cartAdd.push(meal.name)}
                    >
                        +
                    </button>
                    <p></p>
                    <button
                        className="font-light"
                        onClick={() => cartAdd.pop(meal.name)}
                    >
                        -
                    </button>
                </div>
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
