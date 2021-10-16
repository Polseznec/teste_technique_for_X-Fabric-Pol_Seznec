import React from "react";

function ProfileDisplayer({ user }) {
  return (
    <div>
      <div>Nom : {user.firstname}</div>
      <div>Prénom : {user.lastname}</div>
      <div>Email : {user.email}</div>
      {user.phone === "" ? <div>Telephone : Pas indiqué</div> : <div>Telephone : {user.phone}</div> }
    </div>
  );
}

export default ProfileDisplayer;
