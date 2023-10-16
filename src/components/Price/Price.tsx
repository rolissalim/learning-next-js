import { formatCurrency, priceDiscount } from '@/helper/number.helper'
import React from 'react'

interface IPrice {
    discount?: number
    price: number
    className?: string

}

const Price = ({ className = "text-success", price = 0, discount = 0 }: IPrice) => {
    return (
        <>
            <div className={className}> <div>{priceDiscount(price, discount) || 0}</div></div>
        </>
    )
}

export default Price
