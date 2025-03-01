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
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.number(),
    title: z.string(),
    subTitle: z.string(),
    category: z.string(),
    imgCard: image(),
    imgAlt: z.string(),
    features: z.array(z.string()),
    specifications: z.object({
      intelligent_analytics: z.object({
        AI_by_NVR: z.array(z.string()),
        AI_by_Camera: z.array(z.string()),
      }),
      facial_recognition: z.object({
        Facial_Detection_and_Analytics: z.array(z.string()),
        Face_Picture_Library: z.object({
          Libraries: z.number(),
          Max_Pictures: z.number(),
          Picture_Size_Limit: z.string(),
          Total_Capacity: z.string(),
        }),
        Face_Picture_Comparison: z.object({
          Channels: z.number(),
          Comparison_Speed: z.string(),
        }),
        Facial_Detection_and_Analytics_Performance: z.object({
          Simultaneous_Mode: z.string(),
          Independent_Mode: z.string(),
        }),
      }),
      video_and_audio: z.object({
        IP_Video_Input: z.string(),
        Incoming_Bandwidth: z.string(),
        Outgoing_Bandwidth: z.string(),
        Incoming_Bandwidth_RAID_Mode: z.string(),
        Outgoing_Bandwidth_RAID_Mode: z.string(),
        HDMI_Outputs: z.record(z.string()),
        VGA_Outputs: z.record(z.string()),
        Video_Output_Mode: z.record(z.string()),
        HDMI_Input: z.string(),
        HDMI_Loopback: z.string(),
        Audio_Output: z.string(),
        Two_Way_Audio: z.string(),
      }),
      general: z.object({
        GUI_Language: z.string(),
        Power_Supply: z.string(),
        Consumption: z.string(),
        Working_Temperature: z.string(),
        Working_Humidity: z.string(),
        Dimension: z.string(),
        Weight: z.string(),
      }),
    }).optional(),
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
  'nvr': nvrCollection
};