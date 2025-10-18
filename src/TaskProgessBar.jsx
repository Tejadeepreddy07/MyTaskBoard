

function TaskProgessBar(props){

    const completetask = props.tasks.filter((e)=>e.complete).length;
    console.log(completetask);
    const totaltask = props.tasks.length;
    console.log(totaltask);
    const percentagetask = totaltask===0?0:(completetask/totaltask)*100;
    return(
        <>
        <div id="progessstatus">
            <p>{completetask} of {totaltask} tasks Completed</p>
            <div id="progessbar">
                <div id="progess" style={{ width:percentagetask+"%" }}></div>
            </div>
        </div>
        </>
    )
}

export default TaskProgessBar;