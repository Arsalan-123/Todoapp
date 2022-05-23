import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [inputList, setinputList] = useState("");
const [items,setitems] = useState([]);

  const itemEvent = (event) =>{
    setinputList(event.target.value)
} 
const listOfitems = ()  =>{
setitems((oldItems)=>{
  return[...oldItems,inputList];
});
setinputList("");
}
const deleteItems = (id)=>{

  console.log("h");
  setitems((oldItems)=>{
    return oldItems.filter((arrElem, index )=>{
      return index !== id;

    })
  })
}


  return (
    <>
    <div className="main_div">
      <div className='center_div'>
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type= "text" placeholder='Add a items' value={inputList} onChange  = {itemEvent}/>
        <button onClick={listOfitems}>+ </button>
        <ol>
          {/* <li>{inputList}</li> */}
        
{items.map((itemval , index  )  => {
  return <TodoList 
  key ={index}
   id = {index}
  text = {itemval}
  onSelect = {deleteItems}
  />;
})

}
</ol>
      </div>

      
    </div>
    </>
  );
}

export default App;
