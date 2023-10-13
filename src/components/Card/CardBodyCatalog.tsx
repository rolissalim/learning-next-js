import React from 'react'
import ProductName from '../Product/Productname'

interface ICardBodyCatalog {
    title: string
    short_desc: string
}

const CardBodyCatalog = ({ title, short_desc }: ICardBodyCatalog) => {
    return (
        <div className="card-body">
            <ProductName name={title} />
            <p className="card-text">{short_desc}</p>
        </div>
    )
}

export default CardBodyCatalog;
