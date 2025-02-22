'use client';

import Image from 'next/image';

const blogPosts = [
  {
    image: '/images/pic11.png',
    title: 'The Best Hotel of the Year',
    description: '',
  },
  {
    image: '/images/pic12.png',
    title: 'Contrary to Belief, Lorem Ipsum Persists',
    description: 'There are many variants of passages, each with different preferences and needs.',
  },
  {
    image: '/images/pic13.png',
    title: 'Why Lorem Ipsum Still Matters',
    description: 'Exploring the importance of placeholder text in modern web design.',
  },
];

export default function LatestBlog() {
  return (
    <section className="max-w-7xl mx-auto py-14 px-6">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Latest Blog</h2>
        <p className="text-gray-500 mt-2 text-lg">Stay updated with our latest insights and articles.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {blogPosts.map((post, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {index === 0 ? (
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 backdrop-blur-md p-4 rounded-lg text-white">
                <h3 className="text-lg font-semibold">{post.title}</h3>
              </div>
            ) : (
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{post.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}