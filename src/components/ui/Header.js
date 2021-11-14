export const Header = () => {
    return (
        <header className="header--site">
            <div className="contenedor">
                <ul className="header__navegacion">
                    <li className="header__navegacion--icon">
                        <a rel="noreferrer" href="https://www.facebook.com" target="_blank">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                    </li>
                    <li className="header__navegacion--icon">
                        <a rel="noreferrer" href="https://www.youtube.com/channel/UC9t0xDaYqio8N9U3jd2barw" target="_blank">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </li>
                    <li className="header__navegacion--icon">
                        <a rel="noreferrer" href="https://www.instagram.com" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li className="header__navegacion--icon">
                        <a rel="noreferrer" href="https://web.telegram.org/" target="_blank">
                            <i className="fab fa-telegram"></i>
                        </a>
                    </li>
                </ul>

                <div className="header__informacion">
                    <h1>Pelismania</h1>
                    <p>La mejor página para ver películas gratis</p>
                </div>
            </div>
        </header>
    )
}
