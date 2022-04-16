import { Link } from "react-router-dom";

function Register(params) {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="d-flex justify-content-center">
          <div className="col-12 col-sm-10 col-md-6 col-lg-4">
            <main className="form-signin">
              <form>
                <h1 className="h3 mb-5 fw-light">Hesap oluştur</h1>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInputEmail"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputEmail">Eposta adresi</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingInputPassword"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputPassword">Şifre</label>
                </div>

                <div className="form-floating mb-5">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingInputPasswordRepeat"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputPasswordRepeat">
                    Şifre tekrar
                  </label>
                </div>

                <button className="w-100 btn btn-lg btn-dark" type="submit">
                  Hesap oluştur
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
