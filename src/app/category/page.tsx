export const metadata = {
    title: 'Category',
    description: 'Page Category',
}

import TitlePage from '@/components/Title/TitlePage'
import CatalogCategory from '@/modules/Category/CatalogCategory'
import React from 'react';

function page() {

    return (
        <>
            <TitlePage title='Data Category' />
            <CatalogCategory path="category" />
        </>
    )
}

export default page
