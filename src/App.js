// 3rd party variables
import React, { useState } from "react";

// local variables

// React components
function App() {
  // variables
  const [items, setItem] = useState([
    { name: "1", id: 1, done: false },
    { name: "2", id: 2, done: false },
    { name: "3", id: 3, done: false },
    { name: "4", id: 4, done: false }
  ]);
  const [value, setValue] = useState("");

  // when submitted, push target into items
  const handleSubmit = event => {
    event.preventDefault();
    const newItems = [...items, { name: value, id: Date.now(), done: false }];
    setItem(newItems);
    setValue("");
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleDelete = id => {
    return event => {
      let newItems = [...items];
      newItems = newItems.filter(item => {
        return item.id !== id;
      });
      setItem(newItems);
    };
  };

  const handleComplete = id => {
    return event => {
      let newItems = [...items];
      newItems = newItems.map(item => {
        if (item.id === id) {
          item.done = true;
        }
        return item;
      });

      setItem(newItems);
    };
  };

  // return
  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          To Do:
          <input
            type="text"
            name="todo"
            placeholder="Enter your item here!"
            value={value}
            onChange={handleChange}
          />
        </label>
      </form>
      <h2>To Do List</h2>
      <ul>
        {items.map(item => {
          let liStyle = {};
          if (item.done) {
            liStyle = { "text-decoration": "line-through" };
          }
          return (
            <li key={item.id} style={liStyle}>
              {" "}
              {item.name}
              <button onClick={handleComplete(item.id)}> Done </button>
              <button onClick={handleDelete(item.id)}> X </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
