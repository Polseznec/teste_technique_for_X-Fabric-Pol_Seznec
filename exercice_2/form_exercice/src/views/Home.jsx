import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

//   const [newData, SetNewData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     phone: "",
//   });
  const [onSubmit,setOnSubmit] = useState(false)

  const submit = (newData) => {

    axios.post("http://localhost:3005/users", {
      firstname: newData.firstname,
      lastname: newData.lastname,
      email: newData.email,
      phone: newData.phone,
    });
    setOnSubmit(true)
  };
 

  return (
      
    <div>
      <h2>Sign Up</h2>
      <div>
        <form onSubmit={handleSubmit(submit)}>
          <input
            {...register("firstname", { required: "Nom invalide !" })}
            type="text"
            placeholder="Nom"
            className="is-invalide"
          />
          {errors.firstname && <span>{errors.firstname.message}</span>}
          <input
            {...register("lastname", { required: "Prénom invalide !" })}
            type="text"
            placeholder="Prénom"
          />
          {errors.lastname && <span>{errors.lastname.message}</span>}
          <input
            {...register("email", { required: "Email invalide !" })}
            type="email"
            placeholder="Email"
          />
          {errors.email && <span>{errors.email.message}</span>}
          <input
            {...register("phone", { required: false })}
            type="text"
            placeholder="Téléphone"
          />
          <button>log in</button>
         {onSubmit && <Redirect to="/profile" />}
        </form>
      </div>
    </div>
  );
}

export default Home;


