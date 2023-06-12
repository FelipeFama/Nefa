export default {
  name: 'trendCoins',
  title: 'trendCoins',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
  ],
}
