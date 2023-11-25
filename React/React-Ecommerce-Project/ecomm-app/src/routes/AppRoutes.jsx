import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
    Navigate
} from 'react-router-dom';

import NotFound from '../pages/notFound';
import Header from '../components/header/Header';
import Loader from '../components/loader';
import useFetch from '../hooks/useFetch';
import ProductList from '../pages/productList';

const AppRoutes = () => {

    const {data: categories, isLoading} = useFetch('https://fakestoreapi.com/products/categories', []);

    return (
        <> 
          <Router>
             {/* <Loader /> */}
             <Header categories={categories}/>
                {
                    isLoading ? (
                        <Loader />
                    ): (
                        <Routes>
                            {/* <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} /> */}

                            <Route path='/products/:categoryName'  element={<ProductList />}/>

                            {/** If the routes doesn't match or exist then 404 page not found component has to render*/}
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    )
                }
             {/* <Footer /> */}
          </Router>  
        </>
    )
}

export default AppRoutes;