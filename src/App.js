import React from 'react';
import './App.css';
import AddTodoItems from './components/addItems/AddTodoItems';
import TodoItem from './components/todoItems/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSilce';

const App = () => {
  const todoList = useSelector(selectTodoList);
  return (
    <div className='app'>
      <div className='app_container'>
        <div className='app_todoContainer'>
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
        <AddTodoItems />
      </div>
    </div>
  );
};

export default App;
