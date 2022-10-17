import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/Contato">Contato</Link>
            </li>

            <li>
                <Link to="/Empresa">Empresa</Link>
            </li>
        </ul>
    )
}

export default NavBar