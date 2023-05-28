export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
        },
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'lists',
      title: 'Lists',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'link',
              title: 'Link',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
