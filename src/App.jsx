import {useState} from 'react';

export default function App(){
const [newTodo, setNewToDo] = useState(null);
const [list, setList] = useState([]);

function AddToDo(){
  setList([
    ...list,
    {text: newTodo, completed: false}
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

function ToggleCompleted(indexToChange){
  setList(
    list.map((line,index) => {
      if(indexToChange === index){
        return {...line, completed: !line.completed}
      }
      return line;
    })
  );
}

function List(){
  return(
    list.map((line,index) => {
      return (
      <div key = {index}>
        <li>
          <button onClick={() => {ToggleCompleted(index)}}>
            {line.completed ? '✅' : '❌'}
          </button>
          {line.text}
          <button onClick={()=> DeleteToDo(index)}>Удалить</button>
      </li>
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

