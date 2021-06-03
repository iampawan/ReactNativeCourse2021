import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Login() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#000046", "#1CB5E0"]} style={styles.bg}>
        <SafeAreaView>
          <Text style={styles.text}>Login</Text>
          <Image
            style={styles.logo}
            source={require("../assets/adaptive-icon.png")}
          ></Image>
          <TextInput
            style={styles.textinput}
            placeholder="Enter Username"
            placeholderTextColor="#eee"
          ></TextInput>
          <TextInput
            secureTextEntry={true}
            style={styles.textinput}
            placeholder="Enter Password"
            placeholderTextColor="#eee"
          ></TextInput>
          <Button
            color={Platform.OS === "ios" ? "white" : "null"}
            title="Sign In"
            onPress={() => alert("You are logged in")}
          ></Button>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  textinput: {
    color: "white",
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 32,
  },

  text: {
    color: "white",
    fontSize: 40,
    padding: 32,
    fontWeight: "bold",
    marginTop: 16,
  },
});

export default Login;
