'use client'

import { UpperCaseEachWord } from '@/helper/String.helper'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { usePathname } from 'next/navigation'
const Header = () => {
    const [page, setPage] = useState<any>("/home")
    const pathname = usePathname()
    useEffect(() => {
        setPage(pathname)
    }, [pathname])

    return (
        <>
            <Navbar expand="xs" className="navbar navbar-expand-sm" bg="dark" data-bs-theme="dark">
                {/* <Navbar expand="sm" className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark"> */}
                <Container>
                    {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton className='border-bottom'>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-start flex-grow-1 pe-3">
                                <Link href="/" className={`nav-link me-1 ${page == "/" ? "active" : ""}`}>{UpperCaseEachWord("Home")}</Link>
                                {/* <Link href="/user" className={`nav-link  me-1 ${page == "/user" ? "active" : ""}`}>{UpperCaseEachWord("User")}</Link> */}
                                <Link href="/category" className={`nav-link  me-1 ${page.includes("/category") ? "active" : ""}`}>{UpperCaseEachWord("Category")}</Link>
                                <Link href="/product" className={`nav-link  me-1 ${page == "/product" ? "active" : ""}`}>{UpperCaseEachWord("Product")}</Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
