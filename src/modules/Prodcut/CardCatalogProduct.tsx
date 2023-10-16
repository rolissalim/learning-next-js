'use client'
import CardBodyCatalog from '@/components/Card/CardBodyCatalog';
import CardComponent from '@/components/Card/CardComponent';
import CardImage from '@/components/Card/CardImage';
import Price from '@/components/Price/Price';
import { API_PATH } from '@/services/_path.service';
import { getAllByPath } from '@/services/main.service';
import axios from 'axios';
import { get } from 'lodash';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';

interface ICardCatalogProduct {
    slug?: any,
    path?: string
}

const CardCatalogProduct = ({ slug, path = "products.data" }: ICardCatalogProduct) => {
    const [data, setData] = useState<any>();
    const source = axios.CancelToken.source();
    /** GET DATA PAGINATION */
    const getAllData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 300));
        setData([]);
        try {
            let params: any = {

            };

            let req: any = await getAllByPath(`${get(API_PATH(), path)}${slug ? `/${slug}` : ""}`, params, source.token);
            setData(req?.products)
        } catch (err: any) {
            console.log("error", err);
            setData(null);
        }
    };

    useEffect(() => {
        getAllData()
    }, []),

        console.log("data", data);


    return (
        <>
            <Row>
                {data?.map((item: any, index: number) =>
                    <Col className="product mb-3 " key={index} lg={3} md={4} sm={6} xs={12}>
                        <CardComponent classNameBody='p-0' className='shadow-sm'>
                            <CardImage image={item?.thumbnail} />
                            <CardBodyCatalog
                                title={item?.title}
                                short_desc={item?.desc}
                                price={item?.price}
                                discount={item?.discountPercentage} />
                            {/* <div className='card-footer'>
                                <div className='d-flex justify-content-between'>
                                    <Price price={item?.price} />
                                </div>
                            </div> */}
                        </CardComponent>

                    </Col>

                )}
            </Row>
        </>

    )
}

export default CardCatalogProduct;
