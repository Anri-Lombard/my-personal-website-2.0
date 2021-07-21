/* eslint-disable @next/next/no-sync-scripts */
import {Navbar, Container, Nav} from 'react-bootstrap'
import Link from 'next/link'

export default function MyNavbar() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link href="/" passHref>
                            <Nav.Link>Home</Nav.Link>
                        </Link>
                        <Link href="/projects" passHref>
                            <Nav.Link>Projects</Nav.Link>
                        </Link>
                        <Link href="/recognitions" passHref>
                            <Nav.Link>Recognitions</Nav.Link>
                        </Link>
                        <Link href="/about" passHref>
                            <Nav.Link>About</Nav.Link>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
            <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin></script>
        </>
    )
}