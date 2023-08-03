import { createBrowserRouter } from "react-router-dom";
import LandLayout from "../Components/Common/LandLayout";
import LandingPage from "../Pages/Auth/LandingPage";
import SignLayout from "../Components/Common/SignLayout";
import SigninPage from "../Pages/Auth/SigninPage";
import SignupPage from "../Pages/Auth/SignupPage";
import HomePage from "../Pages/Home/HomePage";
import SecondLayout from "../Pages/Auth/SecondLayout";
import Signin2 from "../Pages/Auth/Signin2";
import Signup2 from "../Pages/Auth/Signup2";

export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <LandLayout/>,
        children: [
            {
                index: true,
                element: <LandingPage/>
            }
        ]
    },
    {
        element: <SignLayout/>,
        path: "/sign",
        children: [
            {
                element: <SignupPage/>,
                path: "/sign/signup"
            },
            {
                element: <SigninPage/>,
                path: "/sign/signin"
            }
        ]
    },
    {
        element: <HomePage/>,
        path: "/home"
    },
    {
        element: <SecondLayout/>,
        path: "/second",
        children: [
            {
                index: true,
                element: <Signin2/>,
                path: "/second/signin2"
            },
            {
                element: <Signup2/>,
                path: "/second/signup2"
            }
        ]
    }
])
