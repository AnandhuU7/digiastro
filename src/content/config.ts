// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection, reference } from 'astro:content';


const featureCollection = defineCollection({
  type: "content",
  schema: () => z.object ({
    id: z.number(),
    title: z.string(),
    body: z.string(),    
    name: z.string(),
  }),
});

const ptzcameraCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.number(),
    title: z.string(),
    subTitle: z.string(),
    category: z.string(),
    imgCard: image(),
    imgAlt: z.string(),
    thumbnails: z.array(image()).optional(),
    features: z.array(z.string()),
    specifications: z.record(
      z.string(),
      z.record(
        z.string(),
        z.union([
          z.string(),
          z.record(z.string(), z.string()),
          z.record(z.string(), z.union([z.string(), z.record(z.string(), z.string())]))
        ])
      )
    ).optional(),
  }),
});

const networkcameraCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.number(),
    title: z.string(),
    subTitle: z.string(),
    category: z.string(),
    imgCard: image(),
    imgAlt: z.string(),
    thumbnails: z.array(image()).optional(),
    features: z.array(z.string()),
    specifications: z.record(
      z.string(),
      z.record(
        z.string(),
        z.union([
          z.string(),
          z.record(z.string(), z.string()),
          z.record(z.string(), z.union([z.string(), z.record(z.string(), z.string())]))
        ])
      )
    ).optional(),
  }),
});

const nvrCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      subTitle: z.string(),
      category: z.string(),
      imgCard: image(),
      thumbnails: z.array(image()).optional(),
      imgAlt: z.string(),
      features: z.array(z.string()),
      specifications: z
        .record(
          z.string(),
          z.union([
            z.array(z.string()), 
            z.string(),
            z.record(z.string(), z.union([
              z.string(),
              z.array(z.string()),
              z.record(z.string(), z.union([
                z.string(),
                z.array(z.string()),
                z.record(z.string(), z.string())
              ]))
            ]))
          ])
        )
        .optional(),
    }),
});

const explosionproofCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.number(),
    title: z.string(),
    subTitle: z.string(),
    category: z.string(),
    imgCard: image(),
    imgAlt: z.string(),
    thumbnails: z.array(image()).optional(),
    features: z.array(z.string()),
    specifications: z.record(
      z.string(),
      z.record(
        z.string(),
        z.union([
          z.string(),
          z.record(z.string(), z.string()),
          z.record(z.string(), z.union([z.string(), z.record(z.string(), z.string())]))
        ])
      )
    ).optional(),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object ({
  title: z.string(),
  description: z.string(),
  contents: z.array(z.string()),
  author: z.string(),
  role: z.string().optional(),
  authorImage: image(),
  authorImageAlt: z.string(),
  pubDate: z.date(),
  cardImage: image(),
  cardImageAlt: z.string(),
  readTime: z.number(),
  tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'feature' : featureCollection,
  'blogs': blogCollection,
  'networkcamera': networkcameraCollection,
  'ptzcamera': ptzcameraCollection,
  'nvr': nvrCollection,
  'explosionproof': explosionproofCollection,
};