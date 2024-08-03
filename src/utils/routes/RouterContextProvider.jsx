import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Home from "../../pages/home-page.jsx";
import ErrorPage from "../../pages/error-page.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <Container component="main" className="container" maxWidth={"xl"}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

const RouterContextProvider = () => {
  const router = createHashRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <div>About</div>
        },
        {
          path: "/projects",
          element: <div>Mocked</div>
        },
        {
          path: "/contact",
          element: <div>Mocked</div>
        },
        {
          path: "*",
          element: <ErrorPage />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default RouterContextProvider;
