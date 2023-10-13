import React from 'react'
interface IProductName {
    name: string
}
const ProductName = ({ name }: IProductName) => {
    return (
        <h5 className="card-title">{name}</h5>
    )
}

export default ProductName
