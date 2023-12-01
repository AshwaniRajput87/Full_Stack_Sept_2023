
import withDataFetch from "../hoc/withDataFetch";
import DataComponent from "./DataComponent";

const RenderListData = () => {

   const DataFetchingHOC = withDataFetch(DataComponent, 'https://jsonplaceholder.typicode.com/todos')

    return(
        <>
            <DataFetchingHOC heading="Todos Data from API"/>
        </>
    )
}

export default RenderListData;