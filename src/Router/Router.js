import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signin from "../components/Signin/Signin";
import Signup from "../components/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    },
    {
        path: '/signup',
        element: <Signup></Signup>
    },
    {
        path: '/signin',
        element: <Signin></Signin>
    }
])

export default router;