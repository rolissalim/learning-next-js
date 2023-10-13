export const metadata = {
    title: 'Prodcuts',
    description: 'Page Products',
}

import TitlePage from '@/components/Title/TitlePage'
import CardCatalogProduct from '@/modules/Prodcut/CardCatalogProduct'
import React from 'react'

export default function Page() {
    return (
        <>
            <TitlePage title={`Data products`} />
            <CardCatalogProduct path='product.data' />
        </>
    )
}

