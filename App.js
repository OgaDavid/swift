import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";
import OrderFoodScreen from "./screens/OrderFoodScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    poppins: require("./assets/fonts/Poppins-Medium.ttf"),
    proximaNova: require("./assets/fonts/ProximaNovaA-Semibold.ttf"),
    lazer: require("./assets/fonts/lazer.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <stack.Navigator screenOptions={{headerShown: false}}>
            <stack.Screen name="HomeScreen" component={HomeScreen} />
            <stack.Screen name="MapScreen" component={MapScreen} />
            <stack.Screen name="OrderFoodScreen" component={OrderFoodScreen} />
            <stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
          </stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
