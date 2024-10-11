import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#25292e"
    },
    text: {
      color: "#fff"
    }
  })

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}
