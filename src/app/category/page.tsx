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
            <CatalogCategory path="category" title="Data Category" />
        </>
    )
}

export default page
