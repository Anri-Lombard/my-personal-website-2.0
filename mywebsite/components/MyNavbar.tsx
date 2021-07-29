import {Navbar, Container, Nav} from 'react-bootstrap'
import Link from 'next/link'

export default function MyNavbar() {
    return (
        <>
            <Navbar collapseOnSelect expand="sm" className="navbar" variant="dark">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse>

                    <Navbar.Brand href="/">Anri&apos;s Paradise</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link href="/" passHref>
                                <div className="navbar--item navlink">
                                    
                                    Home

                                </div>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link href="/projects" passHref>
                                <span className="navbar--item">
                                    Projects

                                </span>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link href="/recognitions" passHref>
                                <span className="navbar--item">
                                    Recognitions

                                </span>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link href="/about" passHref>
                                <span className="navbar--item">
                                    About

                                </span>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link href="https://admitted-snowman-901.notion.site/Imagineering-10687ab71ff64856933f9321b034a5f4" passHref>
                                <span className="navbar--item">
                                    Blog

                                </span>
                            </Link>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}