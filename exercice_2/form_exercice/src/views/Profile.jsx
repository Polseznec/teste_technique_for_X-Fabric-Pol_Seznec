import React, { useState, useEffect } from "react";
import ProfileDisplayer from "../components/ProfileDisplayer";
import { Link } from "react-router-dom";
import axios from "axios";

function Profile() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3005/users").then((res) => setdata(res.data));
  };

  return (
    <div>
      <h1>Profile</h1>
      {data.slice(-1).map((user) => (
        <ProfileDisplayer user={user} />
      ))}
      <Link to="/">
        <button>Log Out</button>
      </Link>
    </div>
  );
}

export default Profile;
