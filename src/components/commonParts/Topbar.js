import { Link } from "react-router-dom"

export const Topbar = () => {
    return(
        <div className="topbar">
            <div className="topbar-left">
                <Link to='#' className="main-link">
                    JakiśBank
                </Link>
            </div>
            <div className="topbar-right">
                <Link to='#' className="menu-link">
                    O nas
                </Link>
                <Link to='#' className="menu-link">
                    Oferta
                </Link>
                <Link to='#' className="menu-link">
                    Załoź konto
                </Link>
                <Link to='#' className="menu-link">
                    Zaloguj
                </Link>
            </div>
        </div>
    )
}