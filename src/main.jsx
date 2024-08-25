import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("https://coffee-house-pai7dme9r-shamim-islams-projects-5ec8c3e8.vercel.app/coffee"),
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-house-pai7dme9r-shamim-islams-projects-5ec8c3e8.vercel.app/coffee/${params.id}`),
  },
  {
    path: "signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "signIn",
    element: <SignIn></SignIn>,
  },
  {
    path:'users',
    element:<Users></Users>,
    loader:() => fetch("https://coffee-house-pai7dme9r-shamim-islams-projects-5ec8c3e8.vercel.app/user")
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
