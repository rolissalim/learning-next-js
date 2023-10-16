import React from 'react'
interface IInfoStock {
    stock?: number
}
function InfoStock({ stock }: IInfoStock) {
    return (
        <>
            {stock} <span className='ms-1'>Stock</span>
        </>
    )
}

export default InfoStock
