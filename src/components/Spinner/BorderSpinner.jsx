function BorderSpinner({ theme = "dark" }) {
  return (
    <div className={`spinner-border text-${theme}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default BorderSpinner;
