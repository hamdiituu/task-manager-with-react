import TaskItem from "./TaskItem";
import BorderSpinner from "../Spinner/BorderSpinner";
function TaskWrapper({ title, tasks = [], bottomWidget }) {
  return (
    <div className="container">
      <div className="my-3 p-3 bg-body rounded shadow-sm mt-4">
        <h6 className="border-bottom pb-2 mb-0">{title}</h6>
        {tasks.length > 0 ? (
          tasks.map((t) => {
            return <TaskItem />;
          })
        ) : (
          <div class="d-flex justify-content-center mt-5">
            <BorderSpinner theme="primary" />
          </div>
        )}
        {bottomWidget}
      </div>
    </div>
  );
}

export default TaskWrapper;
