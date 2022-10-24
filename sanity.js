import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "i55ngj2k",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-07-18",
});

const builder = new ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
