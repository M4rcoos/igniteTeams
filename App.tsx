import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";
import { AppRoutes } from "@routes/app.routes";
import { Loading } from "@components/Loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import theme from "@theme/index";

import { Players } from "@screens/Players";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        {fontsLoaded ? <AppRoutes /> : <Loading />}
      </ThemeProvider>
    </NavigationContainer>
  );
}
