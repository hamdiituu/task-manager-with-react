import BorderSpinner from "../Spinner/BorderSpinner";
function Card({ title, content, bottomWidget, topWidget, isLoading }) {
  return (
    <div className="container">
      <div className="my-3 p-3 bg-body rounded shadow-sm mt-4">
        <div className="d-flex justify-content-between">
          <h6 className="pb-2 mb-0">{title}</h6>
          {topWidget}
        </div>
        <div className="border-bottom" />
        {content}
        {isLoading && (
          <div className="d-flex justify-content-center mt-5 mb-5">
            <BorderSpinner theme="primary" />
          </div>
        )}
        {bottomWidget}
      </div>
    </div>
  );
}

export default Card;
