export default {
  name: 'footer',
  title: 'Footer',
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
    {
      name: 'links2',
      title: 'Links',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'links3',
      title: 'Links',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
