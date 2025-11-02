// app/index.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function EntryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Entry Screen - Awesome</Text>

      <View style={{ marginTop: 16 }}>
        <Text style={styles.largeText}>
          Typescript is great if you practice more
        </Text>
        <Text style={styles.mediumText}>
          React Native provides you a single codebase for cross platforms
        </Text>
        <Text style={styles.smallText}>ALX is awesome</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90caf9",
    padding: 16,
    justifyContent: "center",
  },
  mainText: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    // TypeScript can complain about fontVariant typing; cast to any if needed.
    fontVariant: ["small-caps" as any],
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500" as any,
    textAlign: "right" as any,
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400" as any,
    textAlign: "center" as any,
  },
});
