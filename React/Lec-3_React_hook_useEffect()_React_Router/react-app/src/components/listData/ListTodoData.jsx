import { useState, useEffect } from "react";

const ListTodoData = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
       fetchData();
    }, []);

    const fetchData = async() => {
        //console.log('Data fetching')

        const res = await fetch('https://jsonplaceholder.typicode.com/todos');

        const data = await res.json();

        console.log(data);

        setData(data);
    }

    return(
        <>
          <h1> Data Laoding Example</h1>
          {
            data && data.map((item)=>{
                return <p key={item.id}> {item.title}</p>
            })
          }
        </>
    )
}

export default ListTodoData;