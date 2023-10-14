import React from 'react'

interface ITitlePage {
    title?: string
}
function TitlePage({ title }: ITitlePage) {
    return (
        <>
            <h6 className=' my-3 border-bottom'>{title}</h6>
        </>
    )
}

export default TitlePage
