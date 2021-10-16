// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

// function Form() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [hookData, sethookData] = useState(null);

//   const submit = (newData) => {
//     sethookData(newData);
//   };

//   console.log(errors, "error");
//   console.log("hook Data =>", hookData);

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <div>
//         <form onSubmit={handleSubmit(submit)}>
//           <input
//             {...register("firstname", { required: "Nom invalide !" })}
//             type="text"
//             placeholder="Nom"
//             className="is-invalide"
//           />
//           {errors.firstname && <span>{errors.firstname.message}</span>}
//           <input
//             {...register("lastname", { required: "Prénom invalide !" })}
//             type="text"
//             placeholder="Prénon"
//           />
//           {errors.lastname && <span>{errors.lastname.message}</span>}
//           <input
//             {...register("email", { required: "Email invalide !" })}
//             type="email"
//             placeholder="Email"
//           />
//           {errors.email && <span>{errors.email.message}</span>}
//           <input
//             {...register("phone", { required: false })}
//             type="text"
//             placeholder="Téléphone"
//           />
//           {/* <Link to={{pathname: "/profile", state: hookData}} ><button>log in</button></Link> */}
//           <button>log in</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Form;
