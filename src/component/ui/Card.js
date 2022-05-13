/* eslint-disable react/prop-types */
import React from 'react'

const Card = (props) => {
    return (
        <div className="flex items-center px-5 pt-5 pb-8 rounded-lg shadow-lg bg-white w-9/12 sm:w-6/12">
            {props.children}
        </div>
    )
}

export default Card
