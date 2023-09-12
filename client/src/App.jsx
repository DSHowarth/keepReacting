import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Outlet } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import AppNavbar from "./components/Navbar";

const httpLink = createHttpLink({
  uri: "graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AppNavbar />
        <Container>
          <Row className={'justify-content-center'}>
            <Outlet />
          </Row>
        </Container>
    </ApolloProvider>
  );
}
export default App;
