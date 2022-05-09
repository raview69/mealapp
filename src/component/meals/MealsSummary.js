import React from 'react'

const MealsSummary = () => {
    return (
        <div className="flex items-center justify-center w-full bg-none -mt-20 sm:-mt-20">
            <div className="text-center text-white rounded-lg shadow-lg py-5 px-5 mx-2 sm:px-5 sm:py-10 sm:mx-10 lg:px-10 lg:py-16 bg-[#383838] ">
                <h2 className="text-xl sm:text-3xl lg:text-4xl">
                    Delicious Food, Delivered To You
                </h2>
                <p className="pt-4 pb-2 text-xs font-thin sm:text-lg">
                    Choose your favorite meal from our broad selection of
                    available meals and enjoy a delicious lunch or dinner at
                    home.
                </p>
                <p className="pt-4 pb-2 text-xs font-thin sm:text-lg">
                    All our meals are cooked with high-quality ingredients,
                    just-in-time and of course by experienced chefs!
                </p>
            </div>
        </div>
    )
}

export default MealsSummary
