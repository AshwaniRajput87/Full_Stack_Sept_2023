import { Provider } from 'react-redux';
import { store } from './redux/store';
import CounterWithRedux from "./components/withRedux";
import CounterWithInputRedux from './components/withRedux/CounterWithInputRedux';

const App = () => {

  return (
    <>
      <Provider store={store} >
        {/* <Counter /> */}
        <CounterWithRedux />
        <CounterWithInputRedux />
      </Provider>
    </>
  )
}

export default App
