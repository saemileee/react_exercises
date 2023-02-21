import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [...currentArray, toDo]);
  };
  const del = (index) => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
  };
  const [isCompleted, setIsCompleted] = useState(false);
  function check() {
    isCompleted ? setIsCompleted(false) : setIsCompleted(true);
    console.log("isCompleted");
  }
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          text="text"
          placeholder="Write your todo..."
        />
        <button>Add To do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>
          <button onClcik={check}>{isCompleted ? "😘" : "🤔"}</button>
          {item}
          <button onClick={() => del(index)}>X</button>
        </li>
      ))}
    </div>
  );
}

export default App;
