import '../style/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <div className="row">
                    <div className="col-6 col-md-2">
                        <h5>LOREM</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="p-0"></a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2">
                        <h5>LOREM</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="p-0"></a></li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1">
                        <h5>LOREM</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/about-us" className="p-0"></a></li>
                        </ul>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4">
                    <p>Copytop</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
