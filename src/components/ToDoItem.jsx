import React from "react";

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
