import logo from '../img/logo_small.png';
import '../style/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Supcup" />
                </a>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <a className="nav-link" href="/">FORUM</a>
                    </div>
                    <div className="navbar-nav ms-auto">
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
