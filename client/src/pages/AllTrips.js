import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_TRIPS } from "../utils/queries";
import TripList from "../components/TripList";

const AllTrips = () => {
  const { loading, data, refetch } = useQuery(QUERY_TRIPS);
  const trips = data?.trips || [];

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>All Trips</h1>
      <TripList trips={trips} />
    </>
  );
};

export default AllTrips;
