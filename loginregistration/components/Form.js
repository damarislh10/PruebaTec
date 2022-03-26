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
export default function Form({ signup, onSubmit, error }) {

  const navigation = useNavigation();

  screen = signup ? "Home" : "Register";
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [name, setName] = useState("");

  return (
    <View>
      {/* <FormInputGroup>
        <FormLabel text="Name" />
        <FormInput onChangeText={(text) => setName(text)} value={name} />
      </FormInputGroup> */}

      <FormInputGroup>
        <FormLabel text="Email" />
        <FormInput onChangeText={(text) => setEmail(text)} value={email} />

      </FormInputGroup>

      <FormInputGroup>
        <FormLabel text="Password" />
        <FormInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />

      </FormInputGroup>

      <FormButton
        primary={true}
        text={!signup ? "Login" : "Register"}
        onPress={() => onSubmit(email, password, name)}
      />
      <FormButton
        primary={false}
        onPress={() => navigation.navigate(screen)}
        text={signup ? "Login" : "Register"}
      />
    </View>
  );
}
