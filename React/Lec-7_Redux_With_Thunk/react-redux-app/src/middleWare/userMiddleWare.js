import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../redux/slices/userDetailsSlice';
import Axios from 'axios';
const USER_DETAILS_API = 'https://jsonplaceholder.typicode.com/users/1';

export const fetchUserMiddleware = async(dispatch) => {
    dispatch(fetchDataStart());
    try {
        const res = await Axios.get(USER_DETAILS_API);
        dispatch(fetchDataSuccess(res.data));
    } catch(error) {
        dispatch(fetchDataFailure(error));
    }
}