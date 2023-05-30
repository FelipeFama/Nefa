export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
