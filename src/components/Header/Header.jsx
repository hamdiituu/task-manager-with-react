import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../pages/Login/redux/actions";

function Header(params) {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const paths = [
        { label: "Anasayfa", to: "/" },
        { label: "Görevlerim", to: "/tasks" },
    ];

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        {paths.map((p, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        to={p.to}
                                        className={`nav-link px-2 link-${
                                            pathname === p.to
                                                ? "dark"
                                                : "secondary"
                                        }`}
                                    >
                                        {p.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="dropdown text-end">
                        <p
                            className="d-block link-dark text-decoration-none dropdown-toggle"
                            id="userDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://github.com/mdo.png"
                                alt="mdo"
                                width="32"
                                height="32"
                                className="rounded-circle"
                            />
                        </p>
                        <ul
                            className="dropdown-menu text-small"
                            aria-labelledby="userDropdown"
                        >
                            <li>
                                <Link className="dropdown-item" to={"/tasks"}>
                                    Görev oluştur
                                </Link>
                            </li>

                            <li>
                                <Link className="dropdown-item" to={"/profile"}>
                                    Profilim
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <button
                                    className="dropdown-item"
                                    onClick={handleLogout}
                                >
                                    Çıkış
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
