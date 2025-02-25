import React from "react";
import { GetStaticProps } from 'next';

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    
    <div className="p-6">
      <h1>Static site generation: All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <a href={`/ssg/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`https://dummyjson.com/posts`);
    const data = await response.json();

    return {
      props: { posts: data.posts },
      revalidate: 10, 
    };
  } catch (error) {
    console.log(error);
    return {
      props: { posts: [] },
    };
  }
};