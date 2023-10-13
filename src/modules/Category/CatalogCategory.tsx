'use client'
import CardComponent from '@/components/Card/CardComponent'
import TitlePage from '@/components/Title/TitlePage'
import { API_PATH } from '@/services/_path.service'
import { getAllByPath } from '@/services/main.service'
import axios from 'axios'
import { get } from 'lodash'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

interface ICatalogCategory {
    path?: any
}

function CatalogCategory({ path }: ICatalogCategory) {
    const [data, setData] = useState<any>();
    const source = axios.CancelToken.source();
    const route = useRouter()
    /** GET DATA PAGINATION */
    const getAllData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 300));
        setData([]);
        try {
            let params: any = {

            };

            let req: any = await getAllByPath(`${get(API_PATH(), path)}`, params, source.token);
            setData(req)
        } catch (err: any) {
            console.log("error", err);
            setData(null);
        }
    };

    const handleClick = (item: any) => {
        route.push(`category/${item}`)
    }

    useEffect(() => {
        getAllData()
    }, [])


    return (
        <>
            <TitlePage title='Data Category' />
            <Row>
                {data?.map((item: any, index: number) =>
                    <Col key={index} lg={3} md={3} sm={6} xs={12} className='pointer mb-2' onClick={() => { handleClick(item) }}>
                        <CardComponent className='shadow-sm'>
                            <div>
                                {item}
                            </div>
                        </CardComponent>
                    </Col>
                )}
            </Row>
        </>
    )
}

export default CatalogCategory
