import { Card, TaskItem } from "../../components";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllTasks } from "../Home/redux/actions";

function Tasks(props) {
    const { homeState, getAllTasksDispatch } = props;
    useEffect(() => {
        if (homeState.data.length === 0) {
            getAllTasksDispatch();
        }
    }, []);
    return (
        <>
            <Card
                isLoading={homeState.isFetching}
                title={"Tüm görevlerim"}
                content={homeState.data.map((t, index) => {
                    return <TaskItem key={index} description={t.description} />;
                })}
            />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        homeState: state.home,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllTasksDispatch: () => dispatch(getAllTasks()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
