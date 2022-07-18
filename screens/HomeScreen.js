import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { AdjustmentsIcon, ChevronDownIcon, SearchIcon, UserIcon } from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-6">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-2 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={25} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-2">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <SearchIcon size={25} color="gray" />
          <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
        </View>

        <AdjustmentsIcon size={30} color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100 mb-28">
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <FeaturedRow id="123" title="Featured" description="Paid placement for your partners" />

        {/* Tasty Discount */}
        <FeaturedRow id="1234" title="Tasty Discount" description="Everyone's been enjoining these juicy discounts!" />

        {/* Offers Near You */}
        <FeaturedRow id="1235" title="Offers near you" description="Why not support your local restaurant tonight?" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
