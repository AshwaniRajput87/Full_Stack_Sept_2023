const ListItems = ({ taskList, removeTask }) => {
    return(
        <>
        <h2>List of Tasks</h2>
          {
            taskList.map((item)=> {
                return (
                    <>
                    <li key={item.id} id={item.id}>{item.task}
                      <button onClick={()=>{removeTask(item.id)}}>Delete</button>
                    </li>
                  </>
                )
            })
          }
       </>
    )

}

export default ListItems;