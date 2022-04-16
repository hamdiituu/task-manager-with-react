import { Card, Header, TaskItem } from "../../components";

function Home(params) {
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

export default Home;
