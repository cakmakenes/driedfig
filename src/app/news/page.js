// app/news/page.jsx
import { getClient } from '@/lib/sanity.client'; // draft mode-aware client
import { groq } from 'next-sanity';
import Link from 'next/link';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';

// Sanity'den resimleri çekmek için bir yardımcı fonksiyon
function urlFor(source, client) {
  const builder = imageUrlBuilder(client);
  return builder.image(source);
}

// Sanity'den tüm post'ları çekecek olan GROQ sorgusu
const postsQuery = groq`*[_type == "post"] | order(date desc, _updatedAt desc) {
  _id,
  title,
  slug,
  coverImage,
  date
}`;

export const revalidate = 60; // 60 saniyede bir veriyi yeniden kontrol et (isteğe bağlı)

export default async function NewsPage() {
  const client = await getClient();
  const posts = await client.fetch(postsQuery);

  return (
    <>
      <div className="bg-gradient-to-b from-[#2E6B4D] to-[#23523A] text-white py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">News from us</h1>
          <p className="text-[#CDE2D8] mt-3">Our company's latest news and updates</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post._id} href={`/news/${post.slug.current}`} className="group block">
            <div className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              {post.coverImage && (
                <Image
                  src={urlFor(post.coverImage, client).width(500).height(300).url()}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <div className="p-6 bg-white">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500">
                  {new Date(post.date || post._updatedAt).toLocaleDateString('tr-TR', {
                    year: 'numeric', month: 'long', day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </>
  );
}