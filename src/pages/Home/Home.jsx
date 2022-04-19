import { Card, TaskItem } from "../../components";
import { useState, useEffect } from "react";

function Home(params) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const login = JSON.parse(localStorage.getItem("react-local-app-state")).login;

    try {
      const response = await fetch("https://task-manager-cagri.herokuapp.com/tasks", {
        headers: {
          Authorization: login.token
        }
      });
      const json = response.json();
      json.then(data => {
        setTasks(data)
      })
    } catch (e) {
      console.log("error");
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Card
        isLoading={false}
        title={"Tamamlanmamış görevlerim"}
        content={tasks.filter(t => !t.completed).map((t, index) => {
          return <TaskItem key={index} description={t.description} />;
        })}
      />
      <Card
        isLoading={false}
        title={"Tamamlanmış görevlerim"}
        content={tasks.filter(t => t.completed).map((t, index) => {
          return <TaskItem key={index} description={t.description} />;
        })}
      />
    </>
  );
}

export default Home;
