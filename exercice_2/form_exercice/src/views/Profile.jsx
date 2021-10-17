import React, { useState, useEffect } from "react";
import ProfileDisplayer from "../components/ProfileDisplayer";
import { Link } from "react-router-dom";
import axios from "axios";

import { View } from "../styles/Container.style";
import { Button } from "../styles/Button.style";
import { Tilte } from "../styles/Text.style";

function Profile() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3005/users").then((res) => setdata(res.data));
  };

  return (
    <View>
      <Tilte>Profil</Tilte>
      {data.slice(-1).map((user) => (
        <ProfileDisplayer user={user} />
      ))}
      <Link to="/">
        <Button>Déconnexion</Button>
      </Link>
    </View>
  );
}

export default Profile;
