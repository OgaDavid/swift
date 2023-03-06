import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import ScreenOptions from "../components/ScreenOptions";
import Header from "../components/Header";

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-white h-full p-5 pt-[13%]`}>
      <Header />
      <View
        style={[
          tw`w-screen bg-[#f3f3eb] rounded-xl flex flex-row justify-center h-40 p-2`,
          { overflow: "hidden" },
        ]}
      >
        <Image
          source={require("../assets/world.gif")}
          resizeMode="repeat"
          style={{ flex: 1, justifyContent: "center" }}
        />
      </View>
      <View style={tw`flex flex-row gap-1 items-center mb-6 mt-5`}>
        <Text
          style={[
            tw`text-black pt-3`,
            { fontFamily: "proximaNova", fontSize: 24 },
          ]}
        >
          Get started with Swift
        </Text>
        <Image
          source={require("../assets/arrow.gif")}
          style={{
            width: 30,
            justifyContent: "center",
            marginTop: 15,
            height: 30,
          }}
        />
      </View>
      <ScreenOptions />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
