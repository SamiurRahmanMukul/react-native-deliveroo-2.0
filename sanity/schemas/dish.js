export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name Of Dish",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "price",
      type: "number",
      title: "Price of the dish in GBP",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Dish",
    },
  ],
};
