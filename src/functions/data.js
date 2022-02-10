import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const read = async (setN) => {
  const value = await AsyncStorage.getItem("@key");

  if (value) {
    setN(JSON.parse(value));
  } else setN(0);
};

export const save = async (n) => {
  await AsyncStorage.setItem("@key", JSON.stringify(n));
  Alert.alert("Saved!");
};

export const del = async () => {
  await AsyncStorage.clear();
  Alert.alert("Succesfully deleted.");
};
