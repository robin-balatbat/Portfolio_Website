import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Container } from "@mui/material";

function isRouterError(object) {
    return 'message' in object;
}

function errorMessage(error) {
    if (isRouteErrorResponse(error)) {
        return `${error.status} ${error.statusText}`
    } else if (error != undefined && isRouterError(error)) {
        return error.message;
    } else if (typeof error === 'string') {
        return error
    } else {
        console.error(error)
        return 'Unknown error'
    }
}

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage(error)}</i>
      </p>
    </Container>
  );
}