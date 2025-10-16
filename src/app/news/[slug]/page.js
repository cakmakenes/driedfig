// app/news/[slug]/page.jsx
import { getClient } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import NewsGallery from '@/components/NewsGallery';

// Sanity'den resimleri çekmek için bir yardımcı fonksiyon
function urlFor(source, client) {
  const builder = imageUrlBuilder(client);
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
  const galleryUrls = gallerySources.map((img) => urlFor(img, client).width(1600).url());

  const portableComponents = {
    block: {
      h1: ({children}) => (
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">{children}</h1>
      ),
      h2: ({children}) => (
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">{children}</h2>
      ),
      h3: ({children}) => (
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-black">{children}</h3>
      ),h4: ({children}) => (
        <h4 className="text-lg md:text-xl font-semibold mb-3 text-black">{children}</h4>
      ),
      normal: ({children}) => (
        <p className="text-black leading-relaxed mb-4">{children}</p>
      ),
      blockquote: ({children}) => (
        <blockquote className="text-gray-700 border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
      ),
    },
    list: {
      bullet: ({children}) => (
        <ul className="list-disc pl-6 text-black space-y-1 mb-4">{children}</ul>
      ),
      number: ({children}) => (
        <ol className="list-decimal pl-6 text-black space-y-1 mb-4">{children}</ol>
      ),
    },
    marks: {
      strong: ({children}) => <strong className="text-black font-semibold">{children}</strong>,
      em: ({children}) => <em className="text-black">{children}</em>,
      link: ({children, value}) => (
        <a href={value?.href} className="text-blue-600 hover:text-blue-800 underline" rel="noopener noreferrer" target="_blank">
          {children}
        </a>
      ),
    },
  };

  return (
    <article>
      <div className="bg-gradient-to-b from-[#2E6B4D] to-[#23523A] text-white pt-24 pb-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
        </div>
      </div>

      {post.coverImage && (
        <div className="mx-auto max-w-3xl px-6 mt-8">
          <div className="relative w-full h-[220px] md:h-[360px] lg:h-[420px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={urlFor(post.coverImage, client).width(1280).height(720).fit('crop').quality(85).auto('format').url()}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 768px"
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 py-12 max-w-4xl">

      <div className="max-w-none text-black">
        <PortableText value={post.content} components={portableComponents} />
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