import React,{useEffect} from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Login from "./screens/Login";

const Stack = createNativeStackNavigator();


export default function App() {

  useEffect(() => {

  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
