import React from "react";
import { Card } from "react-bootstrap";

export default function CardComponent({
    hideHeader = true,
    title = "",
    children,
    variant = "",
    className = "mb-1",
    classNameHeader = "",
    classNameBody = "",
    styleHeader

}: ICardComponent) {
    return (
        <>
            <Card bg={variant} className={`${className}`}>
                {!hideHeader &&

                    <Card.Header style={styleHeader} className={`${classNameHeader}`}>
                        <Card.Title>
                            {title}
                        </Card.Title>
                    </Card.Header>
                }
                <Card.Body className={classNameBody}>
                    {children}
                </Card.Body>
            </Card>
        </>
    )
}

interface ICardComponent {
    hideHeader?: boolean;
    title?: string
    children?: any
    className?: string;
    classNameHeader?: string;
    classNameBody?: string;
    variant?: '' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
    styleHeader?: any

}