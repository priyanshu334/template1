'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const blogPosts = [
  {
    id: 1,
    image: '/images/pic11.png',
    title: 'The Best Hotel of the Year',
    description: 'A deep dive into what makes this hotel stand out from the rest.',
  },
  {
    id: 2,
    image: '/images/pic12.png',
    title: 'Contrary to Belief, Lorem Ipsum Persists',
    description: 'There are many variants of passages, each with different preferences and needs.',
  },
  {
    id: 3,
    image: '/images/pic13.png',
    title: 'Why Lorem Ipsum Still Matters',
    description: 'Exploring the importance of placeholder text in modern web design.',
  },
];

export default function BlogPage() {
  const router = useRouter();

  return (
    <main className="max-w-7xl mx-auto py-14 px-6">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Our Blog</h1>
        <p className="text-gray-500 mt-2 text-lg">Stay updated with the latest trends and insights.</p>
      </header>

      {/* Blog Section */}
      <section className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => router.push(`/blog/${post.id}`)}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{post.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center bg-blue-50 py-10 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900">Want More Insights?</h2>
        <p className="text-gray-600 mt-2">Subscribe to our newsletter for the latest updates.</p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">Subscribe</button>
      </section>
    </main>
  );
}
