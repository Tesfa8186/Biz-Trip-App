import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
//The Router, Routes, and Route components from react-router-dom are used to manage navigation and routing within the app
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

import AllTrips from './pages/AllTrips';
import TripDetails from './pages/TripDetails';

import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


//The App() function returns the layout of the application, wrapping the entire application 
//with ApolloProvider and passing the client instance as a prop. 
//Inside ApolloProvider, the Router component is used to manage the app's routes

//The Header, Footer, and main content area are wrapped with layout-related div elements.

//The Routes component contains a series of Route components, 
//each of which maps a specific path to a page component (e.g., Home, Profile, Signup, Login). 
//The element prop is used to pass the component that should be rendered when the path is matched.

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          
          <Header />

          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/me"
                element={<Profile />}
              />
              <Route
                path="/profiles/:profileId"
                element={<Profile />}
              />
              <Route
                path="/alltrips"
                element={<AllTrips />}
              />
              <Route
                path="/tripdetails"
                element={<TripDetails />}
              />
            </Routes>
          </div>

          <Footer />

        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
