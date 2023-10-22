export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image", // Specify the data type as 'image'
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "website",
      title: "Website",
      type: "string",
    },
  ],
};
