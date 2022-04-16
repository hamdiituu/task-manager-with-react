import { Card, TaskItem } from "../../components";

function Home(params) {
  const tasks = ["test"];
  return (
    <>
      <Card
        isLoading={false}
        title={"Tamamlanmamış görevlerim"}
        content={tasks.map((t, index) => {
          return <TaskItem key={index} />;
        })}
      />
    </>
  );
}

export default Home;
