import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: 1,
    title: "Order a ride",
    image: require("../assets/car.gif"),
    screen: "MapScreen",
  },
  {
    id: 2,
    title: "Order Food",
    image: require("../assets/food.gif"),
    screen: "OrderFoodScreen",
  },
  {
    id: 3,
    title: "Delivery",
    image: require("../assets/delivery.gif"),
    screen: "DeliveryScreen",
  },
];

export default function ScreenOptions() {

  const Navigation = useNavigation();

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => Navigation.navigate(item.screen)}
        >
          <View
            style={tw`flex flex-col items-center justify-center bg-[#F6F6F6] p-5 mr-2 rounded-xl`}
          >
            <Image source={item.image} style={{ width: 100, height: 100 }} />
            <View style={tw`flex flex-row items-center gap-2`}>
              <Text style={{ fontFamily: "proximaNova" }}>{item.title}</Text>
              <Image 
                style={{width: 10, height: 10}}
                source={require("../assets/double-arrow.gif")}
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({});
