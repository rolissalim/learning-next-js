import React from 'react'
import ProductName from '../Product/Productname'
import Price from '../Price/Price'
import PriceDiscount from '../Price/PriceDiscount'
import InfoRating from '../Rating/InfoRating'

interface ICardBodyCatalog {
    title: string
    short_desc: string
    price: number
    discount?: number
    rating?: number
}

const CardBodyCatalog = ({ title, short_desc, price, discount = 0, rating = 0 }: ICardBodyCatalog) => {
    return (
        <div className="card-body">
            <ProductName name={title} />
            <Price price={price} discount={discount} className="fs-5 fw-semibold" />
            <PriceDiscount price={price} discount={discount} />
            <InfoRating rating={rating} />
            <p className="card-text">{short_desc}</p>
        </div>
    )
}

export default CardBodyCatalog;
