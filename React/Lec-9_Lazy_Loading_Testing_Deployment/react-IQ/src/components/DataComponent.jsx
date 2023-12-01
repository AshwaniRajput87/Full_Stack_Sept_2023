const DataComponent = ({ data, error, isLoading, heading}) => {
    console.log(data);
    if(isLoading){
        return<div>Loading...</div>
    }

    if(error) {
        return <div>Error: {error.message}</div>
    }
    
    return(
        <>
           <h1>{heading}</h1>
           <ul>
            {
                data && data.map((item)=>{
                    return (
                        <li key={item.id}>{item.title}</li>
                    )
                })
            }
           </ul>
        </>
    )
}

export default DataComponent;