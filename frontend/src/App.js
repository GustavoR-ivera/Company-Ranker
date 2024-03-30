import Register from './pages/register/Register';
import Login from './pages/login/Login';
import {
  createBrowserRouter,
  RouteProvider,
  Route,
  RouterProvider,
} from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "register",
      element: <Register/>
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
