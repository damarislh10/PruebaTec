import { View, Text } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import { useNavigation } from "@react-navigation/native";

const FormInputGroup = ({ children }) => {
  return <View style={tw`my-3`}>{children}</View>;
};
export default function Form({ signup, onSubmit }) {
  const navigation = useNavigation();

  screen = signup ? "Login" : "Register";
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [name, setName] = useState("");

  return (
    <View>

      { screen !== "Register" ?
       <FormInputGroup>
          <FormLabel text="Nombre" />
          <FormInput onChangeText={(text) => setName(text)} value={name} />
          </FormInputGroup>
      : <Text></Text>
      }

      <FormInputGroup>
        <FormLabel text="Correo" />
        <FormInput onChangeText={(text) => setEmail(text)} value={email} />
      </FormInputGroup>

      <FormInputGroup>
        <FormLabel text="Contraseña" />
        <FormInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </FormInputGroup>

      <FormButton
        primary={true}
        text={!signup ? "Login" : "Registrarse"}
        onPress={() => onSubmit(name, email, password)}
      />
      <FormButton
        primary={false}
        onPress={() => navigation.navigate(screen)}
        text={signup ? "Login" : "Registrarse"}
      />
    </View>
  );
}
