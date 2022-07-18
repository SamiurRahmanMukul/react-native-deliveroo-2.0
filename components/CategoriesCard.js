import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CategoriesCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-24 w-24 rounded-sm"
      />
      <View className="absolute bottom-0 left-0 right-0 p-2 bg-gray-200">
        <Text className="text-sm text-gray-600">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
