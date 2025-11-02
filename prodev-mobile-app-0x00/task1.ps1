# Create folders
New-Item -ItemType Directory -Force -Path .\prodev-mobile-app-0x00\app\(tabs)

# Write file app/(tabs)/index.tsx
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
"@ | Out-File -FilePath .\prodev-mobile-app-0x00\app\(tabs)\index.tsx -Encoding utf8

# Write README.md
@"
# prodev-mobile-app-0x00 — Task 1: Create Your First Mobile App

## Scaffolding Steps
- Parent folder: `prodev-mobile-setup`
- Project folder: `prodev-mobile-app-0x00`
- Command run:
  ```bash
  npx create-expo-app@latest .
