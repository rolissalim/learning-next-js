import { numberWithCommas } from '@/helper/number.helper'
import React from 'react'

const Price = ({ text_color = "text-success", price = 0 }) => {
    return (
        <div className={text_color}> <div>${numberWithCommas(price) || 0}</div></div>
    )
}

export default Price
