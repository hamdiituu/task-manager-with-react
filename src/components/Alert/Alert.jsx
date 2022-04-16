function Alert({ children, ...rest }) {
  return (
    <div
      className={`alert alert-${
        rest.theme != null ? rest.theme : "primary"
      }  alert-dismissible fade show`}
      role="alert"
    >
      {children}
      {rest.closeButton && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      )}
    </div>
  );
}

export default Alert;
