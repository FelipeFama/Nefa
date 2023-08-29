export default {
  name: 'partners',
  title: 'Partners',
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
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'partner',
      title: 'Partner',
      type: 'array',
      of: [
        {
          name: 'partnerimage',
          title: 'Partner Image',
          type: 'object',
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
          ],
        },
      ],
    },
  ],
}
