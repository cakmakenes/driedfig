import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'
const token = process.env.SANITY_READ_TOKEN // Optional: needed if dataset is private

if (!projectId || !dataset) {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.error('Missing Sanity env vars: NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET')
  }
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: !token, // if we have a token (private dataset), disable CDN to ensure fresh data
  token, // Only used on the server; do not expose on client components
  perspective: 'published',
  ignoreBrowserTokenWarning: true,
})
