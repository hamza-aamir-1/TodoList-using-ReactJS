import './App.css';
import { useState } from 'react';
import {Header} from './components/Header/Header.jsx';
import {Counter} from './components/Counter/Counter.jsx'

function App() {

  const [todoList, setTodoList] = useState([]);
  const [singleTodo, setSingleTodo] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList,singleTodo]);
    setSingleTodo('');
  }

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEdit(false);
    const editedTodo = [...todoList];
    editedTodo[editIndex] = singleTodo;
    setTodoList(editedTodo)
    setSingleTodo('');
  }

  const handleDelete = (item) => {
    const deletedTodo = todoList.filter((todo) => item !== todo);
    setTodoList(deletedTodo);
  }

  return (
    <div>

      <div>
        <Header />
        {/* <Counter /> */}
        {console.log(todoList)}
      </div>

      {/* === Todo === */}
      <main>
        {/* === Todo Input === */}
        <section>
          {/* <form action="" className='todo-form' onSubmit={(e) => handleSubmit(e)}> */}
          <form action="" className='todo-form' onSubmit={(e) => !isEdit? handleSubmit(e): handleEdit(e)}>
            <input type="text" name="" placeholder='Enter todo here' value={singleTodo} onChange={(e) => setSingleTodo(e.target.value)}/>
            <button type='submit'>
              {!isEdit? 'Add': 'Update'}
            </button>
          </form>
        </section>
        {/* Todo Input */}
        {/* === Todo List === */}
        <section>
          <ol className='todo-list'>
          {todoList.map((item) =>
            <li key={Math.random()}>
              <div className='todo-item-value'>{item}</div>
              <div className='todo-item-btns'>
                <button onClick={() => {setIsEdit(true);setSingleTodo(item);setEditIndex(todoList.indexOf(item))}}>Edit</button>
                <button onClick={() => handleDelete(item)}>Delete</button>
              </div>
            </li>
          )}
          </ol>
        </section>
        {/* Todo List */}
      </main>
      {/* Todo */}

    </div>
  );
}

export default App;