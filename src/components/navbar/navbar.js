import logo from '../../img/logo.svg';
import '../../style/navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img className="logo" src={logo} alt="Copytop" />
                    </a>
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav">
                            <a className="nav-link" href="/">ANNONCES</a>
                            <a className="nav-link" href="/contact">CONTACT</a>
                            <a className="nav-link" href="/">RESSOURCES</a>
                        </div>
                        <div className="navbar-nav ms-auto">
                        </div>
                    </div>
                </div>
            </nav>
            <div className="navbar-filler"></div>
        </div>
    )
}

export default Navbar;
