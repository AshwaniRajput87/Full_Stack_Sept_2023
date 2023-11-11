import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
    Navigate
} from 'react-router-dom';

import PrivateRoute from '../components/privateRoute';

import Home from '../pages/home';
import Login from '../pages/login';
import NotFound from '../pages/notFound';
import Dashboard from '../pages/dashboard';
import Header from '../components/header/Header';

const AppRoutes = () => {

    const isAuthenticated = false;

    return (
        <> 
          <Router>
             <Header />
             <Routes>
                {/** Public Routing */}
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />

                {/** If the routes doesn't match or exist then 404 page not found component has to render*/}
                <Route path='*' element={<NotFound />} />

                {/** Private Routing - it is accessible when the use is uthenticated*/}
                <Route
                   path='/dashboard'
                   element={<PrivateRoute element={<Dashboard />} isAuthenticated={isAuthenticated} /> }
                />
             </Routes>
             {/* <Footer /> */}
          </Router>  
        </>
    )
}

export default AppRoutes;