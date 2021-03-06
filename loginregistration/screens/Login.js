import { View, Text, Button, Image } from "react-native";
import React, { useState } from "react";
import Title from "../components/Title";
import Form from "../components/Form";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";

import tw from "tailwind-react-native-classnames";
import Layout from "./Layout";

export default function Login() {
  const [errorMessage, setError] = useState(),
    [successMessage, setSuccess] = useState("");

  /* Esto es con firebase se loguea con el correo y contraseña 
  se obtiene el signInWith de firebase de que las contraseñas si son
  correctas entonces el user se logueo 
  */
  const login = (name, email, password) => {
    if (!name && !email && !password) {
      alert("Por favor ingrese todos los campos requeridos");
    } else {
      const app = initializeApp(firebaseConfig);

      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setSuccess(
            `Usuario Logeado satisfactoriamente ¡Bienveni@! ${user.displayName}`
          );
          setError("");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };
  return (
    <Layout>
      <View style={tw`w-3/4`}>
        <Title text="Login" />
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

        <Form signup={false} onSubmit={login} />
      </View>
    </Layout>
  );
}
