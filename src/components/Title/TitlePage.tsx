import React from 'react'

interface ITitlePage {
    title?: string
}
function TitlePage({ title }: ITitlePage) {
    return (
        <>
            <h6 className='mt-2'>{title}</h6>
            <hr />
        </>
    )
}

export default TitlePage
