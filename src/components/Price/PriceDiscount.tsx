import { formatCurrency, priceDiscount } from '@/helper/number.helper'
import React from 'react'

interface IPrice {
    discount?: number
    price: number
    className?: string

}

const PriceDiscount = ({ className = "text-muted text-decoration-line-through", price = 0, discount = 0 }: IPrice) => {
    return (
        <>
            {discount > 0 ?
                <>
                    <div >
                        <span className={className}>{formatCurrency(price) || 0}
                        </span>
                        <span className='text-danger fw-semibold ms-2'>{discount}%</span>
                    </div></> : null}
        </>
    )
}

export default PriceDiscount
