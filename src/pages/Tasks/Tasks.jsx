import { Card, TaskItem } from "../../components";
import { useEffect, useState } from "react";
import { getItem } from "../../utils/localStorage";
import { get } from "../../utils/networking";

function Tasks(params) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const login = getItem("app-state").login;

    try {
      const response = await get("/tasks", {
        headers: {
          Authorization: `Bearer ${login.token}`
        }
      });
      setTasks(response.data)

    } catch (e) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchTasks();
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
