import React from "react";
import { ScrollView } from "react-native";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 8,
        paddingTop: 5,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Testing 1" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Testing 2" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Testing 3" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Testing 4" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Testing 5" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Testing 6" />
    </ScrollView>
  );
};

export default Categories;
