import React from 'react'

interface ICardImage {
    image: any
    height?: string
    otherProps?: any
}
const CardImage = ({ image, height = "15rem", otherProps = {} }: ICardImage) => {
    return (
        <div style={{ height: height }} >
            <img src={image} className="card-img-top fit" alt="..." {...otherProps} />
        </div>
    )
}

export default CardImage;
