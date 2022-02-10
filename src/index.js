import { useState, useEffect } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import Btn from "./components/btn";
import { read, save, del } from "./functions/data";

const App = () => {
  const [n, setN] = useState(undefined);

  useEffect(() => {
    read(setN);
  }, []);

  if (!n) {
    <ActivityIndicator style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      <Text>{n}</Text>
      <Btn
        onPress={() => {
          setN(n + 1);
        }}
        text="+"
      />
      <Btn
        onPress={() => {
          save(n);
        }}
        text="Save"
      />
      <Btn onPress={del} text="Delete" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
