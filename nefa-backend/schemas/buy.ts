export default {
    name: 'buy',
    title: 'Buy',
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
            name: 'text2',
            title: 'Text2',
            type: 'string',
          },
        ],
      },
      {
        name: 'description',
        title: 'Description',
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
  