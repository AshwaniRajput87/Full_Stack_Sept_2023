const ListItems = ({ taskList, removeTask }) => {
    return(
        <>
          {
            taskList.map((item)=> {
                return (
                    <>
                    <li key={item.id} id={item.id}>{item.task}
                      <button id={item.id} onClick={removeTask}>Delete</button>
                      <button id={item.id}>Edit</button>
                    </li>
                  </>
                )
            })
          }
        </>
    )

}

export default ListItems;