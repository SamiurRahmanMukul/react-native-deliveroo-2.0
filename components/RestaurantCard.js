import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { LocationMarkerIcon, StarIcon } from "react-native-heroicons/solid";

const RestaurantCard = ({ id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat }) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow-sm">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>

        <View className="flex-row items-center space-x-1">
          <StarIcon size={22} color="green" opacity={0.5} />

          <Text className="text-gray-500 text-sm">
            <Text className="text-green-500">{rating}</Text> • {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon size={22} color="gray" opacity={0.5} />
          <Text className="text-gray-500 text-sm">{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
