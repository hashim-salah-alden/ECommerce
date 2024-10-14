import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
const MainLayout = lazy(() => import("../layouts/MainLayout/MainLayout"));

// pages
const Home = lazy(() => import("../pages/Home"));
const Wishlist = lazy(() => import("../pages/Whishlist"));
const Categories = lazy(() => import("../pages/Categories"));
const Cart = lazy(() => import("../pages/Cart"));
const Products = lazy(() => import("../pages/Products"));
const Register = lazy(() => import("../pages/Register"));
const ProductFullInfo = lazy(() => import("../pages/ProductFullInfo"));
// const Profile = lazy(() => import("@pages/Profile"));
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <Suspense>
            <Wishlist />
          </Suspense>
        ),
      },
      {
        path: "/categories",
        element: (
          <Suspense>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/categories/products/:url",
        element: (
          <Suspense>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense>
            <Register />
          </Suspense>
        ),
      },

      {
        path: "/productId/:id",
        element: (
          <Suspense>
            <ProductFullInfo />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
