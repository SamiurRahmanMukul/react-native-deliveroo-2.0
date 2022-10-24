import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import sanityClient from "../sanity";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured" && _id == "d90fb341-7e3f-4d47-b7c2-8761d00fbd02"]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->{
              type-> {
                name
              }
            }
          }
        }[0]
        `,
        { id: id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);

  return (
    <View>
      <View className="mt-5 flex-row items-center justify-between px-2">
        <Text className="font-bold text-lg">{typeof title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-gray-500 text-sm pl-2">{typeof description}</Text>

      {/* prettier-ignore */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{ paddingHorizontal: 10 }}
        className="mt-5 mb-4">
          {restaurants && restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              id={restaurant._id}
              imgUrl={restaurant.image}
              address={restaurant.address}
              title={restaurant.name}
              dishes={restaurant.dishes}
              rating={restaurant.rating}
              short_description={restaurant.short_description}
              genre={restaurant.type.name}
              long={restaurant.long}
              lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
