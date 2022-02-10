import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Btn = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default Btn;
