import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllTrips from "./pages/AllTrips";
import TripDetails from "./pages/TripDetails";
import UpdateTrip from "./pages/UpdateTrip";
import DeleteTrip from "./pages/DeleteTrip";
import AddTrip from "./pages/AddNewTrip";
import "./styles/App.css"; // Import the CSS file here

const httpLink = createHttpLink({
  uri: "/graphql",
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
      <Router>
        <div className="flexColumn justifyFlexStart min100vh">
          {" "}
          {/*I use class names here */}
          <Header />
          <div className="container">
            {" "}
            {/*I  use class names here */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/me" element={<Profile />} />
              <Route path="/profiles/:profileId" element={<Profile />} />
              <Route path="/alltrips" element={<AllTrips />} />
              <Route path="/tripdetails" element={<TripDetails />} />
              <Route path="/updatetrip" element={<UpdateTrip />} />
              <Route path="/addnewtrip" element={<AddTrip />} />
              <Route path="/updatetrip/:id" element={<UpdateTrip />} />
              <Route path="/deletetrip/:id" element={<DeleteTrip />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
