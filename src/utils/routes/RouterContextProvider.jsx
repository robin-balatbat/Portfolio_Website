import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Home from "../../pages/home-page.jsx";
import ErrorPage from "../../pages/error-page.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <Box
        elevation={8}
        sx={(theme) => ({
          width: "100%",
          backgroundImage:
            theme.palette.mode === "light"
              ? "linear-gradient(180deg, #CEE5FD, #FFF)"
              : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
          backgroundSize: "100% 20%",
          backgroundRepeat: "no-repeat",
          bgcolor: "background.default"
        })}
        square={false}
      >
        <Outlet />
        <Footer />
      </Box>
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
