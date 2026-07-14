import {useState} from 'react';

export default function App(){
const [newTodo, setNewToDo] = useState(null);
const [list, setList] = useState([]);

function AddToDo(){
  setList([
    ...list,
    newTodo
  ])
};

function DeleteToDo(indexToDelete){
  setList(
    list.filter((line, index) => index !== indexToDelete)
  )
}

function DeleteAll(){
  setList([]);
}

function List(){
  return(
    list.map((line,index) => {
      return (
      <div key = {index}>
        <li>{line}</li>
        <button onClick={()=> DeleteToDo(index)}>Удалить</button>
      </div>
    )
    })
  )
};

  return(
    <div>
      <input onChange={(e) => setNewToDo(e.target.value)}></input>
      <button onClick={() => AddToDo()}>Добавить</button>
      <ul>
        <List></List>
      </ul>
      <button onClick={() => DeleteAll()}>Удалить все</button>
    </div>
  )
}

