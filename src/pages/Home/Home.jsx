import { Header, TaskWrapper } from "../../components";

function Home(params) {
  return (
    <>
      <Header />
      <TaskWrapper
        tasks={["test", "merhaba"]}
        title={"Tamamlanmamış görevlerim"}
        bottomWidget={
          <small className="d-block text-end mt-3">
            <a href="#">Tüm görevlerim</a>
          </small>
        }
      />
    </>
  );
}

export default Home;
