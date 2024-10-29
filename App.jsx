import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
} from "react-native";
import Constants from "expo-constants";
import image from "./assets/madera3.jpg";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./components/Main";

export default function App() {
  return (
    <SafeAreaProvider>
      <ImageBackground source={image} className="flex-1">
        <Main />
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
