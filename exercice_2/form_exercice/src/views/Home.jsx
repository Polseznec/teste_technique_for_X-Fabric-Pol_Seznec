import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import { View, Form } from "../styles/Container.style";
import { Button } from "../styles/Button.style";
import { Tilte, AlertMessage } from "../styles/Text.style";
import { Input } from "../styles/Input.style";

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [onSubmit, setOnSubmit] = useState(false);

  //   const [newData, SetNewData] = useStaƒ({
  //     firstname: "",
  //     lastname: "",
  //     email: "",
  //     phone: "",
  //   });
  // 

  console.log(errors);
  const submit = (newData) => {
    axios.post("http://localhost:3005/users", {
      firstname: newData.firstname,
      lastname: newData.lastname,
      email: newData.email,
      phone: newData.phone,
    });
    setOnSubmit(true);
  };

  return (
    <View>
      <Tilte>Formulaire</Tilte>
      <div>
        <Form onSubmit={handleSubmit(submit)}>
          <Input
            {...register("firstname", { required: "Nom invalide !"})}
            type="text"
            placeholder="Nom"
            className="is-invalide"
           
          />
          {errors.firstname && (
            <AlertMessage>{errors.firstname.message}</AlertMessage>
          )}
          <Input
            {...register("lastname", { required: "Prénom invalide !" })}
            type="text"
            placeholder="Prénom"
          />
          {errors.lastname && (
            <AlertMessage>{errors.lastname.message}</AlertMessage>
          )}
          <Input
            {...register("email", { required: "Email invalide !" })}
            type="email"
            placeholder="Email"
          />
          {errors.email && <AlertMessage>{errors.email.message}</AlertMessage>}
          <Input
            {...register("phone", { required: false })}
            type="text"
            placeholder="Téléphone"
          />
          <Button>CONFIRMER</Button>
          {onSubmit && <Redirect to="/profil" />}
        </Form>
      </div>
    </View>
  );
}

export default Home;
