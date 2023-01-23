import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";

import { Loading } from "@components/Loading";
import {useFonts, Roboto_400Regular, Roboto_700Bold} from "@expo-google-fonts/roboto"

import theme from "@theme/index";

import { Groups } from "@screens/Groups";

export default function App() {
const [ fontsLoaded ] = useFonts ({ Roboto_400Regular,Roboto_700Bold})

  return (
    <ThemeProvider theme = {theme}>
      <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor="transparent"
      />
      {fontsLoaded ?<Groups /> : <Loading/>}
    </ThemeProvider>
  );
}
