export default {
  name: 'trading',
  title: 'Trading',
  type: 'document',
  fields: [
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
        {
          name: 'span',
          title: 'Span',
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
              name: 'title',
              title: 'Title',
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
  ],
}
