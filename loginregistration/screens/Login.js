import { View, Text, Button, Image } from "react-native";
import React, { useState } from "react";
import Title from "../components/Title";
import Form from "../components/Form";
import tw from "tailwind-react-native-classnames";
import Layout from "./Layout";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ signup }) {
  const [errorMessage, setError] = useState(),
    [successMessage, setSuccess] = useState("");


  /* Esto es con firebase se loguea con el correo y contraseña 
  se obtiene el signInWith de firebase de que las contraseñas si son
  correctas entonces el user se logueo 
  */ 
  const login = (email, password) => {
    if (!email && !password) {
      alert("Por favor ingrese todos los campos requeridos");
    } else {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setSuccess(`Usuario Logeado satisfactoriamente, ${user.uid}`);
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
