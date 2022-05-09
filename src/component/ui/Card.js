/* eslint-disable react/prop-types */
import React from 'react'

const Card = (props) => {
    return (
        <div className="flex items-center p-5 rounded-lg shadow-lg bg-white w-9/12 sm:w-6/12">
            {props.children}
        </div>
    )
}

export default Card
