import { Link } from "react-router-dom";
function NotFound(params) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 col-sm-12">
          <div
            className="card border-0 rounded-lg mt-5 mx-auto"
            style={{ width: "60%" }}
          >
            <h3 className=" display-1 text-muted text-center">404</h3>

            <span className="card-subtitle mb-2 text-muted text-center">
              Böyle bir sayfa bulunamadı 😔
            </span>

            <div className="card-body mx-auto">
              <Link type="button" to={"/"} className="btn btn-dark text-white">
                Siteye dön
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
