import { View, Text } from "react-native";
import React, { useState } from "react";

import {getAuth, createUserWithEmailAndPassword,updateProfile,} from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";

import Title from "../components/Title";
import Form from "../components/Form";
import tw from "tailwind-react-native-classnames";
import Layout from "./Layout";

export default function Register() {
  const [errorMessage, setError] = useState(),
    [successMessage, setSuccess] = useState("");

  /* Esto es con firebase para registrarse con el nombre, correo y contraseña 
  createUserWithEmailAndPassword de firebase y aparecera en la bd el correo, uid,
  fecha de creacion y fecha de acceso.
  */

  const register = (name, email, password) => {
    if (!name && !email && !password) {
      alert("Por favor ingrese todos los campos requeridos");
    } else {
      const app = initializeApp(firebaseConfig);

      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          await updateProfile(auth.currentUser, { displayName: name });
          const user = userCredential.user;
          console.log(user);
          setSuccess("Usuario Creado satisfactoriamente");
          setError("");
        })
        .catch((err) => setError(err.message));
    }
  };

  return (
    <Layout>
      <View style={tw`w-3/4`}>
        <Title text="Registro" />
        {!!errorMessage && (
          <Text style={tw`bg-red-400 p-1 my-2 text-red-700`}>
            {errorMessage}
          </Text>
        )}
        {!!successMessage && (
          <Text style={tw`bg-green-400 p-1 my-2 text-green-700`}>
            {successMessage}
          </Text>
        )}

        <Form signup={true} onSubmit={register} error={errorMessage} />
      </View>
    </Layout>
  );
}
