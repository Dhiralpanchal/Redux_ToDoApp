import { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import Form from './components/Form';
import {useDispatch, useSelector} from 'react-redux';
import { deleteAll } from './Redux/todoapp/actions';
function App() {
  const todos = useSelector((state)=>state.operationsReducer);
  const [editFormVisibility,setEditFromVisibility] = useState(false);
  const [editTodo,setEditTodo] = useState('');
  const handleEditClick = (todo) => {
    setEditFromVisibility(true);
    setEditTodo(todo)
  }
  const cancelUpdate = () =>{
    setEditFromVisibility(false);
  }

  const dispatch = useDispatch();
  return (
   <div className='wrapper'>
    <br></br>
    <h1 className='text-center'> ToDo-App React-Redux</h1>
    <Form editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate}/>
    <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
    {todos.length > 1&&(
        <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}
   </div>
  );
}

export default App;
