import { Card, TaskItem, Alert } from "../../components";
import { useState, useEffect } from "react";
import { get } from "../../utils/networking";
import { useSelector, useDispatch } from "react-redux";
import { getAllTasks } from "./redux/actions";

function Home(params) {
    const dispatch = useDispatch();
    const { isFetching, data, isError, message } = useSelector((s) => s.home);

    useEffect(() => {
        console.log("calling 12");
        dispatch(getAllTasks());
    }, []);

    return (
        <>
            {isError && (
                <div className="d-flex justify-content-center">
                    <div className="col-11">
                        <Alert theme={"danger"}>{message}</Alert>
                    </div>
                </div>
            )}
            {!isError && (
                <>
                    <Card
                        isLoading={isFetching}
                        title={"Tamamlanmamış görevlerim"}
                        content={data
                            .filter((t) => !t.completed)
                            .map((t, index) => {
                                return (
                                    <TaskItem
                                        key={index}
                                        description={t.description}
                                    />
                                );
                            })}
                    />
                    <Card
                        isLoading={isFetching}
                        title={"Tamamlanmış görevlerim"}
                        content={data
                            .filter((t) => t.completed)
                            .map((t, index) => {
                                return (
                                    <TaskItem
                                        key={index}
                                        description={t.description}
                                    />
                                );
                            })}
                    />
                </>
            )}
        </>
    );
}

export default Home;
