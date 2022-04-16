import { Link } from "react-router-dom";
import { BorderSpinner, Alert } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./slice";

function Register() {
  const dispath = useDispatch();
  const { isFetching, message, isError, isSuccess } = useSelector(
    (state) => state.register
  );
  const handleRegisterForm = (e) => {
    e.preventDefault();
    const params = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispath(register(params));
  };
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="d-flex justify-content-center">
          <div className="col-12 col-sm-10 col-md-6 col-lg-4">
            {isError && <Alert theme={"danger"}>{message}</Alert>}

            {isSuccess && (
              <Alert theme={"success"}>
                {message} <Link to={"/login"}> Giriş yapmak için tıkla.</Link>
              </Alert>
            )}
            <main className="form-signin">
              <form onSubmit={handleRegisterForm}>
                <h1 className="h3 mb-5 fw-light">Hesap oluştur</h1>

                <div className="form-floating mb-3">
                  <input
                    required={true}
                    name="name"
                    type="text"
                    className="form-control"
                    id="floatingInputName"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputName">Ad</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    required={true}
                    name="email"
                    type="email"
                    className="form-control"
                    id="floatingInputEmail"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputEmail">Eposta adresi</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    required={true}
                    name="password"
                    type="password"
                    className="form-control"
                    id="floatingInputPassword"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputPassword">Şifre</label>
                </div>

                <button className="w-100 btn btn-lg btn-dark" type="submit">
                  {isFetching ? (
                    <BorderSpinner theme="light" />
                  ) : (
                    "Hesap oluştur"
                  )}
                </button>
              </form>
              <div className="text-center mt-4">
                <Link to={"/login"}>Hesabın varsa giriş yap</Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
