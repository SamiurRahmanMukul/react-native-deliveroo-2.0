import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-5 flex-row items-center justify-between px-2">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-gray-500 text-sm pl-2">{description}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }} className="mt-5 mb-4">
        {/* prettier-ignore */}
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7" 
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
         />
        {/* prettier-ignore */}
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7" 
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
         />
        {/* prettier-ignore */}
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7" 
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
         />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
