import React from 'react'

interface IInfoRating {
    rating: number
}

function InfoRating({ rating }: IInfoRating) {
    return (
        <>
            <span><i className="fas fa-solid fa-star"></i></span>
            <span>{rating || 0}</span>
        </>
    )
}

export default InfoRating
