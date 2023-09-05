export default {
  name: 'hero',
  title: 'Hero',
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
      type: 'string',
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
    {
      name: 'particles',
      title: 'Particles',
      type: 'array',
      of: [
        {
          name: 'particle',
          title: 'Particle',
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
