const ListItems = ({ taskList }) => {
    console.log(taskList);
    return(
        <>
          {
            taskList.map((item)=> {
                return (
                    <>
                    <li key={item.id} id={item.id}>{item.task}</li>
                    <button>Delete</button>
                    <button>Edit</button>
                  </>
                )
            })
          }
        </>
    )

}

export default ListItems;