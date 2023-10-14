export const metadata = {
    title: 'Category',
    description: 'Page Category',
}

import TitlePage from '@/components/Title/TitlePage'
import CardCatalogProduct from '@/modules/Prodcut/CardCatalogProduct'
import React from 'react'

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <>
            <TitlePage title={`Data category ${params?.slug}`} />
            <CardCatalogProduct slug={params?.slug} path='product.category' />
        </>
    )
}
