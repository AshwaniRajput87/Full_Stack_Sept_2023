const GrandChild = ({data}) => {
    console.log(data);
    return (
        <>
           <h1 style={{color: 'red'}}>{data}</h1>
        </>
    )
}

export default GrandChild;