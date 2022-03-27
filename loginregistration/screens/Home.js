import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";
import Title from "../components/Title";
import tw from "tailwind-react-native-classnames";
import Layout from "./Layout";
import { useNavigation } from "@react-navigation/native";

export default function Home({ signup }) {
  const navigation = useNavigation();
  screen = signup ? "Home" : "Login";
  let screen2 = signup ? "Home" : "Register";

  return (
    <Layout>
      <View style={tw`w-3/4`[styles.container]}>
        <Title text="Home" />

        <Button
          onPress={() => navigation.navigate(screen)}
          title="Iniciar sesion"
          style={{ flex: 1 }}
        />
        <Button
          onPress={() => navigation.navigate(screen2)}
          title="Registrarse"
          style={{ flex: 2 }}
          color="#7fb8da"
        />
        <Button title="Editar Perfil" style={{ flex: 3 }} color="#a9b8c0" />
      </View>
    </Layout>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
