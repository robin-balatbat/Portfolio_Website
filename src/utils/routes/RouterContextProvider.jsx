import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import { alpha, Box, Divider } from "@mui/material";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import HomePage from "../../pages/home-page.jsx";
import Projects from "../../pages/projects-page.jsx";
import ErrorPage from "../../pages/error-page.jsx";
import InProgress from "../../pages/in-progress-page.jsx";
import ContactPage from "../../pages/contact-page.jsx";
import MockDashboard from "../../pages/mock-dashboard.jsx";
import { ProjectAscension } from "../../pages/project-ascension.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <Box
        component="main"
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
      >
        <Outlet />
        <Divider />
      </Box>
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
          element: <HomePage />
        },
        {
          path: "/projects",
          element: <Projects />
        },
        {
          path: "/contact",
          element: <ContactPage />
        },
        {
          path: "/wip",
          element: <InProgress />
        },
        {
          path: "/mock-dashboard",
          element: <MockDashboard />
        },
        {
          path: "/project-ascension",
          element: <ProjectAscension />
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
