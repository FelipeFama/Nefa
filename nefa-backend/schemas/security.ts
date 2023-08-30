export default {
  name: 'security',
  title: 'Security',
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
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'text1',
          title: 'Text1',
          type: 'string',
        },
      ],
    },
    {
      name: 'articles',
      title: 'Articles',
      type: 'array',
      of: [
        {
          name: 'article',
          title: 'Article',
          type: 'object',
          fields: [
            {
              name: 'span',
              title: 'Span',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
