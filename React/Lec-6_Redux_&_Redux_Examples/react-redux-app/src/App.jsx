import { Provider } from 'react-redux';
import { store } from './redux/store';
import CounterWithRedux from "./components/withRedux";

const App = () => {

  return (
    <>
      <Provider store={store} >
        {/* <Counter /> */}
        <CounterWithRedux />
      </Provider>
    </>
  )
}

export default App
