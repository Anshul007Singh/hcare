import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return   <PaperProvider>
              <Stack>
                      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
              </Stack>;
           </PaperProvider>
}
