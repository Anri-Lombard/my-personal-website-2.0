import {Navbar, Container, Nav} from 'react-bootstrap'
import Link from 'next/link'

export default function MyNavbar() {
    return (
        <>
        <div className="pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">Anri Lombard</a>
            <ul className="pure-menu-list">
                <li className="pure-menu-item">
                    <a href="#" className="pure-menu-link">Projects</a>
                </li>
                <li className="pure-menu-item">
                    <a href="#" className="pure-menu-link">Recognitions</a>
                </li>
                <li className="pure-menu-item">
                    <a href="#" className="pure-menu-link">Blog</a>
                </li>
                <li className="pure-menu-item">
                    <a href="#" className="pure-menu-link">About</a>
                </li>
            </ul>
        </div>
        </>
    )
}