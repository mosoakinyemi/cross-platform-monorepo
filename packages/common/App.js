import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Feeds } from "./dashboard/feeds";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Feeds />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: "white",
  },
});

export default App;
