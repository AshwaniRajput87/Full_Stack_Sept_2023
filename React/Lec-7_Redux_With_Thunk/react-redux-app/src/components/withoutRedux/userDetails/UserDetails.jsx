import { useFetchData } from "../../../hooks/useFetchData";

const UserDetails = () => {
    const USER_DETAILS_API = 'https://jsonplaceholder.typicode.com/users/3';
    const { data, error, isLoading } = useFetchData(USER_DETAILS_API);
    console.log(data);
    const heading  = <h2>Loading Data without Redux</h2>;

    if(isLoading) {
        return (
            <>
              {heading}
              <h3>Loading...</h3> 
            </>
        );  
    }

    if(error) {
        return(
            <>
              {heading}
              <h3>Error: {error}</h3>
            </>
        )
    }

    return (
        <>
          <h2> User Information</h2>

          {
             data && (
                <>
                  {heading}
                  <h4>Username: {data.username}</h4>
                  <h4>Email: {data.email}</h4>
                </>
             )
            
          }
        
        </>
    )
}

export default UserDetails;