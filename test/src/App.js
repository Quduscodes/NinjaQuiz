import React from 'react';
import Footer from './Components/Footer';
import TodoItem from './Components/TodoItem';
import Todos from './Todos';
import Header from './Components/Header';
import ErroBoundary from "./Components/ErrorBoundary";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: Todos
    }
    this.handleChange = this.handleChange.bind(this);
  }

  

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      }
    });
  }

  render() {
    const todo = this.state.todos.map(todo => <ErroBoundary><TodoItem key={todo.id}
      todo={todo} handleChange={this.handleChange} /></ErroBoundary>);
    return (
      <div className='todoList'>
        <Header />
        {todo}
        <Footer />
      </div>
    );
  }
}
export default App;




// componentDidMount(){
//   fetch('url').then((response)=>{response.tojson().then((response)=>{fetchedData = data.data})});
// }


