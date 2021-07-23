import {Navbar, Container, Nav} from 'react-bootstrap'
import Link from 'next/link'

export default function MyNavbar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link className="button" href="/">
                                Home
                                <div className="button__horizontal"></div>
                                <div className="button__vertical"></div>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link href="/about">
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link href="/">
                                Home
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}