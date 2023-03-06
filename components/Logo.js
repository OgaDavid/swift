import { StyleSheet, Text, View, Image } from "react-native";
import tw from "twrnc";
import React from "react";

export default function Logo() {
  return (
    <View style={tw`flex-row items-center gap-1`}>
      <Image
        style={{
          width: 30,
          height: 30
        }}
        source={require("../assets/logo.png")}
      />
      <Text style={[tw`text-lg font-semibold text-2xl`, {fontFamily: 'proximaNova'}]}>Swift</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
