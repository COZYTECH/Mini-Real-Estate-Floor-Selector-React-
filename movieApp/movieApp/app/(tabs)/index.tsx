import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Text, View, Image, ScrollView } from "react-native";
import SearchBar from "@/components/SearchBar";

export default function Index() {
  return (
    <View className="bg-primary flex-1">
      <Image source={images.bg} className="absolute w-full z-0" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}
      >
        <Image source={icons.logo} className="h-10 w-12 mt-20 mb-5 mx-auto" />

        <View className="flex-1 mt-5">
          <SearchBar />
        </View>
      </ScrollView>
    </View>
  );
}
