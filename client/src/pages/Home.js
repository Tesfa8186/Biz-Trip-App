import React from "react";
import { Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILES } from "../utils/queries";
import Auth from "../utils/auth"; // make sure you import the Auth
import '../styles/Home.css'; 

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  // Check if user is authenticated
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }

  return (
    <main className="mainStyle">
      <div className="divStyle">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <h1> Have a nice trip and ... take care!</h1>
        )}
      </div>
    </main>
  );
};

export default Home;
