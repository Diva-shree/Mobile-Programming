import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const colors = ["red", "blue", "green", "purple", "orange"];
  const [index, setIndex] = useState(0);

  const changeColor = () => {
    setIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: colors[index] }]}>
        <Text style={styles.text}>
          {colors[index].toUpperCase()}
        </Text>

        <TouchableOpacity style={styles.button} onPress={changeColor}>
          <Text style={styles.buttonText}>Change Color</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    padding: 30,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    color: "white",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});
