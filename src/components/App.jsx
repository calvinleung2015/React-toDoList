import React, { useState } from "react";
import ToDoItem from "./ToDoItem"

function App() {
  
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  //get "inputText" value every single time from event and then set to "setInputText"
  function handleChange(event) {
    setInputText(event.target.value);
  }

  
  function addItem(event){
    setItems( (prevItems) => { // prevItems contains previus appended elements in an array[]
      return [...prevItems, inputText];
    });
    setInputText(""); // reset inputText
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


//The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.

//The React useState Hook allows us to track state in a function component.

