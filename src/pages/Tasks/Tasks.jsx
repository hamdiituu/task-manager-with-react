import { Card, TaskItem } from "../../components";
import { useEffect, useState } from "react";

function Tasks(params) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const login = JSON.parse(localStorage.getItem("react-local-app-state")).login;

    try {
      const response = await fetch("https://task-manager-cagri.herokuapp.com/tasks", {
        headers: {
          Authorization: `Bearer ${login.token}`
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
        title={"Tüm görevlerim"}
        content={tasks.map((t, index) => {
          return <TaskItem key={index} description={t.description} />;
        })}
      />
    </>
  );
}

export default Tasks;
