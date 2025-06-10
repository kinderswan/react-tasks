// AppRouter.tsx or App.tsx

import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";

// Lazy-loaded pages
const HomePage = React.lazy(() =>
  import("./pages/Home/HomePage").then((x) => ({ default: x.HomePage }))
);
const PostsPage = React.lazy(() =>
  import("./pages/Posts/PostsPage").then((x) => ({ default: x.PostsPage }))
);
const CounterPage = React.lazy(() =>
  import("./pages/Counter/CounterPage").then((x) => ({
    default: x.CounterPage,
  }))
);
const TodoPage = React.lazy(() =>
  import("./pages/Todo/TodoPage").then((x) => ({ default: x.TodoPage }))
);
const TimerPage = React.lazy(() =>
  import("./pages/Timer/TimerPage").then((x) => ({ default: x.TimerPage }))
);
const TimerCounterPage = React.lazy(() =>
  import("./pages/TimeCounter/TimeCounterPage").then((x) => ({
    default: x.TimerCounterPage,
  }))
);

// Context
import { TodosKeyContext } from "./pages/Todo/TodosKeyContext";

// Layout/UI
import { NavBar } from "./components/Navigation/NavBar";
import { NavList } from "./components/Navigation/NavList";
import styles from "./components/Navigation/Navigation.module.scss";

const routesConfig = [
  {
    path: "/",
    title: "Home",
    element: (
      <Suspense fallback="Loading Home Page...">
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/posts",
    title: "Posts",
    element: (
      <Suspense fallback="Loading Posts Page...">
        <PostsPage />
      </Suspense>
    ),
  },
  {
    path: "/counter",
    title: "Counter",
    element: (
      <Suspense fallback="Loading Counter Page...">
        <CounterPage />
      </Suspense>
    ),
  },
  {
    path: "/todo",
    title: "Todo",
    element: (
      <Suspense fallback="Loading Todo Page...">
        <TodosKeyContext.Provider value="todos-key">
          <TodoPage />
        </TodosKeyContext.Provider>
      </Suspense>
    ),
  },
  {
    path: "/timer",
    title: "Timer",
    element: (
      <Suspense fallback="Loading Timer Page...">
        <TimerPage />
      </Suspense>
    ),
  },
  {
    path: "/timeCounter",
    title: "Time Counter",
    element: (
      <Suspense fallback="Loading Time Counter Page...">
        <TimerCounterPage />
      </Suspense>
    ),
  },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar>
          <NavList>
            {routesConfig.map((route) => (
              <li key={route.path}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    isActive ? styles["active-link"] : ""
                  }
                >
                  {route.title}
                </NavLink>
              </li>
            ))}
          </NavList>
        </NavBar>
        <section className="main-section">
          <Routes>
            {routesConfig.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
