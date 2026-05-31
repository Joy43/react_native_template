import { Stack } from "expo-router";
import { ActivityIndicator, SafeAreaView, View } from "react-native";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { StatusBar } from "expo-status-bar";

import "./global.css";
import { persistor, store } from "./redux/store";
import { useColorScheme } from "./hook/Usecolorscheme";

export default function RootLayout() {
  const { isDark } = useColorScheme();

  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" />
          </View>
        }
        persistor={persistor}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style={isDark ? "light" : "dark"} />

          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: isDark ? "#0f0f0f" : "#ffffff",
              },
            }}
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="(start)" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(root)" />
            <Stack.Screen name="(client)" />
            <Stack.Screen name="(stylist)" />
            <Stack.Screen name="booking" />
          </Stack>

          <Toast />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
