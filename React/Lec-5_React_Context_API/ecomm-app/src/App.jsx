import Parent from "./components/propsDrilling/Parent";
import AppRoutes from "./routes/AppRoutes";
import CounterProvider from "./context/CounterProvider";
import Child from "./components/contextAPI/counter/Child";
import Counter from "./components/contextAPI/counter/Counter"
import Data from "./components/contextAPI/Data";
import Loader from "./components/loader/Loader";
const App = () => {
  
  return (
    <>
      <CounterProvider>
        <AppRoutes />
        {/* <Parent />
        <AnotherProvider>
          <Counter />
        </AnotherProvider>
        <Child />
        <Data /> */}
        {/* <Loader /> */}
      </CounterProvider>
    </>
  )
}

export default App;
