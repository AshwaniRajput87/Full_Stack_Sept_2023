import GrandChild from "./GrandChild";

const Child = ({data}) => {
    console.log(data);
    return (
        <>
           <GrandChild data={data}/>
        </>
    )
}

export default Child;