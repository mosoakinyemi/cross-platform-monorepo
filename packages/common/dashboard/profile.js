import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import NavBar from "../components/navbar";

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar title={"View Profile"} />
        <Image
          style={styles.avatar}
          source={{ uri: "https://i.pravatar.cc/300?img=2" }}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Name: Daniel Hari</Text>
          <Text style={styles.infoText}>Email: daniel.hari@okr.com</Text>
          <Text style={styles.infoText}>DOB: 21/01/2017</Text>
          <Text style={styles.infoText}>
            Hobbies: Coding, swimming, football and a lot more
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Go Back to Dashboard"
              // onPress={() => this.props.navigation.navigate('Feeds')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoText: {
    marginBottom: 10,
  },
  infoContainer: {
    alignSelf: "center",
  },
  avatar: {
    width: 300,
    height: 300,
    marginBottom: 20,
    alignSelf: "center",
  },
  buttonContainer: {
    marginTop: 40,
  },
  container: {
    flex: 1,
  },
});
