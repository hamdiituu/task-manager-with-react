import { Card, TaskItem } from "../../components";
import { useState, useEffect } from "react";
import { getItem } from "../../utils/localStorage";
import { get } from "../../utils/networking";

function Home(params) {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchTasks = async () => {
    setLoading(true);
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
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
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
        isLoading={isLoading}
        title={"Tamamlanmış görevlerim"}
        content={tasks.filter(t => t.completed).map((t, index) => {
          return <TaskItem key={index} description={t.description} />;
        })}
      />
    </>
  );
}

export default Home;
