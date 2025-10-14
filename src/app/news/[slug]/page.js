// app/news/[slug]/page.jsx
import { getClient } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import NewsGallery from '@/components/NewsGallery';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

// Slug'a göre tek bir post çeken GROQ sorgusu
const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  content,
  coverImage,
  images
}`;

export const revalidate = 60;

export default async function PostPage({ params }) {
  const { slug } = await params;
  const client = await getClient();
  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    return <div>Yazı bulunamadı.</div>;
  }

  const gallerySources = [post.coverImage, ...(post.images || [])].filter(Boolean);
  const galleryUrls = gallerySources.map((img) => urlFor(img).width(1600).url());

  return (
    <article>
      <div className="bg-gradient-to-b from-[#2E6B4D] to-[#23523A] text-white py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-4xl">

      <div className="prose lg:prose-xl max-w-none text-black prose-headings:text-black prose-p:text-black prose-strong:text-black prose-em:text-black">
        <PortableText value={post.content} />
      </div>

        {galleryUrls.length > 0 && (
          <div className="mt-10">
            <NewsGallery images={galleryUrls} />
          </div>
        )}
      </div>
    </article>
  );
}