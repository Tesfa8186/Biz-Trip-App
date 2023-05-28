/* eslint-disable no-unused-vars */
import React from "react";
import { useQuery } from "@apollo/client";
// import ProfileList from '../components/ProfileList';
import { QUERY_PROFILES } from "../utils/queries";
import { css } from "@emotion/react";

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];
  const CSS = "style";

  return (
    <main>
      <div className="flex-row justify-left">
        <div
          CSS={css`
            margin: 0;
            padding: 0;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 18px;
            color: blue;
          `}
        >
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
