//import react component
import React from "react";

//props: passing information to a component. 
function toDoItem(props) {

  return (
    <div onClick={() => {
      props.onChecked(props.id);
    }}>
      <li>{props.item}</li>
    </div>
  );
}

export default toDoItem;
