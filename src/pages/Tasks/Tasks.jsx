import { Card, TaskItem } from "../../components";

function Tasks(params) {
  const tasks = ["test", "test3"];
  return (
    <>
      <Card
        isLoading={false}
        title={"Tüm görevlerim"}
        content={tasks.map((t, index) => {
          return <TaskItem key={index} />;
        })}
      />
    </>
  );
}

export default Tasks;
