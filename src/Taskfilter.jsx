import { useState } from "react";

function Taskfilter(props){
    // const [filtervalue,setfiltervalue]=useState("All");
    return(<>
        <div id="levelfilter">
      <label htmlFor="filter">Filter by Level: </label>
      <select
        id="filter"
        onChange={(e) => props.filtertask(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
    </>)
}
export default Taskfilter;