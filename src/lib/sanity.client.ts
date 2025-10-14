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
  useCdn: !token,
  token,
  perspective: 'published',
  ignoreBrowserTokenWarning: true,
})

export async function getClient() {
  const { isEnabled } = await draftMode()
  return createClient({
    projectId,
    dataset,
    apiVersion,
    // Disable CDN in draft mode to ensure fresh data
    useCdn: isEnabled ? false : !token,
    token,
    // Show drafts + overlays for visual editing when enabled
    perspective: isEnabled ? 'previewDrafts' : 'published',
    stega: isEnabled,
    ignoreBrowserTokenWarning: true,
  })
}
