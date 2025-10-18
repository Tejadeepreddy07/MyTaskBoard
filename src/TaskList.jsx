
function TaskList(props) {

    return (
        <>
            {props.tasks.length === 0 ? (<>
                <p>no task is found. Please add it</p>
            </>) : (<>
                {props.tasks.map((task, index) => (
                    <div
                        key={index}
                        id="taskitem"
                        style={{
                            textDecoration: task.complete ? "line-through" : "none",
                            opacity: task.complete ? 0.5 : 1,
                            transition: "opacity 0.3s ease",
                        }}
                    >

                        <div id="taskinfo">
                            <p>{task.text} </p>
                        </div>
                        <div id="taskaction">
                            <button type="submit" onClick={() => {
                                props.completetask(index)
                            }} >{task.complete ? "Undo" : "Complete"}</button>
                            <button type="submit" onClick={() => { props.deleteitem(index) }}>Delete</button>
                        </div>
                    </div>
                ))}

            </>)}
        </>
    )
}

export default TaskList;