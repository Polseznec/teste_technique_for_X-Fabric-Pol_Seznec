import React from "react";
import { Profile } from "../styles/Container.style";
import { ProfileInfo } from "../styles/Text.style";

function ProfileDisplayer({ user }) {
  return (
    <Profile>
      <ProfileInfo>
        <p>Nom : {user.firstname}</p>
        <p>Prénom : {user.lastname}</p>
        <p>Email : {user.email}</p>
        {user.phone === "" ? (
          <p>Téléphone : Non indiqué</p>
        ) : (
          <p>Téléphone : {user.phone}</p>
        )}
      </ProfileInfo>
    </Profile>
  );
}

export default ProfileDisplayer;
