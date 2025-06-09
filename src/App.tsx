import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import { NavBar } from "./components/NavBar/NavBar";
import { HomePage } from "./pages/Home/HomePage";
import { PostsPage } from "./pages/Posts/PostsPage";
import { CounterPage } from "./pages/Counter/CounterPage";
import { TodoPage } from "./pages/Todo/TodoPage";
import { TodosKeyContext } from "./pages/Todo/TodosKeyContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Posts
          </NavLink>
          <NavLink
            to="/counter"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Counter
          </NavLink>
          <NavLink
            to="/todo"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Todo
          </NavLink>
        </NavBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route
            path="/todo"
            element={
              <>
                <TodosKeyContext.Provider value="todos-key">
                  <TodoPage />
                </TodosKeyContext.Provider>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
