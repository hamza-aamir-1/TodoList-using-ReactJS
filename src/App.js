import './App.css';
import { useState } from 'react';
import {Header} from './components/Header/Header.jsx';
import {Counter} from './components/Counter/Counter.jsx'

function App() {

  const [todoList, setTodoList] = useState([]);
  const [singleTodo, setSingleTodo] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isEdit){
      setTodoList([...todoList,singleTodo]);
      setSingleTodo('');
    }
    else{
      console.log('editing');
      setIsEdit(false);
      setSingleTodo('');
    }
  }

  return (
    <div>

      <div>
        <Header />
        {/* <Counter /> */}
      </div>

      {/* === Todo === */}
      <main>
        {/* === Todo Input === */}
        <section>
          <form action="" className='todo-form' onSubmit={(e) => handleSubmit(e)}>
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
                <button onClick={(e) => {setIsEdit(true);setSingleTodo(item)}}>Edit</button>
                <button>Delete</button>
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