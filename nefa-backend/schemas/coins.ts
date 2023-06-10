export default {
  name: 'coins',
  title: 'Coins',
  type: 'document',
  fields: [
    {
      name: 'trendcoins',
      title: 'Trend Coins',
      type: 'array',
      of: [
        {
          name: 'coin',
          title: 'Coin',
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
            {
              name: 'text',
              title: 'Text',
              type: 'string',
            },
            {
              name: 'span',
              title: 'Span',
              type: 'string',
            },
            {
              name: 'price',
              title: 'Price',
              type: 'string',
            },
            {
              name: 'chartImage',
              title: 'ChartImage',
              type: 'image',
              fields: [
                {
                  name: 'chartAlt',
                  title: 'Chart Alt',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'gainercoins',
      title: 'Gainer Coins',
      type: 'array',
      of: [
        {
          name: 'coin',
          title: 'Coin',
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
            {
              name: 'text',
              title: 'Text',
              type: 'string',
            },
            {
              name: 'span',
              title: 'Span',
              type: 'string',
            },
            {
              name: 'price',
              title: 'Price',
              type: 'string',
            },
            {
              name: 'chartImage',
              title: 'ChartImage',
              type: 'image',
              fields: [
                {
                  name: 'chartAlt',
                  title: 'Chart Alt',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'recentlycoins',
      title: 'Recently Coins',
      type: 'array',
      of: [
        {
          name: 'coin',
          title: 'Coin',
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
            {
              name: 'text',
              title: 'Text',
              type: 'string',
            },
            {
              name: 'span',
              title: 'Span',
              type: 'string',
            },
            {
              name: 'price',
              title: 'Price',
              type: 'string',
            },
            {
              name: 'chartImage',
              title: 'ChartImage',
              type: 'image',
              fields: [
                {
                  name: 'chartAlt',
                  title: 'Chart Alt',
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
