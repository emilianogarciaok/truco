import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Main() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[{ paddingTop: insets.top }]}
      className="flex items-center w-full h-full "
    >
      {/* Title */}
      <View>
        <Text className="text-white text-[50px] font-bold">Truco</Text>
      </View>
      {/* Login */}
      <View className="w-full h-full  justify-center pb-[120px] text-start items-center flex">
        <Text className="text-white text-[70px]">Hola!</Text>
        <Text className="text-white text-[20px] pb-[10px]">Ingresa a tu Cuenta</Text>
        <TextInput
          className="w-[80%] p-[10px] mb-[13px] rounded-lg bg-white"
          placeholder="Email"
        />
        <TextInput
          className="w-[80%] p-[10px] mb-[13px] rounded-lg bg-white"
          placeholder="Password"
        />
        <Text className='text-gray-100 text-[15px] mb-[25px] '>Olvidaste tu contraseña?</Text>
        {/* Button Sign In */}
        <TouchableOpacity className='w-[35%] items-center bg-white rounded-lg h-[45px]  justify-center'>
          <Text className='text-[15px] font-bold'>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
