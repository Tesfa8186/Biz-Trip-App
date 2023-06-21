import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import SkillsList from "../components/SkillsList";
import SkillForm from "../components/SkillForm";
import { QUERY_SINGLE_PROFILE, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";

import "../styles/Profile.css";

const Profile = () => {
  const { profileId } = useParams();

  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  const profile = data?.me || data?.profile || {};

  // Redirect to login if not logged in
  if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <h2 className="cardHeaderStyle">
        {profileId ? `${profile.name}'s` : "Your"} friends have endorsed these
        skills...
      </h2>

      {profile.skills?.length > 0 && (
        <SkillsList
          skills={profile.skills}
          isLoggedInUser={!profileId && true}
        />
      )}

      <div className="formStyle">
        <SkillForm profileId={profile._id} />
      </div>
    </div>
  );
};

export default Profile;
