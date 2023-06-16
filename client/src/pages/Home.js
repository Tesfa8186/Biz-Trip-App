/* eslint-disable no-unused-vars */
import React from "react";
import { useQuery } from "@apollo/client";
// import ProfileList from '../components/ProfileList';
import { QUERY_PROFILES } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-left">
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <h1> Have a nice trip and ... take care!</h1>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
