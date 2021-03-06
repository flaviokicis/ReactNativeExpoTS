import Constants from "expo-constants";
import { ScrollView, Text } from "react-native";

export const SystemFontsScreen = () => (
  <ScrollView>
    {Constants.systemFonts.map((systemFont, index) => (
      <Text key={index}>{systemFont}</Text>
    ))}
  </ScrollView>
);
