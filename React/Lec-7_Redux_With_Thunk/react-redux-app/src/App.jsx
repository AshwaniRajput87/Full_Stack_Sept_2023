import { Provider } from 'react-redux';
import { store } from './redux/store';
import CounterWithRedux from "./components/withRedux";
import CounterWithInputRedux from './components/withRedux/CounterWithInputRedux';
// import UserDetails from './components/withoutRedux/userDetails';
import UserDetails from './components/withRedux/userDetails';

const App = () => {

  return (
    <>
      <Provider store={store} >
        {/* <Counter /> */}
        <CounterWithRedux />
        <CounterWithInputRedux />
        <UserDetails />
      </Provider>
    </>
  )
}

export default App
