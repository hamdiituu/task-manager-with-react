import { Link } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { login } from "./redux/actions";
import { Alert, BorderSpinner } from "../../components";

function Login(props) {
    const { loginState } = props;
    const dispatch = useDispatch();

    const handleLoginForm = (e) => {
        e.preventDefault();
        const params = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
        };
        dispatch(login(params));
    };
    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-sm-10 col-md-6 col-lg-4">
                        <Alert theme={loginState.alertTheme} closeButton={true}>
                            {loginState.message}
                        </Alert>
                        <main className="form-signin">
                            <form onSubmit={handleLoginForm}>
                                <h1 className="h3 mb-5 fw-light">Giriş yap</h1>
                                <div className="form-floating mb-3">
                                    <input
                                        required={true}
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        id="floatingInputEmail"
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="floatingInputEmail">
                                        Eposta Adresi
                                    </label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        required={true}
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        id="floatingInputPassword"
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="floatingInputPassword">
                                        Şifre
                                    </label>
                                </div>

                                <div className="checkbox mb-5 mt-3">
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="remember-me"
                                        />{" "}
                                        Beni hatırla
                                    </label>
                                </div>
                                <button
                                    className="w-100 btn btn-lg btn-dark"
                                    type="submit"
                                >
                                    {loginState.isFetching ? (
                                        <BorderSpinner theme="light" />
                                    ) : (
                                        "Giriş Yap"
                                    )}
                                </button>
                            </form>
                            <div className="text-center mt-4">
                                <Link to={"/register"}>
                                    Hesabın yoksa hesap oluştur
                                </Link>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        loginState: state.login,
    };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // dispatching plain actions
//     login: (params) => dispatch(login(params)),

//     // reset: () => dispatch({ type: 'RESET' }),
//   }
// }

export default connect(mapStateToProps)(Login);
