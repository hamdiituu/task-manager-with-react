import { Link } from "react-router-dom";

function Login(params) {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="d-flex justify-content-center">
          <div className="col-12 col-sm-10 col-md-6 col-lg-4">
            <main className="form-signin">
              <form>
                <h1 className="h3 mb-5 fw-light">Giriş yap</h1>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInputEmail"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputEmail">Eposta Adresi</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingInputPassword"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputPassword">Şifre</label>
                </div>

                <div className="checkbox mb-5 mt-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Beni hatırla
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-dark" type="submit">
                  Giriş yap
                </button>
              </form>
              <div className="text-center mt-4">
                <Link to={"/register"}>Hesabın yoksa hesap oluştur</Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
