'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
interface INavigagtorBack {
    path: any
}
function NavigagtorBack({ path }: INavigagtorBack) {
    const route = useRouter()

    return (
        <div>
            <Link href={path}>Back</Link>
        </div>
    )
}

export default NavigagtorBack
