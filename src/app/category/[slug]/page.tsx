export const metadata = {
    title: 'Category',
    description: 'Page Category',
}

import NavigagtorBack from '@/components/Button/NavigagtorBack'
import CardCatalogProduct from '@/modules/Prodcut/CardCatalogProduct'
import React from 'react'

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <>
            <div className='d-flex justify-content-between my-3 border-bottom'>
                <h6 className=''>{`Data ${params?.slug}`}</h6>
                <NavigagtorBack path="/category" />
            </div>
            {/* <hr /> */}
            <CardCatalogProduct slug={params?.slug} path='product.category' />
        </>
    )
}

