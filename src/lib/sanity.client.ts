import { createClient } from 'next-sanity'
import { draftMode } from 'next/headers'

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
  useCdn: true,
  perspective: 'published',
  ignoreBrowserTokenWarning: true,
})

export async function getClient() {
  const { isEnabled } = await draftMode()
  // In preview/draft mode: disable CDN and include token for private datasets
  if (isEnabled) {
    return createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token,
      perspective: 'previewDrafts',
      stega: true,
      ignoreBrowserTokenWarning: true,
    })
  }
  // Published mode: prefer CDN and no token to maximize caching
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: 'published',
    ignoreBrowserTokenWarning: true,
  })
}
