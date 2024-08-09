import { MainLayout } from "@layouts/index";
import AboutUs from "@pages/AboutUs";
import Categories from "@pages/Categories";
import Error from "@pages/Error/Error";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Products from "@pages/Products";
import Register from "@pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'categories',
                element: <Categories />
            },
            {
                path: 'products/:prefix',
                loader: ({params}) => {
                    if (typeof params.prefix !== 'string' || !/^[a-zA-Z]+$/i.test(params.prefix))
                        {
                        throw new Response("Invalid Category", {
                            statusText: "Category Not Found",
                            status: 400,
                        })
                    }
                    return true
                },
                element: <Products />
            },
            {
                path: 'about-us',
                element: <AboutUs />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            },
        ]

    }
])

function AppRouter () {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter;
