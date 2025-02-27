// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection, reference } from 'astro:content';

const categoriesCollection = defineCollection({
  type: "content",
  schema: () => z.object({
    id: z.number(),
    name: z.string(),
    products: z.array(reference("products"))
  }),
});

const featureCollection = defineCollection({
  type: "content",
  schema: () => z.object ({
    id: z.number(),
    title: z.string(),
    body: z.string(),    
    name: z.string(),
  }),
});

const productsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.number(),
    title: z.string(),
    subTitle: z.string(),
    category: z.string(),
    imgCard: image(),
    imgAlt: z.string(),
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
const testimonialCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object ({
    id: z.number(),
    content: z.string(),
    author: z.string(),
    role: z.string(),
    avatarSrc: image(),
    avatarAlt: z.string(),
  }),
});

const bannerCollection = defineCollection({
  schema: z.object({
    imgMain: z.string(), // Path to the image
    title: z.string(), // Title of the slide
    subTitle: z.string(), // Subtitle of the slide
    content: z.string(), // Main content
    subContent: z.string(), // Subcontent
  }),
});

export const collections = {
  'feature' : featureCollection,
  'products': productsCollection,
  'blogs': blogCollection,
  'category': categoriesCollection,
  'testimonials': testimonialCollection,
  'banner': bannerCollection,
};