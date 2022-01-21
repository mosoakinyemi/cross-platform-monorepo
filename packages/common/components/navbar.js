import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// import {useNavigation} from '@react-navigation/native';
import { fonts } from "../constants";

export default function NavBar({ title, leftText }) {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{leftText}</Text>
      <Text style={styles.pageTitle}>{title}</Text>
      <TouchableOpacity
      // onPress={() => navigation.navigate('Profile')}
      >
        <Image
          style={styles.avatar}
          source={{ uri: "https://i.pravatar.cc/300?img=2" }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: fonts.large,
    fontWeight: "500",
    color: "white",
  },
  name: {
    fontSize: fonts.large,
    color: "white",
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 20,
  },
  container: {
    backgroundColor: "purple",
    width: "100%",
    height: 40,
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
});
