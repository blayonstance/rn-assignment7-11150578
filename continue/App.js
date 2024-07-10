import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stacknavigator from "./stacknavigator";

export default function App() {
  return (
    <NavigationContainer>
      <Stacknavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
