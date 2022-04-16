import { Header, Card, TaskItem } from "../../components";

function Tasks(params) {
  const tasks = ["test"];
  return (
    <>
      <Header />
      <Card
        isLoading={false}
        title={"Tamamlanmamış görevlerim"}
        content={tasks.map((t) => {
          return <TaskItem />;
        })}
      />
    </>
  );
}

export default Tasks;
