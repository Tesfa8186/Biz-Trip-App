import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILES } from "../utils/queries";

import '../styles/Home.css'; // Assuming the CSS is in the same directory

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

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

