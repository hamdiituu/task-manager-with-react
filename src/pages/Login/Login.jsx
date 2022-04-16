import { Link } from "react-router-dom";

function Login(params) {
  return (
    <div className="col-12">
      <div className="row mt-5">
        <div className="d-flex justify-content-center">
          <div className="col-4">
            <main className="form-signin">
              <form>
                <h1 className="h3 mb-5 fw-light">Giriş yap</h1>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Eposta Adresi</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Şifre</label>
                </div>

                <div className="checkbox mb-5 mt-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Beni hatırla
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Giriş yap
                </button>
              </form>
              <div className="text-center mt-4">
                <Link to={"/register"}>
                  <a>Hesabın yoksa hesap oluştur</a>
                </Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
