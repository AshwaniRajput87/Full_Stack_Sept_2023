import Counter from "./components/counter"
import ContolledComponent from "./components/contolledComponent"
import Todo from "./components/todo"

const App = () => {

  return(
    <>
      <Counter counter = {1}/>
      <Counter counter = {2}/>
      <Counter counter = {3}/>

      <br />

      <ContolledComponent />

      <br/>
      <br/>

      <Todo />

    </>
  )
  
}

export default App
