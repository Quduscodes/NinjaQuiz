import React, { useState } from "react";
import Header from "./Components/Header";
import TodoCounter from "./Components/TodoCounter";
import TodoItem from "./Components/TodoItem";
import Todos from './Todos'
import NewTodoModal from "./Components/NewTodoModal";
import {Fab} from 'react-tiny-fab'


export const custTodos= [];

function App() {

  const lightTheme = {
    backgroundColor: '#cdcdcd',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  };
 
  const [showModal, setShowModal] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const todos= custTodos.length > 0 ? custTodos : Todos;
  const newTodos = todos.map((todo) => <TodoItem key={todo.id} todo={todo} theme={isDark} />);





  return (
    <div className="App" style={isDark ? null : lightTheme}>
      <Header isDark={isDark} toggle={() => { setIsDark(!isDark) }} />
      <TodoCounter count={custTodos.length} />
      <Fab 
      icon={'+'}
      mainButtonStyles={{backgroundColor:' rgb(39, 46, 49)'}}
      event='click'
      text='Add New Todo'
      onClick={()=>{setShowModal(true)}}
      />
      <NewTodoModal show={showModal} onClick={()=>{setShowModal(false)}}/>
      {newTodos}
    </div>
  );
}

export default App;
