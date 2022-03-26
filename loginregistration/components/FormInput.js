import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function FormInput(props) {
  let { ...other } = props; // accesory entrada text
  return (
    <TextInput
      style={tw`border border-blue-400 rounded px-3 py-2`}
      {...other}
    /> // is input
  );
}
