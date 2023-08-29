export default {
  name: 'credit',
  title: 'Credit',
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
        {
          name: 'text2',
          title: 'Text2',
          type: 'string',
        },
      ],
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
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
      name: 'list',
      title: 'List',
      type: 'array',
      of: [{type: 'text'}],
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
