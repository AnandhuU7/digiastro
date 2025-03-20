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
    slug: z.string().optional(),
    subTitle: z.string(),
    category: z.string(),
    imgCard: image(),
    imgAlt: z.string(),
    thumbnails: z.array(image()).optional(),
    features: z.array(z.string()),
    rating: z.number().min(0).max(5).optional(),
    reviewCount: z.number().min(0).optional(),
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
    slug: z.string().optional(),
    subTitle: z.string(),
    category: z.string(),
    imgCard: image(),
    imgAlt: z.string(),
    thumbnails: z.array(image()).optional(),
    features: z.array(z.string()),
    rating: z.number().min(0).max(5).optional(),
    reviewCount: z.number().min(0).optional(),
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
      slug: z.string().optional(),
      subTitle: z.string(),
      category: z.string(),
      imgCard: image(),
      thumbnails: z.array(image()).optional(),
      imgAlt: z.string(),
      features: z.array(z.string()),
      rating: z.number().min(0).max(5).optional(),
      reviewCount: z.number().min(0).optional(),
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
    slug: z.string().optional(),
    subTitle: z.string(),
    category: z.string(),
    imgCard: image(),
    imgAlt: z.string(),
    thumbnails: z.array(image()).optional(),
    features: z.array(z.string()),
    rating: z.number().min(0).max(5).optional(),
    reviewCount: z.number().min(0).optional(),
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
    id: z.number(),
    title: z.string(),
    description: z.string(),
    cardImage: image(),
    publishDate: z.string(),
    author: z.string(),
    readingTime: z.number(),
    intro: z.string(),
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