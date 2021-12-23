import React, { useState } from "react";
import ToDoItem from "./ToDoItem"

function App() {
  
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function addItem(event){
    setItems( (prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id){
    setItems(prevItems => {
      return prevItems.filter(
        (item, index) => {
          return index !== id;
        }
      )
    });
  }
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={inputText} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => {
            return <ToDoItem key={index} id={index} item={todoItem} onChecked={deleteItem}/>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
