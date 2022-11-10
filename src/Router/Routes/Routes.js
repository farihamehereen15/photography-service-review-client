import Main from "../../Layout/Main";
import AddService from "../../pages/AddService/AddService";
import Blog from "../../pages/Blog/Blog";
import CardDetails from "../../pages/CardDetails/CardDetails";
import Review from "../../pages/CardDetails/Review";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReview from "../../pages/MyReview/MyReview";
import Services from "../../pages/Services/Services";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: async () => {
                    return fetch("http://localhost:5000/services")
                }
            },
            {
                path: '/services/:id',
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                children: [
                    {
                        path: '/services/:id',
                        element: <Review></Review>,
                        loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`),
                    }
                ]
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
                // loader: async () => {
                //     return fetch("http://localhost:5000/services")
                // }
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            }



        ]
    }
]);

export default router;