import { Link } from "react-router-dom";

function Login(params) {
  return (
    <div className="col-12">
      <div className="row mt-5">
        <div class="d-flex justify-content-center">
          <div class="col-4">
            <main class="form-signin">
              <form>
                <h1 class="h3 mb-5 fw-light">Giriş yap</h1>

                <div class="form-floating mb-3">
                  <input type="email" class="form-control" />
                  <label for="floatingInput">Eposta Adresi</label>
                </div>
                <div class="form-floating">
                  <input type="password" class="form-control" />
                  <label for="floatingPassword">Şifre</label>
                </div>

                <div class="checkbox mb-3 mt-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Beni hatırla
                  </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">
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
