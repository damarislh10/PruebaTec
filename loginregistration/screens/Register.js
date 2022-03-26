import { View, Text } from "react-native";
import React, {useState} from "react";
import Title from "../components/Title";
import Form from "../components/Form";
import tw from "tailwind-react-native-classnames";
import Layout from "./Layout";
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
export default function Register() {

  const [errorMessage, setError] = useState(),
  [successMessage, setSuccess] = useState("")

  const register  = (email, password) => {
    if(!email && !password)
    {
     alert("Por favor ingrese todos los campos requeridos")
    }
  else{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        setSuccess("Usuario Creado satisfactoriamente")
        setError("")
      })
      .catch((err => setError(err.message)));

  }
}
  return (
    <Layout>
      <View style={tw`w-3/4`}>
        <Title text="Registro" />
        {!!errorMessage && <Text style={tw`bg-red-400 p-1 my-2 text-red-700`}>{errorMessage}</Text>}
        {!!successMessage && <Text style={tw`bg-green-400 p-1 my-2 text-green-700`}>{successMessage}</Text>}

        <Form signup={true} onSubmit={register} error={errorMessage}/>
      </View>
    </Layout>
  );
}
