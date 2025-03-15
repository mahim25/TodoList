//import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";

function App() {
  // Initialize todos from localStorage or use an empty array if null
  const initTodo = JSON.parse(localStorage.getItem("todos")) || [];

  // State for todos
  const [todos, setTodos] = useState(initTodo);

  // Function to delete a todo
  function onDelete(todo) {
    console.log("I'm deleting", todo);
    const updatedTodos = todos.filter((e) => e !== todo);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Save updated todos to localStorage
  }

  // Function to add a new todo
  const addTodo = (title, description) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      title: title,
      description: description,
      sno: sno,
    };

    const updatedTodos = [...todos, myTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Save updated todos to localStorage
  };

  // Update localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          {" "}
          {/* Use Routes for defining routes */}
          <Route
            path="/"
            element={
              // Use element instead of render
              <>
                <AddTodo addTodo={addTodo} />
                <Todos Todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route
            path="/about"
            element={<About />} // Use element for About component
          />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
