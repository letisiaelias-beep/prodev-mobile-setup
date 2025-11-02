@"
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TabsIndex() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First App Created</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
});
"@ | Out-File -FilePath .\app-example\app\(tabs)\index.tsx -Encoding utf8

# 3️⃣ Create the Colors.tsx file
@"
const Colors = {
  light: {
    text: '#000000',
    background: '#ffffff',
    tint: '#2f95dc',
  },
  dark: {
    text: '#ffffff',
    background: '#000000',
    tint: '#2f95dc',
  },
};

export default Colors;
"@ | Out-File -FilePath .\app-example\constants\Colors.tsx -Encoding utf8