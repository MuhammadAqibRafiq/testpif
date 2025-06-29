import type { CollectionConfig } from 'payload'

export const Redia: CollectionConfig = {
  slug: 'redia',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alts',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
