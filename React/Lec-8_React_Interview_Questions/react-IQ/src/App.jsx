import Counter from "./components/counter"
import Todo from "./components/todo/Todo";
import UsageOfUseMemo from "./components/usageOfUseMemo";

const App = () => {

  const items = [
    { id:1, name: 'item-1', price: 20},
    { id:2, name: 'item-2', price: 30},
    { id:3, name: 'item-3', price: 50},
    { id:4, name: 'item-4', price: 80},
    { id:5, name: 'item-5', price: 100}
  ]
  
  return (
    <>
      <Counter />
      <Todo />
      <UsageOfUseMemo items={items} />
    </>
  )
}

export default App;
