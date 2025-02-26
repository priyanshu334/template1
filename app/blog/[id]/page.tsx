'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    image: '/images/pic11.png',
    title: 'The Best Hotel of the Year',
    description: 'A deep dive into what makes this hotel stand out from the rest.',
    content: 'This hotel was awarded the best of the year due to its stunning architecture, unmatched hospitality, and breathtaking views. Located in the heart of the city, it offers luxury at its best.',
  },
  {
    id: 2,
    image: '/images/pic12.png',
    title: 'Contrary to Belief, Lorem Ipsum Persists',
    description: 'There are many variants of passages, each with different preferences and needs.',
    content: 'Lorem Ipsum has been used for decades as placeholder text. Despite criticisms, it remains a fundamental part of design and typography, helping designers visualize layouts effectively.',
  },
  {
    id: 3,
    image: '/images/pic13.png',
    title: 'Why Lorem Ipsum Still Matters',
    description: 'Exploring the importance of placeholder text in modern web design.',
    content: 'Even in today’s web design, Lorem Ipsum is crucial for structuring content and ensuring that a layout is visually appealing before final copy is added.',
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === Number(id));

  if (!blog) {
    return <p className="text-center text-gray-500 mt-10 text-lg">Blog post not found.</p>;
  }

  return (
    <main className="max-w-3xl mx-auto py-16 px-6 bg-white shadow-lg rounded-lg">
      <Image 
        src={blog.image} 
        alt={blog.title} 
        width={800} 
        height={450} 
        className="w-full h-96 object-cover rounded-xl shadow-md" 
      />
      <h1 className="text-4xl font-extrabold text-gray-900 mt-6 leading-tight">{blog.title}</h1>
      <p className="text-lg text-gray-600 mt-3 italic">{blog.description}</p>
      <div className="mt-6 text-gray-700 leading-relaxed text-lg border-l-4 border-blue-500 pl-4">
        {blog.content}
      </div>
      <div className="mt-10 flex justify-center">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all">
          Read More Articles
        </button>
      </div>
    </main>
  );
}
